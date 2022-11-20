import { Stack, VStack, Heading, Text, Flex, Box, Image, HStack, useColorModeValue, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

import img2 from '../assets/caraousel images/img (2).jpg'
import img3 from '../assets/caraousel images/img (3).jpg'
import img4 from '../assets/caraousel images/img (4).jpg'
import img7 from '../assets/caraousel images/img (5).jpg'
import img8 from '../assets/caraousel images/img (6).jpg'
import img5 from '../assets/caraousel images/img (1).png'
import vid1 from '../assets/videos/video (1).mp4'
import vid2 from '../assets/videos/video (2).mp4'
import vid3 from '../assets/videos/video (3).mp4'
import vid4 from '../assets/videos/video (4).mp4'
import vid5 from '../assets/videos/video (5).mp4'
import vid7 from '../assets/videos/video (7).mp4'

const Videos = [
  { src: vid1, img: img3, heading: "Sample Video-1", channelName: "Do Edits", youtubeLink: "https://youtu.be/rn_Fy_H24Zc" },
  { src: vid2, img: img7, heading: "Sample Video-2", channelName: "Do Edits", youtubeLink: "https://youtu.be/Boizor2bThA" },
  { src: vid3, img: img8, heading: "Sample Video-3", channelName: "Do Edits", youtubeLink: "https://youtu.be/27PW-Rd9_kw" },
  { src: vid4, img: img2, heading: "Sample Video-4", channelName: "Do Edits", youtubeLink: "https://youtu.be/TnzyoJf6F4s" },
  { src: vid5, img: img4, heading: "Sample Video-5", channelName: "Do Edits", youtubeLink: "https://youtu.be/dSG3JATGdWg" },
  { src: vid7, img: img5, heading: "Sample Video-6", channelName: "Do Edits", youtubeLink: "https://youtube.com/shorts/6pqgiYF1zsc?feature=share" },
]

const Video = () => {
  const hoverBg = useColorModeValue("whatsapp.100", " gray.500")

  const [content, setContent] = useState(Videos[0]);
  return (
    <Stack px={[2, 16]} py={[16, 4]} direction={['column', 'column', "row"]} h={['auto', 'auto']}>
      <VStack width="full">
        <video src={content.src} style={{ width: "100%" }} controls controlsList='nodownload'></video>
        <VStack alignItems="start" py="4" px={[4, 0]}>
          <Heading>{content.heading}</Heading> <Button size="md" variant="solid" colorScheme="whatsapp" ><a target="blanck" href={content.youtubeLink}>Watch it on youtube</a></Button>
          <Text p="2" maxH={["100px", "200px", "300px"]} overflowY={"auto"} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat porro nam laudantium eos voluptatem veniam. Esse soluta illum provident quam assumenda voluptatem sapiente eum officia pariatur nostrum laudantium dolorum odi
            Eaque placeat porro nam laudantium eos voluptatem veniam. Esse soluta illum provident quam assumenda voluptatem sapiente eum officia pariatur nostrum laudantium dolorum odit repellendus veritatis numquam, placeat cumque impedit dignissimos beatae Eaque placeat porro nam laudantium eos voluptatem veniam. Esse soluta illum provident quam assumenda voluptatem sapiente eum officia pariatur nostrum laudantium dolorum odit repellendus veritatis numquam, placeat cumque impedit dignissimos beatae Eaque placeat porro nam laudantium eos voluptatem veniam. Esse soluta illum provident quam assumenda voluptatem sapiente eum officia pariatur nostrum laudantium dolorum odit repellendus veritatis numquam, placeat cumque impedit dignissimos beatae t repellendus veritatis numquam, placeat cumque impedit dignissimos beatae laboriosam.</Text>
        </VStack>
      </VStack>
      <Stack width={['full', 'full', 'xl']} alignItems="stretch" p="2" gap="4">
        {
          Videos.map((video) => {
            return (
              <Flex onClick={() => { setContent(video) }} cursor="pointer" transition="300ms" borderRadius="2xl" _hover={{ bg: hoverBg }} direction={['column', 'row']} pos="relative" alignItems={['stretch', 'stretch']} justifyContent={'stretch'}>
                <Box p={[0, 2]} flex="1" overflow="hidden">
                  <Image src={video.img} h="full" objectFit="cover" borderRadius="0.8rem" />
                </Box>
                <Stack flex='1' direction="row" py="1">
                  <Stack display={['flex', 'none']} w="30%" h="Full" justify="center" alignItems="center">
                    <Text borderRadius="50%" bg="gray.300" py="6" px="2" >{video.channelName}</Text>
                  </Stack>

                  <VStack alignSelf="flex-end" w={['70%', 'full']} h="full" py="2" fontSize="1rem" alignItems="flex-start" justifyContent="space-between">
                    <VStack alignItems="flex-start">
                      <Heading textTransform="uppercase" size={['sm', 'md']}>{video.heading}</Heading>
                      <Text display={['none', 'inherit']}>{video.channelName}</Text>
                    </VStack>
                    <HStack fontSize="0.8rem" gap="2">
                      <Text>1m views</Text>
                      <Text>1 month ago</Text>
                    </HStack>
                  </VStack>
                </Stack>
              </Flex>
            )
          })
        }
      </Stack>
    </Stack>
  )
}

export default Video