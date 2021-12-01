const http = require('http')
const url = require('url')

http.createServer((request,response)=>{
    //parsing the url using url module to seperate path and  
    //convert query string as an object

    const reqUrl = url.parse(request.url, true)
    // console.log("requrl",reqUrl);
    console.log("query string", reqUrl.query.name);

    response.write("Hello World in write ")
    response.write("Welcomes you")
    response.write(JSON.stringify(reqUrl.query))
    response.end()
}).listen(2000,()=>{
    console.log("Server listening in port 2000");
})