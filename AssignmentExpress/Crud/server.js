const express = require('express')
const app = express()
app.get('/', (req, res) => {
    const output = { value:  'hello world!' }
    res.send(output)
})
//configure the server port
app.listen(2000, () => {
    console.log('Server runs on port 2000')
})