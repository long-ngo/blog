const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
router.post('/store', courseController.store);
router.patch('/:id', courseController.restore);
router.put('/:id', courseController.update);
router.delete('/delete-multiple', courseController.deleteMultiple);
router.delete('/:id/permanently-delete', courseController.permanentlyDelete);
router.delete('/:id', courseController.delete);

module.exports = router;
