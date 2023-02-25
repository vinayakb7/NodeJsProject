const db = require('../Models');
const dbConfig = require('../Config/dbConfig');
const Product = db.product;

const addProduct = async (req,res) => {
    if(!req.body.title){
        res.status(400).send({message : 'Please insert title',});
        return
    }

    const productInfo = {
        title : req.body.title,
        price : req.body.price,
        description : req.body.description,
    };

    try{
    const product = await Product.create(productInfo);
    res.status(200).send(product);
    console.log(product);
    } catch (err) {
        res.status(500).send({
            message : err.message || 'Error Occured'
        })
    }
}

const getAll = async (req,res) => {
    const product = await Product.findAll({});
    res.status(200).send(product);
}

const getSingleProduct = async (req,res) => {
    id = req.params.id;
    const product = await Product.findOne({where : {id : id}});
    res.status(200).send(product);
}

const updateProduct = async (req,res) => {
    id = req.params.id;
    const product = await Product.update(req.body, {where : { id : id}});
    res.status(200).send(product);
}

const deleteProduct = async (req,res) => {
    id = req.params.id;
    await Product.destroy({where : {id : id}});
    res.status(200).send(`Proudct ${id} is Deleted`);
}

const storedPrcedure = async (req,res) => {
    const product = await db.sequelize.query(`call ${dbConfig.DB}.procedure();`)
    res.status(200).send(product);
}

const updatePrcedure = async (req,res) => {
    const data = req.body;
    const product = await db.sequelize.query(`call ${dbConfig.DB}.updateProcedure('${data.title}',${data.id});`)
    res.status(200).send(product);
}

module.exports = {
    addProduct,
    getAll,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    storedPrcedure,
    updatePrcedure
}