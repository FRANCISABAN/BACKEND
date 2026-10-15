import express from "express";
import * as studentController from '../controllers/studentController.js';

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.fetchAllStudents);
studentRoutes.post('/', studentController.createStudent);
studentRoutes.put('/:id', studentController.editStudent);

export default studentRoutes;
