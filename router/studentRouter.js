let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");

router.get('/:id', studentController.getStudentById)
router.post('/', studentController.createStudent)
router.delete('/:id', studentController.deleteStudentById)
router.get('/', studentController.getStudents)
router.put('/:id',)
router.get('/search',) //filtering by program use queryString
router.put('/:id', studentController.updateStudentById);
router.get('/search', studentController.filterStudentsByProgram);


module.exports = router;