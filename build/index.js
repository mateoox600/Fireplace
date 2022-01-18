"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.players = void 0;
const express_1 = __importDefault(require("express"));
const node_json_db_1 = require("node-json-db");
const JsonDBConfig_1 = require("node-json-db/dist/lib/JsonDBConfig");
const game_1 = __importDefault(require("./game"));
const PlayerManager_1 = __importDefault(require("./players/PlayerManager"));
const Logger_1 = __importDefault(require("./utils/Logger"));
const port = 25611;
const app = (0, express_1.default)();
const logger = new Logger_1.default();
exports.players = new node_json_db_1.JsonDB(new JsonDBConfig_1.Config('players', true, false, '/'));
const needToken = (req, res, next) => {
    const token = req.headers.token;
    if (!token)
        return res.status(400).send('This endpoint require an token !');
    if (!PlayerManager_1.default.playerExist(token))
        return res.status(403).send('This token isn\'t valid !');
    next();
};
app.use(logger.logCallback.bind(logger));
app.get('/new', (req, res) => {
    const newPlayer = PlayerManager_1.default.newPlayer();
    res.json({
        token: newPlayer.token,
        warning: 'Don\'t give this token to anyone nor lose it'
    });
});
app.use('/game/', needToken, game_1.default);
app.listen(port, () => {
    logger.log(`App listening on ${port}`);
});
