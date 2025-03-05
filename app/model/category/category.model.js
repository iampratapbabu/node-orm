
module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('category', {
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
        }
    }, { 
        freezeTableName: true,
        timestamps: true,
    });


    return Category;
}

