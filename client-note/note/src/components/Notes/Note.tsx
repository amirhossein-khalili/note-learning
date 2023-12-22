import {
  Divider,
  Heading,
  Text,
  Button,
  Card,
  Stack,
  CardBody,
  CardFooter,
  ButtonGroup,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import axios from 'axios';
interface NoteProps {
  title: string;
  content: string;
  noteBackground?: string;
  noteId: string;
}

const Note: React.FC<NoteProps> = ({ title, content, noteBackground = 'white', noteId }) => {
  const handleDeleteClick = async (noteId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/notes/${noteId}`);
      console.log(`Note with ID ${noteId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting note with ID ${noteId}:`, error);
    }
  };

  return (
    <Card maxW="sm" bg={noteBackground}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{content.slice(0, 150)}....</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button color="blue.600">
            <EditIcon />
          </Button>
          <Button color="red.600" onClick={() => handleDeleteClick(noteId)}>
            <DeleteIcon />
          </Button>
          <Button color="gray.500">
            <ViewIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Note;
