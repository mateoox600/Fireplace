import { Router } from 'express';
import { Items } from '../data/items/Item';

const router = Router();

router.get('/', (req, res) => {
    const itemId = req.query.itemId;

    if(!itemId) return res.status(400).send('This endpoint require an item id !');

    res.json(Items.find((item) => item.id === itemId));
});

router.get('/list', (req, res) => {
    res.json(Items.map((e) => e.id));
});

export default router;