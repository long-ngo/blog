const Course = require('../models/Course');
const { multileMongooseToObject } = require('../../util/mongoose');

class siteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = multileMongooseToObject(courses);
                res.render('home', {
                    courses,
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
