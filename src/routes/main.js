const siteRoute = require('./site');
const newsRoute = require('./news');
const courseRoute = require('./course');

function route(app) {
    app.use('/courses', courseRoute);
    app.use('/news', newsRoute);
    app.use('/', siteRoute);
}

module.exports = route;
