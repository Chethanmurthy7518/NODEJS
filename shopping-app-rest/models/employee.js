const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    ename:String,
    salary:Number,
    gender:String
})

module.exports = mongoose.model('employee',employeeSchema)