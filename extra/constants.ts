import {IPermission} from './interface'
import {IUsers} from './interface'
export const permissions:IPermission =
{
    getUsers: {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
        }
}

export const users:IUsers[]= 
[
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    }
];
