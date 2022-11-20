import { Container, Heading, Input, VStack,Button,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <Container maxW="container.xl" h="100vh" py="16">
    <form>
      <VStack alignItems="stretch" spacing="8" w={['full','96']} mx="auto">
      <Heading>Welcome Back</Heading>
      <Input type="email" placeholder="Enter email..." required focusBorderColor='green.500'/>
      <Input type="password" placeholder="Enter password..." required focusBorderColor='green.500'/>
      <Button colorScheme="whatsapp" variant="link" alignSelf="flex-end" >
        <Link to="/forgetpassword">forget password ?</Link>
      </Button>
      <Button colorScheme="whatsapp" type='submit'>
        Login
      </Button>
      <Text textAlign="right">are you new user?
      <Button colorScheme="whatsapp" variant="link" mx="2" >
        <Link to="/signup">signup ?</Link>
      </Button>
      </Text>
      </VStack>
    </form>
   </Container>
  )
}

export default Login