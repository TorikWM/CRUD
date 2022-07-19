const mongoose=require('mongoose')
const Schema=mongoose.Schema

const contactSchema=new Schema({
    name: {
        type: String, required:true
    },
    email : {
        type:String,required:true,unique:true
    },
    age:Number,
    address:{
        city:{type:String},
        cod:[Number]
    }
})
module.exports=mongoose.model("Contact", contactSchema);