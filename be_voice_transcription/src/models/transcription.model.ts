import mongoose from 'mongoose';

const transcriptionSchema = new mongoose.Schema({
  audioUrl: { type: String, required: true },
  transcription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Transcription = mongoose.model('Transcription', transcriptionSchema);