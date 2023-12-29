import React from 'react';
import Note from './Note';
import { GridItem, Grid, Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useGetNotes from '../../hooks/NoteHooks/useGetNotes';

const NoteGrid: React.FC = () => {
  const { notes, error } = useGetNotes();
  return (
    <>
      {error && <Text>{error}</Text>}
      <Link to="/notes/newNote">
        <Button colorScheme="green">ایجاد یادداشت جدید</Button>
      </Link>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {notes.map((note) => (
          <GridItem key={note._id}>
            <Box m="auto" p="10">
              <Note
                noteId={note._id}
                title={note.title}
                content={note.content}
                noteBackground={note.noteBackground}
              />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default NoteGrid;
