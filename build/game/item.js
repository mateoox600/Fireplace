"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Item_1 = require("../data/items/Item");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const itemId = req.query.itemId;
    if (!itemId)
        return res.status(400).send('This endpoint require an item id !');
    res.json(Item_1.Items.find((item) => item.id === itemId));
});
router.get('/list', (req, res) => {
    res.json(Item_1.Items.map((e) => e.id));
});
exports.default = router;
