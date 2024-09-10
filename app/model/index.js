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
db.blogs_master = require('./blog.model')(sequelize,DataTypes);
db.User = require('./user.model')(sequelize,DataTypes);


db.sequelize.sync({ force: false}); //whenever you change in table make it to true 

module.exports = db;