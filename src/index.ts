import express, { Request, Response, NextFunction } from 'express';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

import gameRouter from './game';
import PlayerManager from './players/PlayerManager';

const port = 55677;
const app = express();

export const players = new JsonDB(new Config('players', true, false, '/'));

const needToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;

    if(!token) {
        res.status(400).send('This endpoint require an token !');
        return;
    }

    if(!PlayerManager.playerExist(token as string)) {
        res.status(403).send('This token isn\'t valid !');
        return;
    }

    next();
};

app.get('/new', (req, res) => {
    const newPlayer = PlayerManager.newPlayer();
    res.json({
        token: newPlayer.token,
        warning: 'Don\'t give this token to anyone nor lose it'
    });
});

app.use('/game/', needToken, gameRouter);

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});