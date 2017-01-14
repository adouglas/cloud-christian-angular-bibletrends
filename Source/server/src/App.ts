import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import HeroRouter from './routes/HeroRouter';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  expressServer: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressServer = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressServer.use(logger('dev'));
    this.expressServer.use(bodyParser.json());
    this.expressServer.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.expressServer.use('/', router);
    this.expressServer.use('/api/v1/heroes', HeroRouter);
  }

}
export default new App().expressServer;
