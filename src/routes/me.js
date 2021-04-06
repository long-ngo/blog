const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/stored/trash', meController.trash);
router.get('/animation', meController.animation);


module.exports = router;
