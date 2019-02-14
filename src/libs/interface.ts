export interface IPermission{
    [getTrainee:string]: {
        all: string[];
        read: string[];
        write: string[];
        delete: string[]
    }
 }