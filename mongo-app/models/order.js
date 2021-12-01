const mongoose = require('mongoose')
const idFromDab = require('./product')
const Scheme = mongoose.Schema


const orderProductScheme = new Scheme({
    _id:{
        // validate:{
        //     validator:(val)=>{
        //         if()
        //     }
        // }
        type:String,
        required:true



    },
    pName:{
        type:String
    },
    pDesc:{
        type:String
    },
    pQuan:{
        type:Number,
        required:true

    },
    tPrice:{
        type:Number,
        required:true
        
    },

})

module.exports = mongoose.model('orders',orderProductScheme)