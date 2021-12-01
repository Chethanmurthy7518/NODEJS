const axios = require('axios')

axios.get(
    ""
).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.message);
})