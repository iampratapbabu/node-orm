const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, DataTypes) => {

    const category = sequelize.define('users', {
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
        // createdAt: {
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW,
        // },
    }, {
        timestamps: true,
    });

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true
    return User;
}

