const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
     shopId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Shop',
          required: true,
     },
     customerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Customer',
          required: true,
     },
     products: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
     },
     totalAmount: {
          type: Number,
          required: true,
     },
     discount: {
          type: Number,
          default: 0,
          min: 0, 
     },
     orderDate: {
          type: Date,
          default: Date.now,
     },
     status: {
          type: String,
          enum: ['Pending', 'Processing', 'Completed', 'Cancelled'],
          default: 'Pending',
     },
     
}, {timestamps: true});
module.exports = mongoose.model('Order', orderSchema);