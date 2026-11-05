
import pool from '../config/db.js';

//read
export const fetchAllStudents = async () => {
  const [rows] = await pool.query('SELECT * FROM student');
  return rows;
};

export const findStudentByNameAndSrcode = async(student) => {
  const [rows] = await pool.query(
    "SELECT * FROM student WHERE name=? AND srcode=?",
    [student.name, student.srcode]
  );
  return rows;
};

export const findStudentById = async(id) => {
  const [rows] = await pool.query(
    "SELECT * FROM student WHERE id=?",
    [id]
  );
  return rows;
};

//insert
export const insert = async (student) => {
  const [result] = await pool.query(
    'INSERT INTO student (name, srcode, program) VALUES (?, ?, ?)',
    [student.name, student.srcode, student.program]
  );

  return result;
};

//update
export const update = async (student) => {
  const [result] = await pool.query(
    "UPDATE student SET name= ?, srcode= ?, program= ? WHERE id= ?",
    [student.name, student.srcode, student.program, student.id]
  );
  return result.affectedRows;
};

//Delete
export const remove = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM student WHERE id = ?',
    [id]
  );
  return result.affectedRows;
};
