// Write 'Chethan, ' and then end with 'Welcome!'.
const fs = require('fs');

if(!fs.existsSync('writingfile')){
    fs.mkdirSync("writingfile")

}
const write = fs.createWriteStream('writingfile/name.txt');
write.write('Chethan ');
write.write('From Devanahalli ')
write.end(' Welcome!');
// Writing more now is not allowed!