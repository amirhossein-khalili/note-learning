import React from 'react';
import { Link } from 'react-router-dom';
// import { Box, Flex, Spacer, Heading, Image } from '@chakra-ui/react';
import { HStack, Image, Heading } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo_transparent.webp';

const NavBar: React.FC = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" p="4" bg="green.300" color="white">
      <Link to="/">
        <Image src={logo} alt="Logo" boxSize="100px" mr="2" />
      </Link>
      <Link to="/todos">
        <Heading size="md">this is test for header </Heading>
      </Link>
      <Link to="/notes">
        <EmailIcon aria-label="Notes" color="whiteAlpha" ml={2} boxSize={7} />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
