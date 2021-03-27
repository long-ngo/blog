const Course = require('../models/Course');

class siteController {
    //[GET] /
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) res.json(courses);
            else res.status.json({ error: 'ERROR!!!' });
        });
        //res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
