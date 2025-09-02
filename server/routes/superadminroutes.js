const express = require('express');
const superadminRouter = express.Router();
const superAdminProtect = require('../middlewares/superadmin')
const { 
     shopProfiles, 
     shopbyId, 
     changeUserStatus, 
     changeUserRole, 
     
     createShop, 
     Shops,
     ShopById,
     updateShops,
     deleteShops,
     analyticsShops,
     shopsUsers
} = require('../controllers/superadmincontroller');


superadminRouter.get('/users/me', shopProfiles)
superadminRouter.get('/users/:id', shopbyId);
superadminRouter.put('/users/:id/role', changeUserRole);
superadminRouter.put('/users/:id/status', changeUserStatus);

superadminRouter.post('create-shop', superAdminProtect, createShop)
superadminRouter.get('shops', superAdminProtect, Shops)
superadminRouter.get('shop/:sid',superAdminProtect, ShopById)
superadminRouter.put('shop/:uid', superAdminProtect, updateShops)
superadminRouter.delete('shop/:did', superAdminProtect, deleteShops)
superadminRouter.get('shops/:aid/analytics', superAdminProtect, analyticsShops)
superadminRouter.get('shops/:id/users', superAdminProtect, shopsUsers)





module.exports = superadminRouter;