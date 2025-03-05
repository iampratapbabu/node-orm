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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull:true //it is true by default
        },
        email:{
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

    User.associate = (models) =>{
        //here also associations can be defined
    }

    return User;
}

