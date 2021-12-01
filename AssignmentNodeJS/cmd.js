console.log("Programme Started");

const fs = require('fs')
if(!fs.existsSync('command')){
    fs.mkdirSync("command")

}
const args = process.argv
console.log(args)

//Writting to the file.
    try{
    fs.appendFileSync("command/test.txt","\n"+args[2]+args[3] + args[4]+args[5]);
    }
    catch(err){
      console.log("Appending Failed",err);
    }

    console.log("Prgramme Ended")