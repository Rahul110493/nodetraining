import * as express from 'express'
import traineeController from './controller'
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler';

const traineeRouter = express.Router();

const { get: getData, post: postData,put: putData, delete: deleteData } = validation;
const { get,post,put, delete:del } = traineeController;



// traineeRouter.get('/',validationHandler(getData),get)
traineeRouter.post('/',validationHandler(postData),post)
// traineeRouter.put('/',put)
// traineeRouter.delete('/',validationHandler(deleteData),del)

export {traineeRouter}









