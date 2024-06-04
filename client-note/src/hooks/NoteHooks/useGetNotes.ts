import { useState, useEffect } from 'react';
import apiClient from '../../services/api-client';
import { CanceledError } from 'axios';

export interface Note {
  title: string;
  content: string;
  _id: string;
  noteBackground: string;
}

export interface FetchNotesRespone {
  results: number;
  notes: Note[];
}

const useGetNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchNotesRespone>(`/notes`, { signal: controller.signal })
      .then((response) => setNotes(response.data.notes))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
  }, []);

  return { notes, error };
};

export default useGetNotes;
