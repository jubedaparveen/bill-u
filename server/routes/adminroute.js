const express = require('express');
const adminRouter = express.Router();
const {
     createShop, 
     addCustomer, 
     addProduct,

     addCategory, 
     getCategories, 
     getCategoryById, 
     updateCategory, 
     deleteCategory,

     createOrder,
     getOrders,
     getOrderById,
     updateOrder,
     deleteOrder,
     createBulkOrders,
     getOrderReceipt,
     processOrderReturn,
     getProductById,
     getProducts, 
} = require('../controllers/adminController');

const adminProtect = require('../middlewares/adminmiddleware');
const { create } = require('../models/categorymodel');

adminRouter.post('/create-shop', adminProtect, createShop); // Shop
adminRouter.post('/customer', adminProtect, addCustomer);
adminRouter.post('/product', adminProtect, addProduct);
adminRouter.get('/products', adminProtect, getProducts)
adminRouter.get('/product/:gid', adminProtect, getProductById);

adminRouter.post('/category', adminProtect, addCategory );
adminRouter.get('/categories', adminProtect, getCategories ) 
adminRouter.get('/category/:gid', adminProtect, getCategoryById);
adminRouter.put('/category/:uid', adminProtect, updateCategory);
adminRouter.delete('/category/:did', adminProtect, deleteCategory);

adminRouter.post('/create-order', adminProtect, createOrder);
adminRouter.get('/orders', adminProtect, getOrders) 
adminRouter.get('/order/:oid', adminProtect, getOrderById);
adminRouter.put('/order/:uid', adminProtect, updateOrder);
adminRouter.delete('/order/:did', adminProtect, deleteOrder);
adminRouter.post('/bulk-orders', adminProtect, createBulkOrders);
adminRouter.get('/orders/:oid/receipt', adminProtect, getOrderReceipt);
adminRouter.post('/orders/:oid/return', adminProtect, processOrderReturn);


module.exports = adminRouter;