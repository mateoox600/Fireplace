import { Router } from 'express';
import { Items } from '../data/items/Item';
import { ItemDoesntExistError, RequireItemIdError } from '../utils/Error';

const router = Router();

router.get('/', (req, res) => {
    const itemId = req.query.itemId;

    if(!itemId) return res.status(400).send({ error: RequireItemIdError });

    const item = Items.find((item) => item.id === itemId);

    if(!item) return res.status(404).send({ error: ItemDoesntExistError });

    res.json(item);
});

router.get('/list', (req, res) => {
    res.json(Items.map((e) => e.id));
});

export default router;