import { useState } from 'react';
import axios from 'axios';
import mainUrl from '../../../api.config';

const useAddNote = () => {
  const [alert, setAlert] = useState<{ status: string; message: string } | null>(null);

  const addNote = async (title: string, content: string) => {
    try {
      const response = await axios.post(`${mainUrl}/notes`, { title, content });
      if (response.data.status === 'success') {
        setAlert({
          status: 'success',
          message: 'note added successfully',
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else {
        setAlert({
          status: 'error',
          message: 'note adding failed please try again later',
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      }
    } catch (error) {
      setAlert({
        status: 'error',
        message: 'note adding failed please try again later',
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return { alert, addNote };
};

export default useAddNote;
