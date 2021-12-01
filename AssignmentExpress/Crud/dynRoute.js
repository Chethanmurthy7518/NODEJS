var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello World!");
});
app.post('/hello', function(req, res){
   res.send("You just called the post method ");
});
/* To test this request, open up your terminal and use cURL to execute the following request −

curl -X POST "http://localhost:3000/hello"cls
 */

app.listen(3000,()=>{
    console.log('Server is started on port 3000');
});