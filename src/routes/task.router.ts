import { Router } from 'express';
import taskController from "../controllers/task.controller";

const taskRouter = Router()

// This gets called on /task.
taskRouter.get('/', (req, res) => {
    res.json({message:"Root of example endpoint."});
});

// This gets called on /task/list.
taskRouter.get('/list', taskController.listAllTasks);

export default taskRouter