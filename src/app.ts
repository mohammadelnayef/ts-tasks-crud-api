import express from 'express';
import cors from 'cors';
import api from './routes/api';
import constants from './utils/constants';
import {connectDb} from "../database";

const app = express();

app.use(cors({
    origin: `http://localhost:${constants.PORT}`
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', api)

connectDb();

export default app
