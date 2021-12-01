const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const app = express();
const port = 2000;

//DataBase URL Connect to mongoose database

try {
    mongoose.connect('mongodb://localhost:27017/shopping')
    console.log("db connected");
} catch (error) {
    console.log("db not connected");
}

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
    res.status(500).send('somthing went wrong bhai')
})


app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
