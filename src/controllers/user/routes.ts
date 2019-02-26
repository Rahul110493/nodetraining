import * as express from 'express'
import userController from './controller'
import validation from './validation'
import {validationHandler} from '../../libs/routes';
import {authMiddleware} from '../../libs/routes';


const userRouter = express.Router();

const { get: getData, post: postData,put: putData, delete: deleteData } = validation;
const { get,post,put, delete:del } = userController;



userRouter.get('/',validationHandler(getData),get),
userRouter.post('/',validationHandler(postData),post),
userRouter.put('/',validationHandler(putData),put),
userRouter.delete('/:id',validationHandler(deleteData),del)

export {userRouter}









