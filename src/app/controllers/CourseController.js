const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                course = mongooseToObject(course);
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    //[POST] /courses/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(data => res.redirect('/'))
            .catch(err => res.render('courses/create', { err }));

    }
}

module.exports = new CourseController();
