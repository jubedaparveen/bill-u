const { mongoose } = require("mongoose");

const shopSchema = new mongoose.Schema({
    shopId:{
    type:String,
    unique:true
    },
    shopName :{
    type :String,
    required:true
    },
    owner : {
        type:String,
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
    }

},{
    timestamps:true
})

shopSchema.pre('save', async function(next) {
    if (!this.shopId) {
        const count = await mongoose.model('Shop').countDocuments() + 1;
        this.shopId = `shop-${count.toString().padStart(3, '0')}`;
    }
    next();
});


module.exports = mongoose.model("Shop" , shopSchema)