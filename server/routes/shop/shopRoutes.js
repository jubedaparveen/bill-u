const express = require('express');
const router = express.Router();
const { getAllShops, createShop, getShopById, updateShop, deleteShop, getShopAnalytics } = require('../../controllers/shop/shopController');

router.get('/', getAllShops);
router.post('/', createShop);
router.get('/:id', getShopById);
router.put('/:id', updateShop);
router.delete('/:id', deleteShop);
// router.get('/:id/users', getShopUsers);
router.get('/:shopId/analytics', getShopAnalytics);

module.exports = router;
