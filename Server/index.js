const express = require('express');
const Setting=require('./models/setting');
const Slider=require('./models/slider')
const app = express();
const cors = require('cors');
const debug = require('debug');

const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.json("success");
  console.log("json connected");
})

app.route('/:id').get(async(req,res)=>{
  const _id=req.params.id;
  console.log(_id);
  const data=await Setting.findById(_id);
  console.log(data);
  res.send(data);
  
}).patch(async(req,res)=>{
  const _id=req.params.id;
  const data=await Setting.findByIdAndUpdate(_id,req.body);
  res.send(data);
})

app.route('/slider/:id').get(async(req,res)=>{
  const _id=req.params.id;
  console.log(_id);
  const data=await Slider.findById(_id);
  console.log(data);
  res.send(data);
  
}).patch(async(req,res)=>{
  const _id=req.params.id;
  const data=await Slider.findByIdAndUpdate(_id,req.body);
  res.send(data);
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});