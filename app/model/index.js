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

//ONE TO ONE
//here we can maintain relationship using only one statement also but to make other way around 
//means ek statement se user ke through profile ka data aa jata but profile ke sath user ka data nhi aata so 
//profile ka bhi relation lga diye so profile ke through user ka data bhi chahe to aa jaye
db.user.hasOne(db.userProfile,{ foreignKey: 'user_id' });  
db.userProfile.belongsTo(db.user,{ foreignKey: 'id' }); 


//ONE TO MANY
db.user.hasMany(db.blog, { foreignKey: 'user_id'});
db.blog.belongsTo(db.user,{foreignKey:'id'});

//MANY TO MANY




db.sequelize.sync({ force: true}); //whenever you change in table make it to true 

module.exports = db;