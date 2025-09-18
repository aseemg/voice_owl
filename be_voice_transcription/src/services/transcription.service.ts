import { Transcription } from '../models/transcription.model';
import { downloadAudio } from '../utils/downloader';

export const processTranscription = async (audioUrl: string) => {
  await downloadAudio(audioUrl);
  const transcriptionText = 'transcribed text';

  const record = await Transcription.create({
    audioUrl,
    transcription: transcriptionText
  });

  return record._id;
};