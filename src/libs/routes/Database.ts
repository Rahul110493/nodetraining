import * as mongoose from 'mongoose';
class Database 
{
    public static async open(mongo) {
        const result = await mongoose.connect(mongo,{useNewUrlParser: true})
        return result;
    }

    public static  disconnect()
    {
        mongoose.disconnect();
    }
}

export default Database;