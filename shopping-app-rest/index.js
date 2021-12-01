const express = require('express')
require('dotenv').config()
//db connection
require('./config/db.js')
// product routes
const productsRoutes = require('./routes/products')

//user routes
const userroutes = require('./routes/users')

const app = express()
const port = process.env.PORT || 8000
//if will take the port in the port or else take it as 8000 using || (||)
//bodyparser middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//router middleware
app.use('/products', productsRoutes)
app.use('/users', userroutes)
app.use('/employee',require('./routes/employee'))

app.get('/test',(req,res)=>{
     res.json({'test':'test the rest service'})
 })

 //error handling middleware
 app.use((err,req,res,next)=>{
     res.status(500).json({
         error:true,
         message:err.message,
         data:null
     })
 })

 app.listen(port,()=>{
     console.log(`server listining on port ${port}`);
 })