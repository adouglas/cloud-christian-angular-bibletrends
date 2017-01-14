"use strict";
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const HeroRouter_1 = require("./routes/HeroRouter");
class App {
    constructor() {
        this.expressServer = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.expressServer.use(logger('dev'));
        this.expressServer.use(bodyParser.json());
        this.expressServer.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.expressServer.use('/', router);
        this.expressServer.use('/api/v1/heroes', HeroRouter_1.default);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().expressServer;
