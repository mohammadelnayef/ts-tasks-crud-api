import exampleRouter from './example.router';
import { Router } from 'express';

const api = Router();

// Root endpoint
api.get('/', (req, res) => {
    res.json({message:'This is the root.'})
});

// All endpoints
api.use('/example', exampleRouter);

export default api