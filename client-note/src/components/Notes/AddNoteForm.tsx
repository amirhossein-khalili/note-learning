import React, { useState } from 'react';
import { Box, Input, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';
import useAddNote from '../../hooks/NoteHooks/useAddNote';

const AddNoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { alert, addNote } = useAddNote();

  const handleAddNote = () => {
    addNote(title, content);
  };

  return (
    <Box>
      {alert && (
        <Alert status={alert.status === 'success' ? 'success' : 'error'}>
          <AlertIcon />
          {alert.message}
        </Alert>
      )}
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
