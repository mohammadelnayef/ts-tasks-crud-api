import { Request, Response } from 'express';
import fetchData from '../models/example.model';
import processData from '../services/process-data.service';
const path = 'https://jsonplaceholder.typicode.com/users';


const listAllTasks = async (req: Request, res: Response) => {
    res.json('All tasks here');
}

export default { listAllTasks }