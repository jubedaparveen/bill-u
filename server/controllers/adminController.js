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
     res.status(200).json({
     _id: req.params.did,
     message: "Category Removed Successfully!"
     });
}

const createOrder = async (req, res) => {

     const { shopId, customerId, totalAmount, discount } = req.body;
     // console.log('first', req.body);

      const product = await Product.findById(req.params.gid);

          if (!product) {
               res.status(404);
               throw new Error('Product Not Found!');
          }
      
    const newOrder = await Order.create({
      shopId,
      customerId,
      products: product._id, // Assuming products is an array of product IDs
      totalAmount,
      discount, 
    });

    res.status(200).json(newOrder);
    console.log(`Order created successfully for shop  `, newOrder);
}
const getOrders = async (req, res) => {
     res.send("get all Order");
}
const getOrderById = async (req, res) => {
     res.send("get Order by Id");
}
const updateOrder = async (req, res) => {
     res.send("Update Order");
}
const deleteOrder = async (req, res) => {
     res.send("Delete Order");
}
const createBulkOrders = async (req, res) => {
     res.send("Create Bulk Orders");
}
const getOrderReceipt = async (req, res) => {
     res.send("Get Order Receipt");
}
const processOrderReturn = async (req, res) => {
     res.send("Process Order Return");
}



 module.exports = {
     createShop,
     addProduct,
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
  processOrderReturn

};
