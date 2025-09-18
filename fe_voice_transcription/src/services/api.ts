import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

export const postTranscription = async (audioUrl: string): Promise<{ _id: string }> => {
  const response = await axios.post(`${API_BASE}/transcription`, { audioUrl });
  return response.data;
};
