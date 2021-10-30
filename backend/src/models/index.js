import mongoose from 'mongoose';
import StudentSchema from '../schemas/StudentSchema.js';

/* eslint-disable import/prefer-default-export */
export const Students = mongoose.model('Student', StudentSchema);
