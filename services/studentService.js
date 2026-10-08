import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async () => {
  return await studentModel.fetchAllStudents();
};

export const createStudent = async (student) => {
  const result = await studentModel.insertStudent(student);
  return result.insertId;
};