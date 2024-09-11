const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement:true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        userid:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    });

    return User;
}

