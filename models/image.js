const mongoose=require('mongoose');
const GlearySchema=new mongoose.Schema({
    title:String,
    image:String,
    des:String,
    Date:Date,
});

const Gleary=mongoose.model("Gleary",GlearySchema);
module.exports=Gleary;
