const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://nayanverma0711:admin@cluster0.yt701on.mongodb.net/Phone_setting?retryWrites=true&w=majority").then(() => {
    console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports=mongoose;
