import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/task_app';

export const connectDb = async (): Promise<void> => {

    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/task_app', {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};