var permissions=
{
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
        }
}

 function hasPermission(moduleName,role,permissionType)
{
  const module=permissions[moduleName]
  const users=module[permissionType]
//   users.forEach(element => {
    
//       if(element === role)
//       {
//         console.log(element)
//         console.log(role)
//         console.log('inside if ')
//         return true;

//       }
      
//   });
    for(const [index, element] of users.entries())
     {
        if(element === role)
              {
                console.log(element)
                console.log(role)
                console.log('inside if ')
                return true;
   
         }
         else
         {
             return false
         }

}
}

console.log(hasPermission('getUsers','trainer','all'))
