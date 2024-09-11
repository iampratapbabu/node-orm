
module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define(
    "blog",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      idStr: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.STRING,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'category', // Name of the target table (the table being referenced)
          key: 'id'       // Key in the target table that is being referenced
        }
      },
      deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
      },

    },
    {
      freezeTableName: true, //so that blog table autorename hoke blogs na ho jaye
      timestamps: true,
    }
  );


  return Blogs;
};
