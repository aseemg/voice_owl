import axios from 'axios';

export const downloadAudio = async (url: string, retries = 5): Promise<Buffer> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      return Buffer.from(response.data);
    } catch (error) {
      console.warn(`Download attempt ${attempt} failed`);
      if (attempt === retries) throw new Error('Failed to download audio');
    }
  }
  throw new Error('Unexpected error');
};