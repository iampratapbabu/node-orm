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
        address: {
            type: DataTypes.STRING,
            allowNull: false
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

