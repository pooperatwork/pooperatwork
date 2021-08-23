const mongoose= require("mongoose");
const newschema=new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "phone":{
        type:Number,
        required:true
    }
});
const contact=mongoose.model("newentry",newschema);
module.exports=contact;