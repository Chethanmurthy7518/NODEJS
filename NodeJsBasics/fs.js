console.log("Programm Started");

const fs = require('fs')
if(!fs.existsSync('demo')){
    fs.mkdirSync("demo")

}


fs.writeFileSync("demo/test.txt","Hello Chethan")
if(fs.existsSync("demo/test.txt")){
    const data = fs.readFileSync('demo/test.txt')

    console.log(data);

    console.log(data.toString());
    
}


console.log("Programme ended");