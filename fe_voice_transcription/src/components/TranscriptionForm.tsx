import { useState } from 'react';
import { postTranscription } from '../services/api';

const TranscriptionForm = () => {
  const [audioUrl, setAudioUrl] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { _id } = await postTranscription(audioUrl);
      setResult(_id);
    } catch (err) {
      setError('Failed to transcribe audio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Transcribe Audio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={audioUrl}
          onChange={(e) => setAudioUrl(e.target.value)}
          placeholder="Enter audio URL"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Transcribing...' : 'Submit'}
        </button>
      </form>
      {result && (
        <div className="mt-4 text-green-600">
          ✅ Transcription successful! ID: <strong>{result}</strong>
        </div>
      )}
      {error && <div className="mt-4 text-red-600">❌ {error}</div>}
    </div>
  );
};

export default TranscriptionForm;
