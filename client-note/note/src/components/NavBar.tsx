import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Heading, Image } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  return (
    <Box p="4" bg="green.300" color="white">
      <Flex alignItems="center">
        <Link to="/">
          <Image src="/logo/logo_transparent.svg" alt="Logo" boxSize="100px" mr="2" />
        </Link>
        <Heading size="md">this is test for header </Heading>
        <Spacer />
        <Link to="/notes">
          <EmailIcon aria-label="Notes" color="whiteAlpha" ml={2} boxSize={7} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
