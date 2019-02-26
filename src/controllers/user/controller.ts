import {Request, Response} from 'express'
class userController
{
  public get(req:Request,res:Response)
  {
    res.send('This is GET request')
  }
  
  public post(req:Request,res:Response)
  {
    res.send('This is POST request')
  }
  public put(req:Request,res:Response)
  {
    res.send('This is PUT request')
  }
  public delete(req:Request,res:Response)
  {
    res.send('This is DELETE request')
  }
}

export default new userController;