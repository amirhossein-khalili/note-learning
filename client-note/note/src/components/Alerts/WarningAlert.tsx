import { Alert, Box } from '@chakra-ui/react';

const WarningAlert: React.FC = () => {
  return (
    <Box>
      <Alert color="yellow.500" title="Warning">
        <p>There is a potential issue with this action. Please proceed with caution.</p>
      </Alert>
    </Box>
  );
};

export default WarningAlert;
