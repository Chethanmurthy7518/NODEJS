const express = require("express");
const order = require("../models/order");
const router = express.Router();

const product = require("../models/product");

const user = "chethan";
const pwd = "chethan";

router.get("/error", (req, res) => {
  res.status(500).send("something wrong while passing data  to DB ");
});

router.get("/products", async (req, res) => {
  //products is table so we have to send data as object in second param
  if (req.session.userpwd) {
    try {
      const products = await product.find().lean();
      res.render("./products.handlebars", { products });
    } catch (err) {
      console.log("err", err);
      res.redirect("/products/error");
    }
  }else{
    res.redirect('/products/login')
  }
});

//To update the product
router.get("/add-product", (req, res) => {
  if(req.session.userpwd){
  res.render("./add-product.handlebars");
  }else{
    res.redirect('/products/login')
  }
});

// POST METHOD
router.post("/add-product", async (req, res) => {
  console.log("request body", req.body); // to display the input values from form

  let { pName, pDesc, pPrice } = req.body; // here we are destructing the values from req.body

  pPrice = parseInt(pPrice); // since in JSON numbs are in strings we convert back to numbers using parseInt()

  try {
    await product.insertMany([
      // if we dont use async await we can use then and catch
      // insertMany is a promise happining in dbserver  so it is ASYNCHRONOUS
      {
        pName,
        pDesc,
        pPrice,
      },
    ]);
    res.redirect("/products/products");
  } catch (err) {
    console.log(err);
    // if there is error go to error route
    res.redirect("/products/error");
  }
});

// TO UPDATE WE USE PUT METHOD
router.get("/edit-product/:_id", async (req, res) => {
  console.log(req.params._id);
  if(req.session.userpwd){
  try {
    const productToEdit = await product
      .findOne({
        _id: req.params._id,
      })
      .lean();
    res.render("./edit-product.handlebars", { selectedProduct: productToEdit });
  } catch (err) {
    res.redirect("/error");
  }
}else{
  res.redirect('/products/login')
}

  // res.send("product edited successfully")
});

router.post("/edit-products", async (req, res) => {
  console.log(req.body);

  let { _id, pName, pDesc, pPrice } = req.body;

  try {
    await product.updateOne(
      {
        _id,
      },
      {
        $set: {
          pName,
          pDesc,
          pPrice,
        },
      },
      { runValidators: true }
    ); // if we dont pass the third validator then it wont vaidate the  field data
    // remember we have set pName to of atleast 3 char  so always add runValidators

    res.redirect("/products/products");
  } catch (err) {
    res.redirect("/products/error");
  }
});

// to delete
router.get("/delete-product/:_id", async (req, res) => {
  if(req.session.userpwd){
  const _id = req.params._id;

  try {
    await product.deleteOne({
      _id: _id,
    });
    /* 

delete many to delete multiple documents
await product.deleteMany({
  _id:["18ce8c55c014d1b3ed199c2","18ce8c55c014d1b3ed199c2"]
})

*/

    res.redirect("/products/products");
  } catch (err) {
    res.redirect("/error");
  }
}else{
  res.redirect('/products/login')
}
});

// SEARCHING  DATA
router.get("/search", (req, res) => {
  if(req.session.userpwd){
  res.render("./search.handlebars");
  }else{
    res.redirect('/products/login')
  }
});

router.post("/search", async (req, res) => {
  const searchData = req.body.searchData;
  console.log(searchData);

  try {
    const products = await product.find().lean();

    const matchingObj = products.filter((val, index) => {
      const len = searchData.split("").length;

      const newVal = val.pName.toLowerCase().split("").slice(0, len).join("");
      console.log(newVal);
      return val.pName === searchData || newVal === searchData;
    });

    console.log("matching Data", matchingObj);

    matchingObj.length === 0
      ? res.send("No matching Data")
      : res.render("./matchingProductsList.handlebars", { matchingObj });
  } catch (err) {
    console.log(err);
  }
});

//Create Order
router.get("/create-order", (req, res) => {
  if(req.session.userpwd){
  res.render("./create-order.handlebars");
  }else{
    res.redirect('/products/login')
  }
});

router.post("/create-order", async (req, res) => {
  console.log(req.body);
  let { _id, pQuan } = req.body;
  // console.log(product.params._id);
  console.log(_id);
  // pQuan = req.body.pquan
  try {
    const productToOrder = await product
      .findOne({
        _id: _id,
      })
      .lean();
    if (productToOrder) {
      tPrice = productToOrder.pPrice * pQuan;
      let { _id, pName, pDesc } = productToOrder;
      console.log(_id, pName, pDesc, tPrice, pQuan);
      tPrice = parseInt(tPrice);
      await order.insertMany([
        {
          _id,
          pName,
          pDesc,
          tPrice,
          pQuan

        },
      ]);
      productToOrder.pQuan=pQuan

      

      res.redirect("/products/ordered-products");
      // console.log(productToOrder.pName);
      // console.log(pQuan);
    } else {
      res.send("ID didnt matched");
    }
  } catch (err) {
    // res.send('ID didnt matched')
    res.redirect("/error");
  }
});

//order get
router.get("/ordered-products", async (req, res) => {
  if(req.session.userpwd){
    try{
      const orders = await order.find().lean()
      res.render("./ordered-products.handlebars",{orders});
    }catch(err){
      res.redirect('/error')
    }
  
  }else{
    res.redirect('/products/login')
  }
});

//order Delete

router.get('/delete-order/:_id', async (req,res)=>{
  if(req.session.userpwd){
    // console.log(req.params._id);
    const _id = req.params._id
    try{
      await order.deleteOne({
        _id: _id

      })
      res.redirect('/products/ordered-products')
    }catch(err){
      res.redirect('/error')
    }
    

  }else{
    res.redirect('/products/login')
  }
})

//Edit Order
router.get('/edit-order/:_id', async (req,res)=>{
  if(req.session.userpwd){
    // console.log(req.params._id);
    try{
      const orderToEdit = await order.findOne({
        _id: req.params._id
      }).lean()
      res.render('./edit-order.handlebars',{selectedOrder: orderToEdit})
    }catch(err){
      res.redirect('/error')
    }

  }else{
    res.redirect('products/login')
  }
})

router.post('/edit-order', async (req,res)=>{
  // console.log(req.body);
  let {_id,pQuan}=req.body
  try{
    await order.updateOne({
      _id
    },{
      $set:{
        pQuan
      }
    })
    res.redirect('/products/ordered-products')

  }catch(err){
    res.redirect('/error')
  }
  
})

router.get("/login", (req, res) => {
  res.render("./login.handlebars");
});

//session Creation
router.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === user && password === pwd) {
    console.log(req.session);
    req.session.userpwd = password;
    res.redirect("/products/products");
  } else {
    res.redirect("/products/login");
  }
});

//session destroy
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/products/login");
});
module.exports = router;
