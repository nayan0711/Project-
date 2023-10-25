const express = require('express');
const app = express();
//const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.json("success");
  console.log("json connected");
})

app.route('/provide path').get(async(req,res)=>{
  const ide=req.params.id;
  const data=await settings.findById(ide);
  res.send(data);
}).patch(async(req,res)=>{
  const ide=req.params.id;
  const data=await settings.findByAndUpdate(ide,req.body);
  res.send(data);
})
