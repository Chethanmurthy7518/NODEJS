const os = require('os')

//Architecture of os
console.log("Archtecture",os.arch());

//Os Platform
console.log("PlatForm",os.platform());

//free Memory in bytes
console.log("Free Memory",os.freemem());

//total space in bytes
console.log("Total Space ",os.totalmem());

//to get cpu info
console.log("CPU info",os.cpus());

const memInBytes= os.freemem();
const memInKB = memInBytes/1024;
const memInMB = memInKB/1024;
const memInGB = memInMB/1024;

console.log("Free Space in bytes",Math.floor(memInBytes));
console.log("Free Space in KB",Math.floor(memInKB));
console.log("Free Space in MB",Math.floor(memInMB));
console.log("Free Space in GB",Math.floor(memInGB));