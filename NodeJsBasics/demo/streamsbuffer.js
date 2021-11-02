const fs = require('fs')

const readStream = fs.createReadStream('./view/view.txt')

console.log('ReadSream',  readStream);