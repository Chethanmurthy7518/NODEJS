const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    pName:{
        required:true,
        type:String,
        minlength:3,
        maxlength:100
    },
    pDesc:{
        required:true,
        type:String,
        minlength:3,
        maxlength:100
    },
    pPrice:{
        required:true,
        type:Number,
        min:0,
        max:10000
        
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('products',productSchema)