import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import React from 'react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      {/* <MoonIcon> */}
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme="blue" />
      {/* </MoonIcon> */}
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
