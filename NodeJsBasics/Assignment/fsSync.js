console.log("Programm Started");

const fs = require('fs')
if(!fs.existsSync('file1')){
    fs.mkdirSync("file1")

}


fs.writeFileSync("file1/test1.txt","Welcome Chethan")

//----Reading the file
if(fs.existsSync("file1/test1.txt")){
    const data = fs.readFileSync('file1/test1.txt')

    console.log(data);

    console.log(data.toString());
    
}
// Appending 

if(fs.existsSync("file1/test1.txt")){
  console.log("appending")
  fs.appendFileSync("file1/test1.txt","Appending this File",(err)=>{
    if(err){
      console.log("Error",err)
    }else{
      
      const appendData = fs.readFileSync("file1/test1.txt")
      console.log("Appending ",appendData);
      
    }
  })
  
}

//Renaming the file
// const currentPath = "file1/test1.txt"
// const newPath = "file2/test2.txt"
// fs.renameSync(currentPath, newPath, function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("Successfully renamed the file.")
//     }
//   })


console.log("Programme ended");