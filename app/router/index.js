
const blogRoute = require('./blog.router');
const userRoute = require('./user.router');
const categoryRoute = require('./category.router');

exports.setup = (app) => {
    try {
        app.use('/api/v1/blogs', blogRoute);
        app.use('/api/v1/users', userRoute);
        app.use('/api/v1/apicategories', categoryRoute);

        console.log("Routing Setup Completed [✓]");

    } catch (err) {
        console.log("Routing Setup Failed [X]",err);

    }


}
