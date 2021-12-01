const http = require('http')
const fs =require('fs')

http.createServer((req,res)=>{

    if(req.url === '/' && req.method === 'GET'){
        fs.readFile('./view/view.txt',(err,data)=>{
            if(err){
                res.writeHead(404,{
                    'content-type':"text/plain"
                })
                res.write("File Not Found")
                res.end()
            }else{
                res.writeHead(200,{
                    'content-type':'text/html'
                })
                res.write(data)
                res.end()
            }
        })

    }else{
        res.writeHead(404,{
            "content-type":"text/plain",
        })
        res.end("Invalid Path or Invalid HTTP method")
    }

   
}).listen(2000)