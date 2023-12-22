import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';
import { GridItem, Grid, Box, Button } from '@chakra-ui/react';
import mainUrl from '../../../api.config';
import { Link } from 'react-router-dom';

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<
    { title: string; content: string; _id: string; noteBackground: string }[]
  >([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${mainUrl}/notes`);
        setNotes(response.data.notes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
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

export default NoteList;
