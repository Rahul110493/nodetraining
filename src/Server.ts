
import * as express from 'express';
import * as bodyparser from 'body-parser';

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

    
     public run()
    {
        const{ port } = this.config;
        this.app.listen(port,()=>
        {
            const message = `App is listening at port ${port}`;
            console.log(message);
        }
        )
       
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: true }));
        this.app.get('/', (req,res) =>
        {
        res.send('Hi This my Page')
        
       
        })  
        this.app.post('/',(req,res)=>
        {
            console.log(req.body);
            res.send(req.body);
        }
        )
    
    }
}