import { Router } from 'express';
import { HuntableEntities } from './data/entities/HuntableEntity';
import PlayerManager from './players/PlayerManager';
import Range from './utils/Range';

const router = Router();

router.get('/', (req, res) => {
    const player = PlayerManager.getPlayer(req.headers.token as string);
    res.json({
        ...player,
        level: PlayerManager.calculateXpLevel(player),
        maxHealth: PlayerManager.calculateMaxHealth(player)
    });
});

router.get('/mine', (req, res) => {
    const player = PlayerManager.getPlayer(req.headers.token as string);

    if(player.cooldown.mining.last + player.cooldown.mining.time > Date.now()) return res.status(429).setHeader('Retry-After', player.cooldown.mining.last + player.cooldown.mining.time - Date.now()).send();
    
    const randCoins = Math.floor(Math.random() * 10) + 5;
    const randTime = Math.floor((Math.random() * 10 + 5) * 1000);

    player.coins += randCoins;
    player.cooldown.mining.last = Date.now();
    player.cooldown.mining.time = randTime;

    PlayerManager.updatePlayer(player);

    res.json({
        gain: randCoins,
        time: Date.now(),
        delay: randTime
    });
});

router.get('/hunt', (req, res) => {
    const player = PlayerManager.getPlayer(req.headers.token as string);

    if(player.health < 1) return res.send('you don\'t have enough health to do that !');

    const entityId = req.query.entityId;

    if(!entityId) return res.status(400).send('This endpoint require an huntable entity id !');

    const entity = HuntableEntities.find((entity) => entity.id === entityId);

    if(!entity) return res.status(404).send('This entity doesn\'t exist or it isn\'t an huntable entity !');

    let entityHealth = Math.floor(entity.health.rand());

    while(entityHealth > 0 && player.health > 0) {
        player.health = Math.floor(Math.max(player.health - Math.max(entity.attack.rand() - Range.rand(player.defense), 0), 0));
        if(player.health < 1) break;
        entityHealth -= Math.floor(Math.max(Range.rand(player.attack) - entity.defense.rand(), 0));
    }
    
    if(entityHealth > 0) res.send(`You were killed during your fight with a ${entity.name}`);
    else {
        const rewards = {
            coins: Math.floor(entity.rewards.coins.rand()),
            xp: Math.floor(entity.rewards.xp.rand()),
            items: entity.rewards.items.map((v) => {
                return { id: v.id, n: Math.floor(v.range.rand()) };
            })
        };

        player.coins += rewards.coins;
        player.xp += rewards.xp;

        rewards.items.forEach((i) => {
            if(player.inventory[i.id]) player.inventory[i.id] += i.n;
            else player.inventory[i.id] = i.n;
        });
        
        res.json({
            rewards
        });
    }
    PlayerManager.updatePlayer(player);
});

import entityRouter from './game/entity';
router.use('/entity/', entityRouter);

import itemRouter from './game/item';
router.use('/item/', itemRouter);

import marketRouter from './game/market';
router.use('/market/', marketRouter);

export default router;