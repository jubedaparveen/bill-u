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

     addCampaign,
     getCampaigns,
     getCampaignById,
     campaignUpdateStatus,
     deleteCampaign,
     campaignReciplents,
     campaignAnalytics,
     importCampaign,
     
} = require('../controllers/adminController');

const adminProtect = require('../middlewares/adminmiddleware');
const { create } = require('../models/categorymodel');

adminRouter.post('/create-shop', adminProtect, createShop); 
adminRouter.post('/customer', adminProtect, addCustomer);
adminRouter.post('/product', adminProtect, addProduct);
adminRouter.get('/products', adminProtect, getProducts)
adminRouter.get('/product/:gid', adminProtect, getProductById);

//Category
adminRouter.post('/category', adminProtect, addCategory );
adminRouter.get('/categories', adminProtect, getCategories ) 
adminRouter.get('/category/:gid', adminProtect, getCategoryById);
adminRouter.put('/category/:uid', adminProtect, updateCategory);
adminRouter.delete('/category/:did', adminProtect, deleteCategory);

//Order
adminRouter.post('/create-order', adminProtect, createOrder);
adminRouter.get('/orders', adminProtect, getOrders) 
adminRouter.get('/order/:oid', adminProtect, getOrderById);
adminRouter.put('/order/:uid', adminProtect, updateOrder);
adminRouter.delete('/order/:did', adminProtect, deleteOrder);
adminRouter.post('/bulk-orders', adminProtect, createBulkOrders);
adminRouter.get('/orders/:oid/receipt', adminProtect, getOrderReceipt);
adminRouter.post('/orders/:oid/return', adminProtect, processOrderReturn);

//QR Code

//Campaigns
adminRouter.post('/campaigns', adminProtect, addCampaign)
adminRouter.get('/campaigns', adminProtect, getCampaigns)
adminRouter.get('/campaigns/:cid', adminProtect, getCampaignById)
adminRouter.delete('/campaigns/:did', adminProtect, deleteCampaign)
adminRouter.get('/campaign/import', adminProtect, importCampaign)
adminRouter.patch('/campaigns/:sid/status', adminProtect, campaignUpdateStatus)
adminRouter.get('/campaigns/:rid/reciplents', adminProtect, campaignReciplents)
adminRouter.get('/campaigns/:aid/analytics', adminProtect, campaignAnalytics)

module.exports = adminRouter;