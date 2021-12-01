const express = require('express')
const exphbs = require('express-handlebars')
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const app = express()
const port = 2000

const uname = "chethan"
const pwd = "chethan"

const oneDay=24*60*60*1000

//session middleware
app.use(sessions({
    secret:'thisisascretkey',
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge:oneDay
    }
}))

//cookie parser middleware
app.use(cookieParser())

//handlebars setup
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

//body parser
app.use(express.urlencoded({extended:true}))

//Session Validation
app.get('/user',(req,res)=>{
    console.log(req.session);
    if(req.session.userid ){
        res.send('Session Validated <a href="/logout">Logout</a>')
    }else{
        res.redirect('/')
    }
});


//Session Creation
app.post("/login",(req,res)=>{
    console.log(req.body);
    const {username,password}=req.body
    if(uname===username && pwd === password){
        console.log(req.session);
        req.session.userid = username
        res.send('Welcome User <a href="/logout">Logout</a>')
    }else{
        res.redirect('/')
    }
});


//Session Desstroy
app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect('/')
});

app.get("/",(req,res)=>{
    if(req.session.userid){
        res.redirect('/user');
    }else{
        res.render('./login.handlebars')
    }
})






app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
