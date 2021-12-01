const express = require("express");
const exphbs = require("express-handlebars");

const cookieParser = require("cookie-parser");

const app = express();
const port = 4000;



const oneDay = 24 * 60 * 60 * 1000;

//cookie parser middleware
app.use(cookieParser());

//handlebars setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//body parser
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./login.handlebars");
});

app.post('/login', (req,res)=>{
  console.log(req.body);
  let { username,password,checked}=req.body
  if(checked){
    res.cookie('details',{
      username,
      password
    },{
      maxAge:oneDay
    })
  } 
  res.send('Home')
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
