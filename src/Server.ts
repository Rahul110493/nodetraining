
import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import { router } from './router';
import { Database } from './libs//routes'


export class Servers {
    private app: express.Express;

    constructor(private config: any) {
        this.app = express();
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();

        return this;
    }

    public setupRoutes() {
        const { app } = this;
        app.use('/health-check', (req, res) => {
            res.send('I am OK');
        })
        app.use('/api', router)
        app.use(notFoundRoute);
        app.use(errorHandler);




    }

    public initBodyParser() {
        this.app.use(bodyparser.urlencoded({ extended: false }))
        this.app.use(bodyparser.json())

    }

    public async run() {
        try {
            const { MONGO_URL, port } = this.config;
            console.log(MONGO_URL);
            const result = await Database.open(MONGO_URL);
            if (result) {
                console.log('Connected')
                this.app.listen(port, (err) => {
                    // if(err){throw err;}
                    const message = `App is listening at port ${port}`;
                    console.log(message);
                }
                )
            }
        }
        catch(err)
        {
            console.log(err)
        }
 
    }
}