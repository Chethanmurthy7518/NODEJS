const express = require('express')

const app = express();

const port =2000;

//MiddleWare Function
const getDate=(req,res,next)=>{
    console.log('Middle Ware Function');

    //To access the below date in every method

    const date = Date.now();
       req.requestDate = date;
    


    //next() should be called if the request need to be passed to next routes */
    next()
}

app.use(getDate)

//For Printing Static File
//Built in MiddleWare
app.use(express.static('./public'))
// app.use(express.static('./files'))

//To hide the file from fronytEnd
app.use("/static", express.static('./files'))


app.get('/',(req,res)=>{
    res.send('Hello world'+ new Date(req.requestDate))
})

app.get('/getDate',(req,res)=>{
    res.end(`
    <p>Current DATE : </p>
    <h1>${new Date(req.requestDate)}</h1>
    <button onclick="alert('Hello')">Click</button>
    `)
})

//Error Handlng middleWare
app.all('*',(req,res)=>{
    throw new Error("The Path Doesnt Exist")
})
app.use((err,req,res,next)=>{
    res.status(500)
    res.send(err.message)
})

app.listen(port,()=>{ 
    console.log(`Server Listening on ${port}`);
})
