var users = 
[
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    }
];
validUsers=0
invalidUsers=0
function validateEmail(email)
{
    
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(email))
    {
        
        if(email.indexOf("@successive.tech", email.length - "@successive.tech".length) !== -1){
         
            return true;
        }
    }
    else
    {
        return false; 
    }
}
function validateUsers(users)
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

validateUsers(users)

