const http = require('http')
const handler = require('./data.js')

http.createServer(handler.requestHandler).listen(2000,()=>{
    console.log("Server is LIstening in Port 2000");
})