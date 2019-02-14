import {permissions} from '../constants'
export  function hasPermission(moduleName,role,permissionType)
{
  const module=permissions[moduleName]
  console.log(module)
  const users=module[permissionType]
  console.log(users)

    for(const [index, element] of users.entries())
     {
         console.log(element)
        if(element === role && element !== undefined)
              {
                console.log(element)
                console.log(role)
                console.log('inside if ')
                return true;
   
         }
        
}
return false
}
