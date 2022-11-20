import { Container, Heading, Input, VStack,Button,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW="container.xl" h="100vh" py="16">
    <form>
      <VStack alignItems="stretch" spacing="8" w={['full','96']} mx="auto">
      <Heading alignSelf="center">Daily Anime</Heading>
      <Avatar alignSelf="center" boxSize="28"/>
      <Input type="text" placeholder="Enter name..." required focusBorderColor='green.500'/>
      <Input type="email" placeholder="Enter email..." required focusBorderColor='green.500'/>
      <Input type="password" placeholder="Enter password..." required focusBorderColor='green.500'/>
      <Input type="password" placeholder="Confirm password..." required focusBorderColor='green.500'/>
      <Button colorScheme="whatsapp" type='submit'>
        Sign Up
      </Button>
      <Text textAlign="right">already have account?
      <Button colorScheme="whatsapp" variant="link" mx="2" >
        <Link to="/login">login ?</Link>
      </Button>
      </Text>
      </VStack>
    </form>
   </Container>
  )
}

export default Signup