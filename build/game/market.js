"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Item_1 = require("../data/items/Item");
const PlayerManager_1 = __importDefault(require("../players/PlayerManager"));
const router = (0, express_1.Router)();
router.get('/sell', (req, res) => {
    const player = PlayerManager_1.default.getPlayer(req.headers.token);
    const itemId = req.query.itemId;
    if (!itemId)
        return res.status(400).send('This endpoint require an item id !');
    const item = Item_1.Items.find((item) => item.id === itemId);
    if (!item)
        return res.status(400).send('This endpoint require a valid item id !');
    const itemNumber = Math.floor(Number(req.query.number));
    if (!req.query.number)
        return res.status(400).send('This endpoint require an item number !');
    if (isNaN(itemNumber) || itemNumber <= 0)
        return res.status(400).send('This endpoint require a valid item number !');
    if (player.inventory[item.id] < itemNumber)
        return res.status(400).send(`You don't have ${itemNumber} ${item.name} !`);
    player.inventory[item.id] -= itemNumber;
    player.coins += item.value * itemNumber;
    PlayerManager_1.default.updatePlayer(player);
    res.json({
        income: item.value * itemNumber
    });
});
exports.default = router;
