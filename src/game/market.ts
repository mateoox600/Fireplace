import { Router } from 'express';
import { Items } from '../data/items/Item';
import PlayerManager from '../players/PlayerManager';
import { ItemIdDoesntExistError, ItemNumberIsntValidError, NotEnoughItemError, RequireItemIdError, RequireItemNumberError } from '../utils/Error';

const router = Router();

router.get('/sell', (req, res) => {
    const player = PlayerManager.getPlayer(req.headers.token as string);
    
    const itemId = req.query.itemId;
    if(!itemId) return res.status(400).send({ error: RequireItemIdError });

    const item = Items.find((item) => item.id === itemId);
    if(!item) return res.status(400).send({ error: ItemIdDoesntExistError });

    const itemNumber = Math.floor(Number(req.query.number));
    if(!req.query.number) return res.status(400).send({ error: RequireItemNumberError });
    if(isNaN(itemNumber) || itemNumber <= 0) return res.status(400).send({ error: ItemNumberIsntValidError });


    if(player.inventory[item.id] < itemNumber) return res.status(400).send({ error: NotEnoughItemError });

    player.inventory[item.id] -= itemNumber;
    player.coins += item.value * itemNumber;

    PlayerManager.updatePlayer(player);

    res.json({
        income: item.value * itemNumber
    });
});

export default router;