const siteRoute = require('./siteRoute');
const newsRoute = require('./newsRoute');


function route(app) {
    app.use('/news', newsRoute);
    app.use('/', siteRoute);
}


module.exports = route;
