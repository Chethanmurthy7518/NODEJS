const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 2000;


//set up the template Engine (Handlebars)
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
    const person={
        name:"Chethan",
        role:"Developer"
    }
    res.render('./home.handlebars',{
        person
        
    })
})

app.get('/about',(req,res)=>{
    const persons =  [{
        name:"Chethan",
        role:"Developer"
    },
    {
        name:"Abid",
        role:"Developer"
    },
    {
        name:"Baila",
        role:"Developer"
    }]
    
    res.render('./about.handlebars',{
        persons
    });
})

app.get('/contact',(req,res)=>{

    res.render('./contact.handlebars',{
        users:["Chethan","Abid","Bailu"],
        isAdmin :false
    })
})







app.listen(port,()=>{
    console.log(`Server Listening on port ${port}`);
})