const {Sequelize,DataTypes} = require('sequelize');
// const env = process.env();
// console.log("env loaded",env);

const sequelize = new Sequelize(
    'dmb_db',
    'root',
    'password',
    {
        port: 3306,
        host: 'localhost',
        dialect: "mysql",
        logging: false, //set it to true to log the queries
      }
);

try{
    sequelize.authenticate();
    console.log("Database Connection Success");
}catch(error){
    console.log("Error Connecting Database: ",error);
}

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//datamodel files
db.blog = require('./blog.model')(sequelize,DataTypes);
db.category = require('./category.model')(sequelize,DataTypes);
db.user = require('./user.model')(sequelize,DataTypes);
db.userProfile = require('./userprofile.model')(sequelize,DataTypes);



//Establish relationships
db.category.hasMany(db.blog, { foreignKey: 'category_id'});  // A category can have many posts
db.blog.belongsTo(db.category, { foreignKey: 'id' }); // A post belongs to a category

db.user.hasOne(db.userProfile, { foreignKey: 'category_id'});  // A category can have many posts
db.userProfile.belongsTo(db.user, { foreignKey: 'id' }); // A post belongs to a category



db.sequelize.sync({ force: false}); //whenever you change in table make it to true 

module.exports = db;