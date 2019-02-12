import {users} from '../constants'
import {validateEmail} from './helpers'
var validUsers=0
var invalidUsers=0

export default function validateUsers(users)
{
//  for(const [index, element] of users.entries())
//  {
//    const { traineeEmail,reviewerEmail} = element;
//    if(validateEmail)
//  }
    
    
    users.forEach(element => {
        console.log(element)
        for (var prop in element)
         {
        
            
            
            if (validateEmail(element[prop]))
            {
                
                validUsers+=1
                
            }
            else{
                invalidUsers+=1
            }
         }


        // const { traineeEmail,reviewerEmail} = element;
        // if( validateEmail(traineeEmail) && validateEmail(reviewerEmail))
        //     {
        //         validUsers+=1
        //         console.log(`User is ${traineeEmail}`)
        //         console.log(`Valid users are ${validUsers}`)
        //     }
        // else
        // {
        //         invalidUsers+=1
        //         console.log(`Valid users are ${invalidUsers}`)
        // }
    });
    console.log(`Valid users are ${validUsers}`);
    console.log(`Invalid users are ${invalidUsers}`);
}



