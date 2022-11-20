import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="solid"
      color="current"
      position="fixed"
      top="2"
      right="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      border="2px solid"
      colorScheme="whatsapp"
      {...props}
    />
  );
};
