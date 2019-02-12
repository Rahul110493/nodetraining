
export default function equilateral(rows)
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
}

