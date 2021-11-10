import { Router } from 'express';
import { Entities } from '../data/entities/Entity';
import { HuntableEntities } from '../data/entities/HuntableEntity';

const router = Router();

router.get('/', (req, res) => {
    const entityId = req.query.entityId;

    if(!entityId) { res.status(400).send('This endpoint require an entity id !'); return; }

    res.json(Entities.find((entity) => entity.id === entityId));
});

router.get('/list', (req, res) => {
    res.json(Entities.map((e) => e.id));
});

router.get('/list/huntable', (req, res) => {
    res.json(HuntableEntities.map((e) => e.id));
});

export default router;