import * as mongoose from 'mongoose';



export default class UserSchema extends mongoose.Schema {
  constructor(option: any) {
    const data = {
      _id: String,
      id: String,
      email: String,
      name: String,
      password: String,
      role: String,
    };
    super(data, option);
  }

}
