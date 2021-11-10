import { Router } from 'express';
import { Items } from '../data/items/Item';
import PlayerManager from '../players/PlayerManager';

const router = Router();

router.get('/sell', (req, res) => {
    const player = PlayerManager.getPlayer(req.headers.token as string);
    const itemId = req.query.itemId;
    const itemNumber = Math.floor(Number(req.query.number));

    if(!itemId) {
        res.status(400).send('This endpoint require an item id !');
        return;
    }
    if(!req.query.number) {
        res.status(400).send('This endpoint require an item number !');
        return;
    }
    if(isNaN(itemNumber) || itemNumber <= 0) {
        res.status(400).send('This endpoint require a valid item number !');
        return;
    }

    const item = Items.find((item) => item.id === itemId);

    if(!item) {
        res.status(400).send('This endpoint require a valid item id !');
        return;
    }

    if(player.inventory[item.id] < itemNumber) {
        res.status(400).send(`You don't have ${itemNumber} ${item.name} !`);
        return;
    }

    player.inventory[item.id] -= itemNumber;
    player.coins += item.value * itemNumber;

    PlayerManager.updatePlayer(player);
    res.json({
        income: item.value * itemNumber
    });
});

export default router;