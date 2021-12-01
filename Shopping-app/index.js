const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 2000;

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


app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
