const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

// Ensure that 'body-parser' middleware is used in your main application file

// Reorder the routes to follow a logical CRUD order
router.get('/', studentController.getStudents);
router.post('/', studentController.createStudent);
router.get('/search', studentController.filterStudentsByProgram);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudentById);
router.delete('/:id', studentController.deleteStudentById);


module.exports = router;
