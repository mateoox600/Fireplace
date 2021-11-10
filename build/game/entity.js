"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Entity_1 = require("../data/entities/Entity");
const HuntableEntity_1 = require("../data/entities/HuntableEntity");
const router = express_1.Router();
router.get('/', (req, res) => {
    const entityId = req.query.entityId;
    if (!entityId) {
        res.status(400).send('This endpoint require an entity id !');
        return;
    }
    res.json(Entity_1.Entities.find((entity) => entity.id === entityId));
});
router.get('/list', (req, res) => {
    res.json(Entity_1.Entities.map((e) => e.id));
});
router.get('/list/huntable', (req, res) => {
    res.json(HuntableEntity_1.HuntableEntities.map((e) => e.id));
});
exports.default = router;
