module.exports = (sequelize,DataTypes) => {
    const Review = sequelize.define('review',{
        rating :{
            type : DataTypes.STRING,
        },
        ratedby :{
            type : DataTypes.STRING,
        },
    })
    return Review;
}