import { Request, Response } from 'express';
import { processTranscription } from '../services/transcription.service';
import { TranscriptionRequest } from '../types/transcription.types';

export const handleTranscription = async (req: Request, res: Response) => {
  try {
    const { audioUrl }: TranscriptionRequest = req.body;
    if (!audioUrl) return res.status(400).json({ error: 'audioUrl is required' });

    const id = await processTranscription(audioUrl);
    res.status(201).json({ _id: id });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
