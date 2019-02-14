import {IPermission} from './interface';
export const permissions:IPermission =
{
    getUsers: {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
        }
}