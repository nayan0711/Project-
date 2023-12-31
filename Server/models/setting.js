const mongoose=require ("../database/dbConnect");

const SettingsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    value:{
        type:Boolean,
        required:true
    }
});

const Setting=mongoose.model("Setting",SettingsSchema);
module.exports=Setting;