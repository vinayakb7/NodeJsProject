const productController = require('../Controller/productController');
const router = require('express').Router();

router.post('/product/', productController.addProduct);
router.get('/product/', productController.getAll);
router.get('/procedure', productController.storedPrcedure);
router.put('/update', productController.updatePrcedure);
router.get('/product/:id', productController.getSingleProduct);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;