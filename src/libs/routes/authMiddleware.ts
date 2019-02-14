import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';
 
export default function authMiddleWare(module, permissionType) {
      return (req, resp, next) => {
      
        const token = req.headers.authorization;
        console.log(token)
        const Key = process.env.KEY;
        // config();
        console.log(Key)
        const user = jwt.verify(token, Key, (err, res) => {
          if (err) {
            console.log(err)
            next({
              error: 'Unauthorized Access',
              message: 'Unauthorized user',
              status: 403,
            });
          }
          return res;

        })
        console.log(user.role);
        if(!hasPermission(module,user.role,permissionType))
        {
          next(
            {
              error: 'Unauthorized User',
              message: 'User does not has access',
              status: 403,
            }
          )
        }
   
    next();
}


}