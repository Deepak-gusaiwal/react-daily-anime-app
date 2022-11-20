import { Container, HStack, Input, VStack,Button } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
const Upload = () => {
  return (
   <Container maxW={"container.xl"} h="100vh">
    <VStack color="whatsapp.500" h="full" justifyContent="center">
    <AiOutlineCloudUpload size="10rem"/>
    <form>
    <HStack>
      <Input  required type={"file"} css={{
        "&::file-selector-button":{
          border:'none',
          width:"calc(100% + 36px)",
          height:"100%",
          marginLeft:"-18px",
          cursor:"pointer"
        }
      }}/> 
      <Button colorScheme="whatsapp" cursor="pointer" type="submit">Upload</Button>
    </HStack>
    </form>
    </VStack>
   </Container>
  )
}

export default Upload