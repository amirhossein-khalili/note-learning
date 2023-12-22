import React, { useState } from 'react';
import { Box, Input, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';
import mainUrl from '../../../api.config';
import { InfoAlert, ErrorAlert } from '../Alerts';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = async () => {
    try {
      const response = await axios.post(`${mainUrl}/notes`, { title, content });
      console.log(response.data);
      if (response.data.status === 201) {
        <InfoAlert />;
        
      } else {
        <ErrorAlert />;
      }
    } catch (error) {
      <ErrorAlert />;
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
