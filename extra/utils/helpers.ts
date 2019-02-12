import { permissions } from '../constants'
export function validateEmail(email)
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

