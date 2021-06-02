const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary:{
        type:String,
        required:true,
    },
    emailId: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    dateOfJoining:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }

});
const Employee=mongoose.model('Employee',employeeSchema);
module.exports =Employee;