import {IPermission} from './interface';
export const permissions:IPermission =
{
    getUsers: {
        all: ['head-trainer'],
        read : ['Trainee', 'Trainer'],
        write : ['Trainer'],
        delete: [],
        }
}