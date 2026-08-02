const students = require("../data/students");

// GET All Students
const getStudents = (req, res) => {
    res.status(200).json(students);
};

// GET Student by ID
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json(student);
};

// POST Add Student
const addStudent = (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).json({
            success: false,
            message: "Name, Age and Course are required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student Added Successfully",
        student: newStudent
    });
};

// PUT Update Student
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const { name, age, course } = req.body;

    if (name) student.name = name;
    if (age) student.age = age;
    if (course) student.course = course;

    res.json({
        success: true,
        message: "Student Updated",
        student
    });
};

// DELETE Student
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        success: true,
        message: "Student Deleted Successfully"
    });
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};
