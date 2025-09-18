import { Router } from 'express';
import { handleTranscription } from '../controllers/transcription.controller';

const router = Router();
router.post('/transcription', handleTranscription);

export default router;
