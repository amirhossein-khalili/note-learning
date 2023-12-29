import React from 'react';
import { useState } from 'react';
// import navigate from 'react-router-dom'
import axios from 'axios';
import { Alert, AlertIcon } from '@chakra-ui/react';
import mainUrl from '../../../api.config';

const useAddNote = () => {
  const [alert, setAlert] = useState<React.ReactNode | null>(null);

  const addNote = async (title: string, content: string) => {
    try {
      const response = await axios.post(`${mainUrl}/notes`, { title, content });
      if (response.data.status === 'success') {
        setAlert(
          <Alert status="success">
            <AlertIcon />
            note added successfully
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else {
        setAlert(
          <Alert status="error">
            <AlertIcon />
            note adding failed please try again later
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      }
    } catch (error) {
      setAlert(
        <Alert status="error">
          <AlertIcon />
          note adding failed please try again later
        </Alert>
      );
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return { alert, addNote };
};

export default useAddNote;
