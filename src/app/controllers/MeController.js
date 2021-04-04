const Course = require('../models/Course');
const { multileMongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDeleted({})])
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
        Course.findDeleted({})
            .then(course => res.render('me/trash', {
                course: multileMongooseToObject(course)
            }))
            .catch(next);
    }
}

module.exports = new CourseController();
