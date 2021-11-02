const fs = require('fs')

const readStream = fs.createReadStream('./view/view.txt',{
    highWaterMark:128*1024,
})
let readData=''
// console.log('ReadSream',  readStream);

readStream.on('open',()=>{
    console.log('Stream Opened.....');
})

readStream.on('data',(chunk)=>{
    console.log("Buffer");
    console.log(chunk);
    readData+=chunk.toString()
    console.log("\n");
})

readStream.on('end',()=>{
    console.log("Stream Closed.....");
    // console.log(readData)
})

readStream.on('error',(err)=>{
    console.log("Error");

})

setTimeout(()=>{
    const data= readStream.read(10000)
    console.log("data",data);

},1000)