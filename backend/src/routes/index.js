import express from 'express';
import StudentsRoutes from '../routes/StudentsRoutes.js';

const Router = express.Router();

Router.use('/students', StudentsRoutes);

export default Router;
