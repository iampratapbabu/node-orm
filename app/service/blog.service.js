const db = require('../model');
const { QueryTypes, Utils } = require("sequelize");
const blogs_master = db.blogs_master;
const sequelize = db.sequelize;


exports.getRows = async (whereCondition) => {
    try {
        return await blogs_master.findAll({
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
        return await blogs_master.create(payload);
    } catch (error) {
        throw error;
    }
}

exports.getSingleRow = async (whereCondition) =>{
    try{
        return await blogs_master.findOne({
            where: whereCondition,
            raw: true,
        })

    }catch(err){
        throw err;
    }
}

exports.updateRow = async (payload,whereCondition) =>{
    try{
        return await blogs_master.update(payload,{
            where: whereCondition,
        },);

        console.log("updated blog",blog);

    }catch(err){
        throw err;
    }
}

exports.deleteRow = async (whereCondition) =>{
    try{
        return await blogs_master.destroy({
            where: whereCondition,
            raw: true,
        })

    }catch(err){
        throw err;
    }
}

