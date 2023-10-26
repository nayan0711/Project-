const mongoose=require ("../database/dbConnect");

const SliderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    value:{
        type:Number,
        required:true
    }
});

const Slider=mongoose.model("Slider",SliderSchema);
module.exports=Slider;