const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route for GET /
router.get('/', AppController.getHomepage);

// Route for GET /students
router.get('/students', StudentsController.getAllStudents);

// Route for GET /students/:major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
