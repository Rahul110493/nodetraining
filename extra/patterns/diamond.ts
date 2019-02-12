export default function diamond(rows)
{
let space=rows-1
for (let j = 1; j <= rows; j++) 
{
var str = ''
        
            for (let i = 1; i <= space; i++) 
            {
                str+=' '
            }
            space--;
            for (let i = 1; i <= 2 * j - 1; i++) 
            {
                str+='*'               
            }
                console.log(str)
        
    } 
   let  space1=0  
    for (let j = rows-1; j >=1 ; j--) 
    {
        
       let str1=''
        for(let i =0;i<=space1;i++)
        {
            str1+=' '
        }
        space1++
        for(let i=1;i<=2*j -1;i++)
        {
            str1+='*'
        }
        console.log(str1)
        
    }
}


