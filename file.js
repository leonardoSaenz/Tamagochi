const fs = require('fs');

fs.writeFile('data1.txt', 'mipene', (error)=>
{
    if(error){
        console.log('Error');
    }
}) 