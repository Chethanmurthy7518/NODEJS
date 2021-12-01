const http= require('http')
const { request } = require('https')

const server = http.createServer((request,response)=>{
    console.log('Request was Succesfull');
    console.log('Request',request) //To check request
    console.log('Response',response);//To check resonse
    response.end('Welcome to Node js')
});

server.listen(2000,()=>{
    console.log('Server is listening on port 2000');
})