const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name : {
        type :String,
        required:true
    },
    owner : {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:Boolean,
        default:false
    }},{timeStamps:true})
 
module.exports = mongoose.model("Shop" , shopSchema)
 


// name: {   
//           type: String,
//           required: true,
//      },
//      email: {
//           type: String,
//           required: true,
//           unique: true,
//      },
//      phone: {
//           type: String,
//           required: true,
//           unique: true,
//      },
//      address: {
//           type: String,
//           required: true,
//      },
//      owner: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: 'User',
//           required: true,
//      },
//      isActive: {
//           type: Boolean,
//           default: false,
//      },