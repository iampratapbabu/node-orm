const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const UserProfile = sequelize.define('user_profile', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement:true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull:true //it is true by default
        },
        country:{
            type:DataTypes.STRING,
            default:"India"
        }
    }, {
        freezeTableName: true,
        timestamps: true,
    });

    return UserProfile;
}

