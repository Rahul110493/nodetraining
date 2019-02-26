import * as express from 'express'
import traineeController from './controller'
import validation from './validation'
import {validationHandler} from '../../libs/routes';
import {authMiddleware} from '../../libs/routes';


const traineeRouter = express.Router();

const { get: getData, post: postData,put: putData, delete: deleteData } = validation;
const { get,post,put, delete:del } = traineeController;



traineeRouter.get('/',validationHandler(getData),get),
traineeRouter.post('/',validationHandler(postData),post),
traineeRouter.put('/',validationHandler(putData),put),
traineeRouter.delete('/:id',validationHandler(deleteData),del)

export {traineeRouter}









