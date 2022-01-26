import mongoose from 'mongoose';

const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    data: { type: Object, required: true }
}, {
    timestamps: true,
    collection: 'students'
});

export default StudentSchema;
