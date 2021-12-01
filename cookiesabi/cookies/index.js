const express=require('express')
const app=express()
const cookieParser=require('cookie-parser');
const { appendFile } = require('fs');
const port =2000;

app.use(cookieParser())
//read cookie
app.get('/read-cookie',(req,res)=>{
    //req.cookies
    console.log(req.cookies);
    if(req.cookies){
        res.send('cookie exists-'+JSON.stringify(req.cookies))
    }else{
        res.send("coockie does not exist")
    }
    res.send('Read Cookie route')
})

//creating persistent cookie
app.get('/create-pcookie',(req,res)=>{
    res.cookie('email','ab@gmail.com',
    {
        maxAge:86400000
    })
    res.send('persistent cookie is created')
})

//creating persistent object cookie
app.get('/create-objcookie',(req,res)=>{
    res.cookie('data',{
        userName:'abhishek',
        email:"cd@gmail.com"

    },
    {
        maxAge:86400000
    })
    res.send('persistent object cookie is created')
})

//clearing cookie
app.get('/clear-cookie',(req,res)=>{
    res.clearCookie('myName');
    res.send('myName cookie is cleared')
})

//clearing all cookie
app.get('/clear-allcookie',(req,res)=>{
    for(let cookie in req.cookies){
        res.clearCookie(cookie)
    }
    res.send('all cookies are cleared')
    })


//creating non persistent cookie
app.get('/create-cookie',(req,res)=>{
    res.cookie('myName','abhishek')
    res.send('cookie is created')
})
app.get('cr')

 app.listen(port,()=>{
     console.log(`server is listening on port ${port}`);
 })