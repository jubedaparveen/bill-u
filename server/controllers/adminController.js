const Campaign = require("../models/campaign");
const Category = require("../models/categorymodel");
const Customer = require("../models/customermodel");
const Order = require("../models/ordermodel");
const Product = require("../models/productmodel");
const Shop = require("../models/shopModel");

const createShop = async (req, res) => {
    const { name, owner, email } = req.body;
     if (!name || !owner || !email) {
            res.status(400);
            throw new Error("Please fill all the fields");
     }
     const newShop = await Shop.create({
          name,
          owner,
          email
     });
     if (!newShop) {
          res.status(400);
          throw new Error("Shop not created");
     }
     res.status(201).json(newShop);
}
const addProduct = async (req, res) => {
     const { name, price, quantity } = req.body;
     if (!name || !price || !quantity) {
          res.status(400);
          throw new Error("Please fill all the fields");
     }
     const newProduct = await Product.create({
          name,
          price,
          quantity
     });
     if (!newProduct) {
          res.status(400);
          throw new Error("Product not created");
     }
     res.status(201).json(newProduct);
}
const getProducts = async (req, res) => {
     const products = await Product.find();
     if (!products) {
          res.status(404);
          throw new Error('No Products Found!');
     }    
     res.status(200).json(products);
}
const getProductById = async (req, res) => {
     const product = await Product.findById(req.params.gid);
     if (!product) {
          res.status(404);
          throw new Error('Product Not Found!');
     }
     res.status(200).json(product);
}
const addCustomer = async (req, res) => {
    const { name, phone, email } = req.body;
     if (!name || !phone || !email) {
          res.status(400);
          throw new Error("Please fill all the fields");
     }
     const newCustomer = await Customer.create({
          name,
          phone,
          email
     });
     if (!newCustomer) {
          res.status(400);
          throw new Error("Customer not created");
     }
     res.status(201).json(newCustomer);

}


const addCategory = async (req, res) => {

     const { name, description, shopId } = req.body;
     
     if (!name || !description || !shopId) {
     res.status(400);
     throw new Error("Please fill all the fields");
     }
     
     const newCategory = await Category.create({
          name,
          description,
          shopId
     });
     if (!newCategory) {
          res.status(400);
          throw new Error("Category not created");
     }
     res.status(201).json(newCategory);    
}
const getCategories = async (req, res) => {
  const categories = await Category.find().populate('shopId');
  if (!categories) {
    res.status(404);
    throw new Error('No Categories Found!');
  }
     res.status(200).json(categories);
}
const getCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.gid).populate('shopId');
  if (!category) {
    res.status(404);
    throw new Error('Category Not Found!');
  }
     res.status(200).json(category);
}
const updateCategory = async (req, res) => {
  const updatedCategory = await Category.findByIdAndUpdate(req.params.uid, req.body, { new: true });

  if (!updatedCategory) {
    res.status(400);
    throw new Error('Category Not Updated');
  }
     res.status(200).json(updatedCategory);
}
const deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.did);
  if (!category) {
    res.status(404);
    throw new Error('Category Not Found!');
  }
     res.status(200).json(category);
}

const createOrder = async (req, res) => {

   const { shopId, categoryId,  products, discount } = req.body;

    if (!products || !products.length) {
      return res.status(400)
      throw new Error( "Products are required" );
    }

    let totalAmount = 0;

    // Validate products & calculate subtotal
    const orderProducts = [];
    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404)
        throw new Error( `Product not found: ${item.productId}` );
      }

      const subtotal = item.quantity * item.price;
      totalAmount += subtotal;

      orderProducts.push({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        subtotal,
      });
    }

    // Apply discount if available
    const finalAmount = totalAmount - (discount || 0);

    const newOrder = await Order.create({
      shopId,
      categoryId,
      products: orderProducts,
      totalAmount: finalAmount,
      discount: discount || 0,
    });

    res.status(201).json(newOrder);
    console.log("✅ Order created successfully:", newOrder);
}
const getOrders = async (req, res) => {
     const Orders = await Order.find().populate('shopId').populate('categoryId')
     if (!Orders) {
          res.status(404);
          throw new Error('No Orders Found!');
     }
     res.status(200).json(Orders)
}
const getOrderById = async (req, res) => {
     
     const order = await Order.findById(req.params.oid).populate('shopId').populate('categoryId')
     if (!order) {
          res.status(404)
          throw new Error('No Order Id Found')
     }
     res.status(200).json(order)
}
const updateOrder = async (req, res) => {
     const updateOrder = await Order.findByIdAndUpdate(req.params.uid, req.body, { new: true})
     if (!updateOrder) {
          res.status(500)
          throw new Error('No Order Found')
     }
     res.status(200).json(updateOrder)
}
const deleteOrder = async (req, res) => {
     const deleteOrder = await Order.findByIdAndDelete(req.params.did)
     if (!deleteOrder) {
          res.status(500)
          throw new Error('Oder no found for delete')
     }
     res.status(200).json(deleteOrder)
}
const createBulkOrders = async (req, res) => {

     const { shopId, categoryId, products, discount } = req.body;

    if (!products || !products.length) {
      return res.status(400)
      throw new Error( "Products are required" );
    }

    let totalAmount = 0;
    const orderProducts = [];

    // validate each product
    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(500)
        throw new Error('Product not found');
      }

      const subtotal = item.quantity * item.price;
      totalAmount += subtotal;

      orderProducts.push({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        subtotal,
      });
    }

    // apply discount
    const finalAmount = totalAmount - (discount || 0);

    const newOrder = await Order.create({
      shopId,
      categoryId,
      products: orderProducts,
      totalAmount: finalAmount,
      discount: discount || 0,
    });
}
const getOrderReceipt = async (req, res) => {
     const { orderId } = req.params;

    const order = await Order.findById(orderId)
      .populate("shopId", "name")
      .populate("categoryId", "name")
      .populate("products.productId", "name price");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
}
const processOrderReturn = async (req, res) => {
      const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Change order status to Cancelled/Returned
    order.status = "Cancelled";
    await order.save();

    res.status(200).json(order);
}


const addCampaign = async (req, res) =>{
     const { shopId, title, message, channels, target } = req.body;

    // ✅ Validate required fields
    if (!shopId || !title || !message || !channels || !target) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // ✅ Create new campaign
    const newCampaign = await Campaign.create({
      shopId,
      title,
      message,
      channels,
      target,
    });

    res.status(201).json(newCampaign);
}
const getCampaigns = async (req, res) =>{
     const campaign = await Campaign.find().populate('shopId')
     if (!campaign) {
          res.status(500)
          throw new Error('campaign not found')
     }
     res.status(200).json(campaign)
}
const getCampaignById = async (req, res) =>{
     const campaign = await Campaign.findById(req.params.cid)
     console.log('campaign....', campaign)
     if (!campaign) {
          res.status(500)
          throw new Error('campaign not found')
     }
     res.status(200).json(campaign)
}
const deleteCampaign = async (req, res) =>{
     const campaign = await Campaign.findByIdAndDelete(req.params.did)
     console.log('campaign....', campaign)
     if (!campaign) {
          res.status(500)
          throw new Error('campaign not found')
     }
     res.status(200).json(campaign)
}
const importCampaign = async (req, res) =>{
      const { campaigns } = req.body; // expecting an array of campaigns

    if (!campaigns ) {
      return res.status(400)
      throw new Error( "Please provide campaigns array" );
    }

    // Insert multiple campaigns at once
    const newCampaigns = await Campaign.insertMany(campaigns);

    res.status(201).json( newCampaigns.length, newCampaigns,
    );
}
const campaignUpdateStatus = async (req, res) =>{
     res.send(' Campaigens update Status')
}
const campaignReciplents = async (req, res) =>{
     res.send('Campaigens Reciplents')
}
const campaignAnalytics = async (req, res) =>{
     res.send('Campaigens Analytics')
}






 module.exports = {
     createShop,
     addProduct,
     getProducts,
     getProductById,
     addCustomer,

  addCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,

  // Order related functions
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  createBulkOrders,
  getOrderReceipt,
  processOrderReturn,

  //Campaign 
  addCampaign,
  getCampaigns,
  getCampaignById,
  importCampaign,
  deleteCampaign,
  campaignUpdateStatus,
  campaignReciplents,
  campaignAnalytics,
};
