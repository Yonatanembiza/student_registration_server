let Student = require("../model/student.js")

let controller = {
    getStudents: function (req, res, next) {
        let allStudents = Student.getStudents();
        res.status(200).json(allStudents);
    },
    getStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.getStudentById(id);
        if (student)
            res.status(200).json(student);
        else
            res.status(404).json({ message: "student not found" });
    },
    deleteStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.deleteStudentById(id);
        if (student) res.status(200).json(student)
        else
            res.status(404).json({ message: "not found" })
    },
    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        // let id = req.body.id;
        // let name = req.body.name;
        // let program = req.body.program;
        let student = new Student(id, name, program);
        let newCreatedStudent = student.addStudent();
        if (newCreatedStudent) res.status(200).json(newCreatedStudent);
        else res.status(404).json({ message: "already registered.." })
    },
    updateStudentById: function (req, res, next) {
        let id = req.params.id;
        let updates = req.body;
        console.log('updates', updates)
        let updatedStudent = Student.updateStudentById(id, updates)
        if (updatedStudent) {
            res.status(200).json(updatedStudent)
        } else {
            res.status(404).json({ message: "Student Not Found!" })
        }
    },
    filterStudentsByProgram: function(req, res, next){
        let programName=req.query.program;
        let students=Student.filterStudentsByProgram(programName);
        if(students.length > 0){
            console.log("Students found");
            res.status(200).json(students);
        } else {
            console.log("Students not found");
            res.status(404).send(`No Students in ${programName} Program`);
        }
    }

}
module.exports = controller;