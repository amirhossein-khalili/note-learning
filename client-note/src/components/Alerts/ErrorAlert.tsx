import { Alert, Box } from '@chakra-ui/react';

const ErrorAlert: React.FC = () => {
  return (
    <Box>
      <Alert color="red.500" title="Error">
        <p>An error occurred. Please try again later.</p>
      </Alert>
    </Box>
  );
};

export default ErrorAlert;
