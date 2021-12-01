const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 2000;



const oneDay = 24*60*60*1000

//DataBase URL
const dbUrl = 'mongodb+srv://chethan:chethan@chethanmuddu.22mbz.mongodb.net/shoppingapp?retryWrites=true&w=majority'

//Connect to mongoose database
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(!err){
        console.log("DB Connection Successfull");
    }else{
        console.log(err);
        console.log("DB Connection Failed");
    }
});

//session middleware
app.use(sessions({
    secret:'thisisascretkey',
    saveUninitialized:true,
    resave:false.valueOf,
    cookie:{
        maxAge:oneDay
    }
}))

//cookie parser middlware
app.use(cookieParser())

//importing the product routes
const productsRoutes = require('./routes/products')
// const orderRoutes = require('./routes/orders')

//set template engine
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')


//body parser middleWare
app.use(express.urlencoded({extended:true}))

//router level middleWare
app.use('/products',productsRoutes)
// app.use('/orders',orderRoutes)

app.get('/',(req,res)=>{
    console.log(req.body);
    res.render('./landingpage.handlebars')
})

app.get('/error',(req,res)=>{
    res.status(500).send('Something went wrong')
})


app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
