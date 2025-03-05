
const blogRoute = require('./blog.router');
const userRoute = require('./user.router');
const categoryRoute = require('./category.router');
const { errorResponse } = require('../lib/response.handler');

exports.setup = (app) => {
    try {
        app.use('/api/v1/blogs', blogRoute);
        app.use('/api/v1/users', userRoute);
        app.use('/api/v1/apicategories', categoryRoute);

        app.use('*', (req, res) => errorResponse(res,"No Route Defined At This Path","route_error"));

        console.log("Routing Setup Completed [✓]");

    } catch (err) {
        console.log("Routing Setup Failed [X]", err);

    }


}
