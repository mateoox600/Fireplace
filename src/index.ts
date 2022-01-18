import express, { Request, Response, NextFunction } from 'express';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

import gameRouter from './game';
import PlayerManager from './players/PlayerManager';
import Logger from './utils/Logger';

const port = 25611;
const app = express();
const logger = new Logger();

export const players = new JsonDB(new Config('players', true, false, '/'));

const needToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;

    if(!token) return res.status(400).send('This endpoint require a token !');

    if(!PlayerManager.playerExist(token as string)) return res.status(403).send('This token isn\'t valid !');

    next();
};

app.use(logger.logCallback.bind(logger));

app.get('/new', (req, res) => {
    const newPlayer = PlayerManager.newPlayer();
    
    res.json({
        token: newPlayer.token,
        warning: 'Don\'t give this token to anyone nor lose it.'
    });
});

app.use('/game/', needToken, gameRouter);

app.listen(port, () => {
    logger.log(`App listening on ${port}`);
});