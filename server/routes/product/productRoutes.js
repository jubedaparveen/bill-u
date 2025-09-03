const express = require('express');
const router = express.Router();
const {createProduct ,
     getProducts ,
      getProductById ,
       deleteProduct , 
       updateProduct,
       generateProductQr,
        updateProductStock,
        // updateBatchStock
} = require('../../controllers/product/productController');



router.post('/' , createProduct)
router.get('/',getProducts);
router.get('/:id',getProductById);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);
router.get('/:id/qrcode' , generateProductQr)
router.patch('/:id/stock' , updateProductStock)
// router.patch('/batch/stock' , updateBatchStock)

module.exports = router;






