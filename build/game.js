"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HuntableEntity_1 = require("./data/entities/HuntableEntity");
const PlayerManager_1 = __importDefault(require("./players/PlayerManager"));
const Range_1 = __importDefault(require("./utils/Range"));
const router = express_1.Router();
router.get('/', (req, res) => {
    const player = PlayerManager_1.default.getPlayer(req.headers.token);
    res.json(Object.assign(Object.assign({}, player), { level: PlayerManager_1.default.calculateXpLevel(player), maxHealth: PlayerManager_1.default.calculateMaxHealth(player) }));
});
router.get('/mine', (req, res) => {
    const player = PlayerManager_1.default.getPlayer(req.headers.token);
    if (player.cooldown.mining.last + player.cooldown.mining.time > Date.now())
        return res.status(429).setHeader('Retry-After', player.cooldown.mining.last + player.cooldown.mining.time - Date.now()).send();
    const randCoins = Math.floor(Math.random() * 10) + 5;
    const randTime = Math.floor((Math.random() * 10 + 5) * 1000);
    player.coins += randCoins;
    player.cooldown.mining.last = Date.now();
    player.cooldown.mining.time = randTime;
    PlayerManager_1.default.updatePlayer(player);
    res.json({
        gain: randCoins,
        time: Date.now(),
        delay: randTime
    });
});
router.get('/hunt', (req, res) => {
    const player = PlayerManager_1.default.getPlayer(req.headers.token);
    if (player.health < 1)
        return res.send('you don\'t have enough health to do that !');
    const entityId = req.query.entityId;
    if (!entityId)
        return res.status(400).send('This endpoint require an huntable entity id !');
    const entity = HuntableEntity_1.HuntableEntities.find((entity) => entity.id === entityId);
    if (!entity)
        return res.status(404).send('This entity doesn\'t exist or it isn\'t an huntable entity !');
    let entityHealth = Math.floor(entity.health.rand());
    while (entityHealth > 0 && player.health > 0) {
        player.health = Math.floor(Math.max(player.health - Math.max(entity.attack.rand() - Range_1.default.rand(player.defense), 0), 0));
        if (player.health < 1)
            break;
        entityHealth -= Math.floor(Math.max(Range_1.default.rand(player.attack) - entity.defense.rand(), 0));
    }
    if (entityHealth > 0)
        res.send(`You were killed during your fight with a ${entity.name}`);
    else {
        const rewards = {
            coins: Math.floor(entity.rewards.coins.rand()),
            xp: Math.floor(entity.rewards.xp.rand()),
            health: Math.floor(entity.rewards.health.rand()),
            items: entity.rewards.items.map((v) => {
                return { id: v.id, n: Math.floor(v.range.rand()) };
            })
        };
        player.coins += rewards.coins;
        player.xp += rewards.xp;
        player.health = Math.min(player.health + rewards.health, PlayerManager_1.default.calculateMaxHealth(player));
        rewards.items.forEach((i) => {
            if (player.inventory[i.id])
                player.inventory[i.id] += i.n;
            else
                player.inventory[i.id] = i.n;
        });
        res.json({
            rewards
        });
    }
    PlayerManager_1.default.updatePlayer(player);
});
const entity_1 = __importDefault(require("./game/entity"));
router.use('/entity/', entity_1.default);
const item_1 = __importDefault(require("./game/item"));
router.use('/item/', item_1.default);
const market_1 = __importDefault(require("./game/market"));
router.use('/market/', market_1.default);
exports.default = router;
