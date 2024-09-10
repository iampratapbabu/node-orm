
const blogRoute = require('./blog.router');
const userRoute = require('./user.router');
const categoryRoute = require('./category.router');

exports.setup = function(app){
    app.use('/api/v1/blogs',blogRoute);
    app.use('/api/v1/users',userRoute);
    app.use('/api/v1/apicategories',categoryRoute);

    console.log("Routes Setting Success");

}
