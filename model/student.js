let db = [
    { id: 116857, name: "Anna Johns", program: "Compro" },
    { id: 615757, name: "Smith Dove", program: "Compro" },
    { id: 618975, name: "Jom Jerry", program: "MBA" }
];

class Student {
    constructor(id, name, program) {
        this.id = id
        this.name = name
        this.program = program
    }
    addStudent() {
        if (!db.find(s => s.id == this.id)) {
            db.push(this)
            return this;
        }
    }
    static getStudents() {
        return db;
    }
    static getStudentById(id) {
        return db.find(s => s.id == id);
    }
    static deleteStudentById(id) {
        let index = db.findIndex(s => s.id == id)
        if (index !== -1) return db.splice(index, 1);
    }
    static updateStudentById(id, updates){
        let student=Student.getStudentById(id);
        console.log("Before Update : ", student);
        let index = db.findIndex(s => s.id == id)
        if(index !==-1){
            Object.assign(db[index],updates);
            console.log("After Update : ", db[index]);
        }
    }
    static filterStudentsByProgram(program){
        return db.filter(s=>s.program===program)
    }

}

module.exports = Student;