const reviewController = require('../Controller/reviewController');
const router = require('express').Router();

router.post('/review', reviewController.addReview);
router.get('/review', reviewController.getAllReview);
router.get('/review/:id', reviewController.getSingleReview);
router.put('/review/:id', reviewController.updateReview);
router.delete('/review/:id', reviewController.deleteReview);

module.exports = router;