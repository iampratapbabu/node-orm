const db = require('../model');
const { QueryTypes, Utils } = require("sequelize");
const Blog = db.blog;
const sequelize = db.sequelize;


exports.getRows = async (whereCondition) => {
    try {
        return await Blog.findAll({
            where: whereCondition,
            raw: true, //converts the data in plain object not in sequelize instance
            limit: 100,               // Limit the number of results
            order: [['createdAt', 'DESC']] // Sort by created date in descending order
        });
    } catch (error) {
        throw error;
    }
};

exports.createRow = async (payload) => {
    try {
        return await Blog.create(payload);
    } catch (error) {
        throw error;
    }
}

exports.getSingleRow = async (whereCondition) =>{
    try{
        return await Blog.findOne({
            where: whereCondition,
            raw: true,
            //include:db.category, //if relation is established
            include:db.user
            //attributes:['category.name'], //whichever main table column wants in output
            // include:[{
            //     model:db.category,
            //     attributes:['name']
            // }]
        })

    }catch(err){
        throw err;
    }
}

exports.updateRow = async (payload,whereCondition) =>{
    try{
        return await Blog.update(payload,{
            where: whereCondition,
        },);

        console.log("updated blog",blog);

    }catch(err){
        throw err;
    }
}

exports.deleteRow = async (whereCondition) =>{
    try{
        return await Blog.destroy({
            where: whereCondition,
            raw: true,
        })

    }catch(err){
        throw err;
    }
}

