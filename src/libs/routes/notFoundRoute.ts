import {Request,Response} from 'express';
export default function notfoundRoutes(req: Request,res: Response,next)
{
  next({error: 'Not Found',status: 400});
}