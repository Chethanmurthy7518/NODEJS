

const users = [
    {
        id:1,
        uname:"Chethan",
        age:20

    },
    {
        id:2,
        uname:"bailu",
        age:23

    }
]



const requestHandler = (request,response)=>{
    if(request.url === '/'){
        response.end("Home Page ")
    }else if(request.url === '/login'){
        response.end('<h1>Login Page</h1>')
    }else if(request.url === '/users'){
        const userData = JSON.stringify(users);
        response.end(userData)
    }
}


module.exports={
    requestHandler
}