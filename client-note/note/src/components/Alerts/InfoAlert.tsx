import { Alert, Box } from '@chakra-ui/react';

const InfoAlert: React.FC = () => {
  return (
    <Box>
      <Alert color="blue.500" title="Information">
        <p>This is a message providing additional information.</p>
      </Alert>
    </Box>
  );
};

export default InfoAlert;
