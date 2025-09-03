const Product = require('../../model/prodcut/productModel');
const Shop = require('../../model/shop/shopModel')
const Category = require("../../model/category/categoryModel")




// Get All Product
const getProducts = async (req,res) => {
    const products = await Product.find().populate("shopId" , "name").populate('categoryId')

    if(!products){
        res.status(404)
        throw new Error("Products Not Found")
    }
    res.status(200).json(products)
}

// Get Single Product
const getProductById = async (req,res)=>{
    const product = await Product.findById(req.params.id).populate("shopId" ,"shopName").populate("categoryId" , "name")
    if(!product){
        res.status(404)
        throw new Error("Product Not Found")
    }
    res.status(200).json(product)
}

// Create Product
const createProduct = async(req,res)=>{

const {name , price , quantity , categoryId , shopId} = req.body
    // check all fileds are comming
    if(!name || !price || !quantity || !categoryId|| !shopId ){
        res.status(400)
        throw new Error("Please Fill All Details") 
    }
//    price must more then 0 
    if(price <= 0){
     res.status(400)
    throw new Error("Price must be greater then 0")
  }
// quantity can not be negative 
    if(quantity < 0){
    res.status(400)
    throw new Error("Quantity can not be negative")
  }
// check if shop exist 
    const shopExist = await Shop.findById(shopId)
     if(!shopExist){
    res.status(404)
    throw new Error("Shop not found")
    }
    const categoryExist = await Category.findById(categoryId);
  if (!categoryExist) {
    res.status(404);
    throw new Error("Category not found");
  }
// check duplicate product name in shop 
   const duplicateProduct = await Product.findOne({name , shopId}) 
   if(duplicateProduct){
    res.status(409)
    throw new Error("Product with same name already exist")
}

// create product 
const newProduct = await Product.create({
    name , 
    price , 
    quantity,
    categoryId,
    shopId
})

res.status(201).json(newProduct)


}

// delete product 
const deleteProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.status(200).json({ message: "Product deleted successfully" });
}



// Update Product
const updateProduct = async (req, res, next) => {
  const { name, price, quantity, categoryId } = req.body;

  // validations
  if (price !== undefined && price <= 0) {
    throw new Error("Price must be greater than 0");
  }

  if (quantity !== undefined && quantity < 0) {
    throw new Error("Quantity cannot be negative");
  }

  // build update object dynamically
  const updateData = {};
  if (name) updateData.name = name;
  if (price !== undefined) updateData.price = price;
  if (quantity !== undefined) updateData.quantity = quantity;
  if (categoryId) updateData.categoryId = categoryId;

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: updateData },
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  res.status(200).json(updatedProduct);
};

// generate Qr code 
const generateProductQr = async (req , res) => {
  const product = await Product.findById(req.params.id).select('-categoryName').populate("shopId" , "shopName").populate("categoryId" , "name")
 
  if(!product){
      res.status(404)
  throw new Error("QR Not Found")
  }
  
 res.status(200).json(product)
}

// PATCH Stock 
const updateProductStock = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  // Validation
  if (quantity === undefined) {
    throw new Error("Quantity is required to update stock");
  }
  if (quantity < 0) {
    throw new Error("Quantity cannot be negative");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { quantity },
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  res.status(200).json({
    success: true,
    message: "Product stock updated successfully",
    data: updatedProduct,
  });
};


// Batch update product stock
// const updateBatchStock = async (req, res) => {
//   const updates = req.body; // expecting array of {id, name, quantity}

//   if (!Array.isArray(updates) || updates.length === 0) {
//     res.status(400);
//     throw new Error("Invalid input, must be a non-empty array");
//   }

//   const results = await Promise.all(
//     updates.map(async (item) => {
//       const product = await Product.findById(item._id);

//       if (!product) {
//         return { id: item._id, name: item.name, status: "Product not found" };
//       }

//       // check name match
//       if (item.name && product.name !== item.name) {
//         return { id: item._id, name: item.name, status: "Name does not match DB" };
//       }

//       // update stock
//       product.quantity = item.quantity;
//       await product.save();

//       return {
//         id: item._id,
//         name: product.name,
//         status: "Updated",
//         quantity: product.quantity,
//       };
    
      
//     })
   
//   )
//  res.status(200).json(results);
// };
    
  
module.exports = {createProduct ,
   getProducts , 
   getProductById , 
   deleteProduct , 
   updateProduct , 
   generateProductQr ,
   updateProductStock ,
    // updateBatchStock
  } 