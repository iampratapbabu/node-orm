const db = require('../../model')
const sequelize = db.sequelize;


exports.getAll = async (whereCondition=null) => {
    try {
        return await db.client.findAll({
            where:whereCondition
        });
        
    } catch (error) {
        throw error;
    }
};

exports.getOne = async (whereCondition=null) => {
    try {
        return await db.client.findOne({
            where:whereCondition
        });
        
    } catch (error) {
        throw error;
    }
};
