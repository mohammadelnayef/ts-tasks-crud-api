import exampleController from '../controllers/example.controller';
import { Router } from 'express';

const exampleRouter = Router()

// This gets called on /example.
exampleRouter.get('/', (req, res) => {
    res.json({message:"Root of example endpoint."});
});

// This gets called on /example/show.
exampleRouter.get('/show', exampleController.getProcessedData);

export default exampleRouter

