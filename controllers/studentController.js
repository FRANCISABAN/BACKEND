import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) => {
  try {
    const students = await studentService.fetchAllStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, srcode, program } = req.body;
    const student = { name, srcode, program };

    const studentId = await studentService.createStudent(student);

    res.status(201).json({
      success: true,
      message: studentId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const editStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const { id } = req.params;
    const student = { id, name, srcode, program };

    try {
        const updatedStudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};