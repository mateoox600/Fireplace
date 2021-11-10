"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Item_1 = require("../data/items/Item");
const router = express_1.Router();
router.get('/', (req, res) => {
    const itemId = req.query.itemId;
    if (!itemId) {
        res.status(400).send('This endpoint require an item id !');
        return;
    }
    res.json(Item_1.Items.find((item) => item.id === itemId));
});
router.get('/list', (req, res) => {
    res.json(Item_1.Items.map((e) => e.id));
});
exports.default = router;
