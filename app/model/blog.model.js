module.exports = (sequelize, DataTypes) => {
    const blogs_master = sequelize.define(
      "blogs",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          unique:true
        },
        id_str:{
          type:DataTypes.UUID,
          defaultValue:DataTypes.UUIDV4
        },
        title: {
          type: DataTypes.STRING,
          allowNull:false
        },
        body: {
          type: DataTypes.STRING,
        },
        // createdBy:{
        // },
        deletedAt: {
          type: DataTypes.DATE,
          defaultValue: null,
        },

      },
      {
        freezeTableName: true,
        timestamps: true,
      }
    );
    return blogs_master;
  };
  