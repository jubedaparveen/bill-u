const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
     shopId:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'Shop',
          reqired: true
     },
     title:{
          type: String,
          required: true
     },
     message:{
          type:String,
          reqired: true
     },
     channels:{
          type:[String],
          enum: ['sms','email','push'],
          reqired: true
     },
     target:{
          type:[String],
          enum: ['all','customers','subscribers'],
          default: ['all']
     },
     status:{
          type:String,
          enum:['active', 'paused',  'completed'],
          default: 'active'
     },
},{ timestamps: true})

module.exports = mongoose.model('Campaign', campaignSchema)