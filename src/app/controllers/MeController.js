const Course = require('../models/Course');
const { multileMongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) { 
        Promise.all([
            Course.find({}).sortTable(req),
            Course.countDeleted({})
        ])
            .then(([course, count]) => {
                res.render('me/stored-courses', {
                    course: multileMongooseToObject(course),
                    count
                });
            })
            .catch(next);
    }

    //[GET] /me/stored/trash
    trash(req, res, next) {
        Promise.all([Course.findDeleted({}), Course.count({})])
            .then(([course, count]) => res.render('me/trash', {
                course: multileMongooseToObject(course),
                count
            }))
            .catch(next);
    }

    //[GET] /me/animation
    animation(req, res, next) {
        res.render('me/animation');
    }
}

module.exports = new CourseController();
