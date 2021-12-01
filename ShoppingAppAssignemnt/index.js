const {products}= require('./product')

const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs')
const app = express();
const port = 4000;

//set template engine

app.engine('handlebars',exphbs())
app.set('view engine','handlebars')



//body parser middleWare
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('./landingpage.handlebars')
})

app.get('/products/products',(req,res)=>{
    const readData = fs.readFileSync("./product.js")
    console.log("Reading the Data From file",readData.toString());
    res.render('./products.handlebars',{
        products
    })
})

app.get('/products/add-product',(req,res)=>{
    const readData = fs.readFileSync("./product.js")
    console.log("Reading the Data From file",readData.toString());
    res.render('./add-product.handlebars',{products})
})

app.post('/products/add-product',(req,res)=>{
    const readData = fs.readFileSync("./product.js")
    console.log("Reading the Data From file",readData.toString());
    console.log(req.body);
    let{_id,pName,pDesc,pPrice}=req.body
    _id = parseInt(_id)
    pPrice = parseInt(pPrice)

    products.push({
        _id,
        pName,
        pDesc,
        pPrice
    })
    // res.end('Product Added Succefully')
    fs.writeFileSync(
        "./product.js",
        `const products = ${JSON.stringify(
          products
        )}; module.exports={products}`
      );
    res.redirect('/products/products')
})

app.get('/products/edit-product/:_id',(req,res)=>{
    const readData = fs.readFileSync("./product.js")
    console.log("Reading the Data From file",readData.toString());
    // console.log(req.query._id);
    console.log(req.params._id);
    const index= products.findIndex((product)=>{
        return parseInt(product._id) === parseInt(req.params._id)
    })
    const selectedProduct = products[index]
    res.render('./edit-product.handlebars',{
        selectedProduct
    })
    // res.send("Product Edit Success")
})

app.post('/products/edit-product',(req,res)=>{
    const readData = fs.readFileSync("./product.js")
    console.log("Reading the Data From file",readData.toString());
    console.log(req.body);
    let {_id,pName,pDesc,pPrice} = req.body
    _id = parseInt(_id)
    pPrice = parseInt(pPrice)

    const index = products.findIndex((product)=>{
        return parseInt(product._id) === parseInt(_id)
    })
    products.splice(index,1,{
        _id,pName,pDesc,pPrice
    })
    fs.writeFileSync(
        "./product.js",
        `const products = ${JSON.stringify(
          products
        )}; module.exports={products}`
      );
    res.redirect('/products/products')

    
})

app.get('/products/delete-product/:_id',(req,res)=>{
    const readData = fs.readFileSync("./product.js")
    console.log("Reading the Data From file",readData.toString());
    const _id = req.params._id
    const index = products.findIndex((product)=>{
        return parseInt(product._id) === parseInt(_id)
    })

    products.splice(index,1)
    fs.writeFileSync(
        "./product.js",
        `const products = ${JSON.stringify(
          products
        )}; module.exports={products}`
      );
    res.redirect('/products/products')
})


app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
