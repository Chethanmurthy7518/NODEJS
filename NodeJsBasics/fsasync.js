const fs = require("fs")

console.log("Programme started");

const writeData = () => {
    fs.writeFile("view/view.txt",'Hello This is Chethan',(fileErr)=> {
        if(fileErr){
            console.log("File ERROr",fileErr);
        }else{
            console.log("Data Written Succefully");
            
        }
    })
}

const readData = () =>{
    fs.readFile("view/view.txt",(err,data) => {
        if(err){
            console.log("Error",err);
        }else{
            console.log("Data",data.toString());
        }
    })
}

if(fs.exists("view",(exists)=>{
    if(!exists){
        fs.mkdir("view",(err)=>{
            if(err){
                console.log("The folder not Created",err);
            }else{
                console.log("The Folder is Created");

                writeData();
                readData();

            }
       });
    }else{
        writeData();
        readData();
    }
}))


console.log("Programme Ended");