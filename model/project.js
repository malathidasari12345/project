const mongoose = require('mongoose');
 const projectSchema = new mongoose.Schema({
    projectName :{
        type:String,
        required:true
    },
    projectManager :{
        type:String,
        required:true
    },
    timeDuration :{
        type:Number,
        required:true
    },
    startDate :{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    Budget :{
        type:Number,
        required:true
    },
     status: {  
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
 })
 const Project = mongoose.model('Project', projectSchema);
 module.exports = Project