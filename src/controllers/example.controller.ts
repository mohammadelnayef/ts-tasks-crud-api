import { Request, Response } from 'express';
import fetchData from '../models/example.model';
import processData from '../services/process-data.service';
const path = 'https://jsonplaceholder.typicode.com/users';
const getProcessedData = async (req: Request, res: Response) => {
    const apiData = await fetchData(path);
    const result = processData(apiData);
    res.json(result);
}

export default {getProcessedData}
