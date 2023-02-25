const dbConfig = require('../Config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorAlises : false,
    pool : {
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle : dbConfig.pool.idle,
    }
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.product = require('./productModel')(sequelize,DataTypes);
db.review = require('./reviewModel')(sequelize,DataTypes);

db.sequelize.sync({force : false}).then(()=>{
})

module.exports = db;