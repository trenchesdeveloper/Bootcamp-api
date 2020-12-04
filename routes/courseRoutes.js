const express = require('express');
const { protect, authorize } = require('../controllers/authController');
const {
  getCourses,
  getACourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getCourses)
  .post(protect, authorize('publisher', 'admin'), createCourse);

router
  .route('/:id')
  .get(getACourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);

module.exports = router;

