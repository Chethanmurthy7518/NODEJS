const mongoose = require('mongoose')
const deparmentSchema = new mongoose.Schema({
    dname:String,
    dlacation:String,
    empid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee'
    }
})

module.exports = mongoose.model('department',deparmentSchema)