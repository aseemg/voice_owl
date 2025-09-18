import express from 'express';
import transcriptionRoutes from './routes/transcription.routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', transcriptionRoutes);

export default app;
