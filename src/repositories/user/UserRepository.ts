import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { UserModel, userSchema } from './UserModel';
export default class UserRepository {
  constructor() {
    this.Model = UserModel;
  }
  public static generateObjectID() {
    
    return String(mongoose.Types.ObjectId());
  }
  private Model: mongoose.Model<IUserModel>;

  public userFind(data) {
    console.log(data)
    return this.Model.findOne(data, (err, result) => {
      if (err) {
          return err;
      }
     
      return result;
    });
  }
  public userCount() {
  return this.Model.countDocuments();
  }  
  public create(data: any): Promise<IUserModel> {
    return this.Model.create({...data, _id: UserRepository.generateObjectID()});
  }
  public delete() {
    return this.Model.deleteOne({ name: 'mno' });
  }
  public update() {
    return this.Model.updateMany({ name: 'xyz' }, { $set: {name: 'rohit' } });

  }
}
