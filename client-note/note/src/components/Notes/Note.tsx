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

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

interface NoteProps {
  title: string;
  content: string;
  noteBackground?: string;
}

const Note: React.FC<NoteProps> = ({ title, content, noteBackground = 'white' }) => {
  return (
    <Card maxW="sm" bg={noteBackground}>
      {' '}
      {/* اعمال رنگ پس‌زمینه از اینجا */}
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{content}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button color="blue.600">
            <EditIcon />
          </Button>
          <Button color="red.600">
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Note;
