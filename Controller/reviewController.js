const db = require('../Models');
const dbConfig = require('../Config/dbConfig');
const Review = db.review;


const addReview = async (req,res) => {
    const reviewInfo = {
        rating : req.body.rating,
        ratedby : req.body.ratedby,
    };
    try{
    const review = await Review.create(reviewInfo);
    res.status(200).send(review);
    } catch (err) {
        res.status(500).send({
            message : err.message || 'Error Occured'
        })
    }
}

const getAllReview = async (req,res) => {
    const review = await Review.findAll({});
    res.status(200).send(review);
}

const getSingleReview = async (req,res) => {
    id = req.params.id;
    const review = await Review.findOne({where : {id : id}});
    res.status(200).send(review);
}

const updateReview = async (req,res) => {
    id = req.params.id;
    const review = await Review.update(req.body, {where : { id : id}});
    res.status(200).send(review);
}

const deleteReview = async (req,res) => {
    id = req.params.id;
    await Review.destroy({where : {id : id}});
    res.status(200).send(`Review ${id} is Deleted`);
}

module.exports = {
    addReview,
    getAllReview,
    getSingleReview,
    updateReview,
    deleteReview,
}