const mongoose = require('mangoose')

const campaignSchema = new mongoose.Schema({
     shopId:{
          type: mongoose.Schema.types.objectId,
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
          enum:['active', 'paused', 'draft', 'completed'],
          default: 'draft'
     },
},{ timestamps: true})

module.exports = mongoose.model('Campaign', campaignSchema)