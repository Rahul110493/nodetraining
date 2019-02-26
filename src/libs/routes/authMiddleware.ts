import * as jwt from 'jsonwebtoken';
import { hasPermission } from './permission';
import UserRepository from '../../repositories/user/UserRepository';

export default function authMiddleWare(module, permissionType) {
  return (req, resp, next) => {

    const token = req.headers.authorization;
    console.log(token)
    const Key = process.env.KEY;
    
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
    console.log(`User is ${user}`);
    const repository = new UserRepository;

    console.log(user);
    const { email, role, name } = user;



    repository.userFind({name, email, role}).then((result) => {
      if (!result) {
        next({
          error: 'Unauthorized Access',
          message: 'Data of this user is not present in Database',
          status: 400,
        });
      }

      if (result !== null && !hasPermission(module, result.role, permissionType)) {
        next({
          error: 'Permission Denied',
          message: `Access of ${permissionType} for ${result.role} do not exits`,
          status: '400',
        });
      }
      next();
    });
    
  }
}