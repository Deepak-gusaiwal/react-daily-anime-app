import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import img2 from '../assets/caraousel images/img (2).jpg'
import img3 from '../assets/caraousel images/img (3).jpg'
import img4 from '../assets/caraousel images/img (4).jpg'
import img7 from '../assets/caraousel images/img (5).jpg'
import img8 from '../assets/caraousel images/img (6).jpg'
import img5 from '../assets/caraousel images/img (1).png'
import img6 from '../assets/caraousel images/img (2).png'

const CarauselBoxes = [
  { img: img2, heading: "Watch your Fav Anime" },
  { img: img3, heading: "Watch your Fav Anime" },
  { img: img4, heading: "Watch your Fav Anime" },
  { img: img5, heading: "Watch your Fav Anime" },
  { img: img6, heading: "Watch your Fav Anime" },
  { img: img7, heading: "Watch your Fav Anime" },
  { img: img8, heading: "Watch your Fav Anime" },
]

const Home = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} interval="3000">
        {
          CarauselBoxes.map((box) => {
            return (
              <Flex w="full" h={["60vh", "80vh", "100vh"]} position="relative" justifyContent="center" alignItems="flex-end" >
                <Image src={box.img} w="100%" h="100%" objectFit="cover" />
                <Heading color="blackAlpha.900" fontSize={["5xl", "6xl", "7xl", "8xl"]} p="4" pos="absolute" bottom="10" bg="whiteAlpha.400">{box.heading}</Heading>
              </Flex>
            )
          })
        }
      </Carousel>

      <Stack>
        <Heading p="2" mx="auto" borderBottom="2px solid" w="fit-content">Services</Heading>
      <Flex p={[4, 8, 16]} gap="8" direction={["column","column","row"]} justifyContent="center" alignItems={['center',"center","flex-start"]} >
        
        <Box flex="1" h={"100%"} >
        <Image src={img2} objectFit="cover"/>
        </Box>
        <Text flex='1' alignSelf="flex-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, corporis corrupti fugit ipsa repellat placeat at aspernatur totam sit animi voluptatum adipisci fuga culpa assumenda eveniet ipsum dicta amet vero! Placeat, maiores? Nemo ea laudantium error nisi, officia tempore nulla. Voluptatibus, veritatis? Porro alias ab deleniti hic, ipsa quisquam dignissimos fugiat temporibus ea veniam quod rerum animi placeat asperiores reiciendis possimus. Voluptas maxime accusantium iusto possimus, nemo ipsam eum eius consequuntur fugiat perspiciatis nihil impedit cumque, numquam repellendus. Laudantium dolorum provident expedita reprehenderit doloribus recusandae
          
        </Text>
      </Flex>
      </Stack>
    </>
  )
}

export default Home