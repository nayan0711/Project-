const mongoose=require ("../database/dbConnect");

const SettingsSchema=new mongoose.Schema({
    setting_name:{
        type:String,
        required:true
    },
    settings_type:{
        type:String,
        enum:["toggle","slider"],
        required:true
    },
    value:{
        type:Boolean,
        required:true
    }
});

const setting=mongoose.model("setting",SettingsSchema);
module.exports=setting;