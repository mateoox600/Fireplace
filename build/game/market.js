"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Item_1 = require("../data/items/Item");
const PlayerManager_1 = __importDefault(require("../players/PlayerManager"));
const router = express_1.Router();
router.get('/sell', (req, res) => {
    const player = PlayerManager_1.default.getPlayer(req.headers.token);
    const itemId = req.query.itemId;
    const itemNumber = Math.floor(Number(req.query.number));
    if (!itemId) {
        res.status(400).send('This endpoint require an item id !');
        return;
    }
    if (!req.query.number) {
        res.status(400).send('This endpoint require an item number !');
        return;
    }
    if (isNaN(itemNumber) || itemNumber <= 0) {
        res.status(400).send('This endpoint require a valid item number !');
        return;
    }
    const item = Item_1.Items.find((item) => item.id === itemId);
    if (!item) {
        res.status(400).send('This endpoint require a valid item id !');
        return;
    }
    if (player.inventory[item.id] < itemNumber) {
        res.status(400).send(`You don\'t have ${itemNumber} ${item.name} !`);
        return;
    }
    player.inventory[item.id] -= itemNumber;
    player.coins += item.value * itemNumber;
    PlayerManager_1.default.updatePlayer(player);
    res.json({
        income: item.value * itemNumber
    });
});
exports.default = router;
