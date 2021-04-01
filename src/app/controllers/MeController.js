const Course = require('../models/Course');
const { multileMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(course => {
                res.render('me/stored-courses', {
                    course: multileMongooseToObject(course)
                });
            })
            .catch(next);
    }

    //[PUT] /courses/:id
    edit(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(_=> res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
