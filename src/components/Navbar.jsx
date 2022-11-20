import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, Button, useDisclosure, DrawerHeader, VStack, HStack, DrawerCloseButton } from "@chakra-ui/react"
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button colorScheme="whatsapp" margin="2" pos="fixed" onClick={onOpen} zIndex="overlay">
        <FaAlignJustify />
      </Button>
      <ColorModeSwitcher zIndex="overlay" />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent px='4' gap="4">
          <DrawerCloseButton />
          <DrawerHeader>Daily Anime
          </DrawerHeader>
          <VStack h="80%" alignItems="flex-start" spacing="4" px="4">
            <Button onClick={() => { onClose() }} variant="ghost" colorScheme="whatsapp"> <Link to="/">Home</Link></Button>
            <Button onClick={() => { onClose() }} variant="ghost" colorScheme="whatsapp"> <Link to="/video">Watch Anime</Link></Button>
            <Button onClick={() => { onClose() }} variant="ghost" colorScheme="whatsapp"> <Link to="/upload">Upload</Link></Button>
            <Button onClick={() => { onClose() }} variant="ghost" colorScheme="whatsapp"> <Link to="/contact">Contact</Link></Button>
          </VStack>

          <HStack justifyContent="space-around" alignContent="flex-start" h="20">
            <Button onClick={() => { onClose() }} variant='outline' colorScheme="whatsapp">
              <Link to="/login">Login</Link>
            </Button>
            <Button onClick={() => { onClose() }} colorScheme="whatsapp" >
            <Link to="/signup">Signup</Link>
            </Button>
          </HStack>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar