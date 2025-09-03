const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        unique:true
    },
    barcode: {
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    shopId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Shop',
    },

}, { timestamps: true });


 // Generate SKU from product name
    productSchema.pre('save', async function(next) {
    if (!this.sku) {
        // Clean name (remove spaces, uppercase)
        const cleanName = this.name.toUpperCase().replace(/\s+/g, '');

        // Count products with same name to make SKU unique
        const count = await mongoose.model('Product').countDocuments({ name: this.name }) + 1;

        this.sku = `${cleanName}-${count.toString().padStart(4, '0')}`;
    }

    next();
});


module.exports = mongoose.model('Product', productSchema);
