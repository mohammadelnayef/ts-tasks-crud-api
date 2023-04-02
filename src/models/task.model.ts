import mongoose, { Schema } from 'mongoose';
import {Task} from "../../ts/interfaces/task.interface";

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

export async function createTask(title: string, description: string): Promise<Task> {
    const task = new TaskModel({ title, description });
    return task.save();
}

export const TaskModel = mongoose.model<Task>('Task', taskSchema);