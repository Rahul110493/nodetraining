
import * as express from 'express';

export default class Server
{
    private app: express.Express;
    
    constructor(private config: any)
    {
        this.app = express();
    }

    getApplication()
    {
        return this.app;
    }

    public setupRoutes()
    {
        // const{ env, apiPrefix} = this.config;
    

        this.app.use('/health-check', (req,res) =>
        {
        res.send('I am OK');
        })   
    
    }
    public run()
    {
        const{ port } = this.config;
        this.app.listen(port,()=>
        {
            const message = `App is listening at port ${port}`;
            console.log(message);
        }
        )
    }
}