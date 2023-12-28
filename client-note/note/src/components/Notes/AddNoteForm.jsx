import React, { useState } from 'react';
import { Box, Input, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';
import axios from 'axios';
import mainUrl from '../../../api.config';
import { useNavigate } from 'react-router-dom';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleAddNote = async () => {
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
        navigate(`/notes`);
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

  return (
    <Box>
      <Input placeholder="عنوان یادداشت" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea
        placeholder="متن یادداشت"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        mt="4"
      />
      <Button colorScheme="blue" mt="4" onClick={handleAddNote}>
        افزودن یادداشت
      </Button>
    </Box>
  );
};

export default AddNoteForm;
