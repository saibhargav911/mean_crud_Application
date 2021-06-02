const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project',{ useNewUrlParser: true , useUnifiedTopology: true },(err)=>{
    if(!err)
    console.log("Connected to Database");
    else
    console.log('Error in DB connection:' +JSON.stringify(err,undefined,2));
});

module.exports=mongoose;