const {Sequelize,DataTypes} = require('sequelize');
// const env = process.env();
// console.log("env loaded",env);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        port: 3306,
        host: 'localhost',
        dialect: "mysql",
        logging: false, //set it to true to log the queries
    }
);

try{
    sequelize.authenticate();
    console.log("Database Connection Success [✓]");
}catch(error){
    console.log("Error Connecting Database [X]", error);
}

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//datamodel files
db.blog = require('./blog/blog.model')(sequelize,DataTypes);
db.category = require('./category/category.model')(sequelize,DataTypes);
db.user = require('./user/user.model')(sequelize,DataTypes);
db.userProfile = require('./user/user_profile.model')(sequelize,DataTypes);


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
//create two tables one for keeping master values other for mapping it




db.sequelize.sync({ force: true}); //whenever you change in table make it to true 

module.exports = db;