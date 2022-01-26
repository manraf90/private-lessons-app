import express from 'express';
import logger from '../lib/logger.js';
import { Students } from '../models/index.js';

const StudentsRoutes = express.Router();

StudentsRoutes.get('/', async (req, res) => {
    try {
        const students = await Students.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
});

StudentsRoutes.post('/add', async (req, res) => {
    const studentData = req.body;
    const newStudent = new Students(studentData);
    try {
        await newStudent.save();
        res.status(201).json({ message: 'New student was created', newStudent });
        logger.info('New student was created', newStudent);
    } catch (error) {
        res.status(400).json({ message: error});
        logger.error(error);
    }
});

StudentsRoutes.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
         await Students.findByIdAndDelete(id);
         res.status(200).json({ message: 'Student was removed from database' });
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

StudentsRoutes.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updateStudentData = req.body;
    try {
        await Students.findByIdAndUpdate(id, updateStudentData);
        res.status(200).json({ message: 'Student data was updated' });
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

export default StudentsRoutes;