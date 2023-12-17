let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");

router.get('/:id', studentController.getStudentById)
router.post('/', studentController.createStudent)
router.delete('/:id', studentController.deleteStudentById)
router.get('/', studentController.getStudents)
router.put('/:id',)
router.get('/search',) //filtering by proram use queryString


module.exports = router;