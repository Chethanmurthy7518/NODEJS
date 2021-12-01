const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const app = express();
const port = 2000;

//DataBase URL
const dbUrl = 'mongodb://localhost:27017/shopping'

//Connect to mongoose database
mongoose.connect(dbUrl,(err)=>{
    if(!err){
        console.log("DB Connection Successfull");
    }else{
        console.log("DB Connection Failed");
    }
});

//importing the product routes
const productsRoutes = require('./routes/products')

//set template engine
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')


//body parser middleWare
app.use(express.urlencoded({extended:true}))

//router level middleWare
app.use('/products',productsRoutes)

app.get('/',(req,res)=>{
    res.render('./landingpage.handlebars')
})

app.get('/error',(req,res)=>{
    res.status(500).send('Something went wrong')
})


app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
