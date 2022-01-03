import mongoose from 'mongoose';

const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    deadline: { type: String, required: true },
    class: { type: String, required: true },
    amountLessonsPerWeek: { type: Number, required: true },
    rate: { type: Number, required: true },
    phoneNumber: {
        parent: { type: Number },
        student: { type: Number }
    }
}, {
    timestamps: true,
    collection: 'students'
});

export default StudentSchema;
