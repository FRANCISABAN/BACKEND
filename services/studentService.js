
import * as studentModel from '../models/studentModel.js';
import ValidationError from '../utils/ValidationError.js';

export const fetchAllStudents = async () => {
  return await studentModel.fetchAllStudents();
};

const srCodePattern = /^\d{2}-\d{5}$/;

const doesStudentExist = async (student) => {
  let existing;
  if (Object.hasOwn(student, 'id')) {
    existing = await studentModel.findStudentById(student.id);
  } else {
    existing = await studentModel.findStudentByNameAndSrcode(student);
  }

  if (existing.length > 0) {
    return true;
  }
  return false;
};

export const createStudent = async (student) => {
  if (!student.name || !student.srcode || !student.program) {
    throw new ValidationError(400, 'Name, SR code, and program are required');
  }

  if (!srCodePattern.test(student.srcode)) {
    throw new ValidationError(
      400,
      'Invalid SR Code format! Use YY-XXXXX (e.g., 24-18769)'
    );
  }

  const existing = await doesStudentExist(student);

  if (existing) {
    throw new ValidationError(409, 'Student already exists!');
  }

  const result = await studentModel.insert(student);
  return result.insertId;
};

export const updateStudent = async (student) => {
  if (!student.name || !student.srcode || !student.program) {
    throw new ValidationError(400, 'Name, SR code, and program are required');
  }

  if (!srCodePattern.test(student.srcode)) {
    throw new ValidationError(
      400,
      'Invalid SR Code format! Use YY-XXXXX (e.g., 24-18769)'
    );
  }

  const existing = await doesStudentExist(student);

  if (!existing) {
    throw new ValidationError(404, 'Student does not exist!');
  }

  const updatedStudent = await studentModel.update(student);
  return updatedStudent;
};

export const deleteStudent = async (id) => {
  const existing = await doesStudentExist({ id });

  if (!existing) {
    throw new ValidationError(404, 'Student does not exist!');
  }

  const deletedStudent = await studentModel.remove(id);
  return deletedStudent;
};
