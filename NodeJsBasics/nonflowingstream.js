const fs = require('fs')

const readStream = fs.createReadStream('./demo/test.txt')

setTimeout(()=>{
    const data = readStream.read(1)
    console.log('Data ',data);
},1000)