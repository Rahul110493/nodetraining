import {diamond} from './patterns'
import {equilateral} from './patterns'
import {hasPermission} from './utils'
import {users} from './utils'
import {validateUsers} from './utils'

console.log(hasPermission('getUsers','trainee','read'))
console.log(validateUsers(users))
