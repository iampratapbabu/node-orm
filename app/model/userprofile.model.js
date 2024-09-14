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
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user', // Name of the target table (the table being referenced)
              key: 'id'       // Key in the target table that is being referenced
            }
          },
    }, {
        freezeTableName: true,
        timestamps: true,
    });

    return UserProfile;
}

