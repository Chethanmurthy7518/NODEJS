const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

const port = 2000

//cookie parser middleWare

app.use(cookieParser())

//read Cookies
app.get('/read-cookie',(req,res)=>{
    //req.cookies
    console.log(req.cookies);
    if(req.cookies){
        res.send("Cookie Exist - " +JSON.stringify (req.cookies))
    }else{
        res.send("Cookie doesnt exists")
    }

})


//Creating Non Persistent cookie
app.get('/create-cookie',(req,res)=>{
    res.cookie('myName','Chethan')
    res.send('Cookie Created')
})

//Creating the Persistent Cokkie
app.get('/create-pcookie',(req,res)=>{
    res.cookie('email','chethan@testyantra.com',{
        maxAge:86400000
    })
    res.send('Persistent Cookiee Created')
})

//Clearing the Cookie
app.get('/clear-cookie',(req,res)=>{
    res.clearCookie('myName')
    res.send('myName Cookie Cleared')
})

//Creating the persistent object cookie
app.get('/create-objcookie',(req,res)=>{
    res.cookie('data',{
        userName:'Chethan',
        email:'chethan@123.com'
    },
    {
        maxAge:86400000
    })
    res.send('Object Cookie Created')
})


//Claer all cookies
app.get('/clear-allcookies',(req,res)=>{
    for(cookie in req.cookies){
        res.clearCookie(cookie)
    }
    res.send('All Cookies Cleared')
})


app.listen(port,()=>{
    console.log(`Server Listening at ${port}`);
})