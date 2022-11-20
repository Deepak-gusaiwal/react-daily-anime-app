import { FormControl,FormLabel,Input,Button,VStack, SimpleGrid, GridItem ,Heading,Textarea,Checkbox, Flex} from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <VStack maxW="container.lg" mx="auto" w="full" p={[4,8,16]} h={['100vh',"100vh"]} spacing="8"  alignItems="stretch" justifyContent="flex-start">
    {/* heading stack */}
    <VStack  align="flex-start" w="full" alignItems="center" my="2">
      <Heading borderBottom="2px solid">Contact Us</Heading>
    </VStack>

    {/* form grid start */}
    <form>
    <SimpleGrid  w="full" columns={2} columnGap={3} rowGap={6}>
      <GridItem colSpan={[2,1]}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input required type="text" placeholder="Enter your first Name..." focusBorderColor='green.500' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={[2,1]}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input required type="email" placeholder="Enter your email..." focusBorderColor='green.500' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={[2,1]}>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input required type="password" placeholder="Enter your passwrod..." focusBorderColor='green.500' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={[2,1]}>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea required  placeholder="Type your message here..." focusBorderColor='green.500' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Checkbox colorScheme="whatsapp" required>I am human</Checkbox>
      </GridItem>
      <GridItem colSpan={2}>
      <Flex justifyContent="center">
      <Button colorScheme="whatsapp" minWidth="64" alignSelf={'center'} type='submit'>Send</Button>
      </Flex>
      </GridItem>
      
    </SimpleGrid>
    </form>
    {/* form grid end */}
  </VStack>
  )
}

export default Contact