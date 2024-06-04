import React from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import axios from 'axios';
interface NoteProps {
  title: string;
  content: string;
  noteBackground?: string;
  noteId: string;
}

const NoteCard: React.FC<NoteProps> = ({ title, content, noteBackground = 'white', noteId }) => {
  const toast = useToast();
  const handleDeleteClick = async (noteId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/notes/${noteId}`);
      console.log(`Note with ID ${noteId} deleted successfully.`);
      toast({
        title: 'یادداشت حذف شد!',
        status: 'success',
        duration: 300,
        isClosable: true,
      });
      window.location.reload();
    } catch (error) {
      console.error(`Error deleting note with ID ${noteId}:`, error);
      toast({
        title: 'خطا در حذف یادداشت!',
        status: 'error',
        duration: 300,
        isClosable: true,
      });
    }
  };

  return (
    <Card maxW="sm" bg={noteBackground}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{content.slice(0, 30)}....</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button color="blue.600" onClick={() => (window.location.href = `/note/edit/${noteId}`)}>
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

export default NoteCard;
