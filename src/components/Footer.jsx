import { Button, Container, Divider, GridItem, Heading, HStack, Input, SimpleGrid, VStack, Text, Stack } from '@chakra-ui/react'
import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaArrowAltCircleRight } from "react-icons/fa"
import { Link } from 'react-router-dom';

const NavigationLinks = [
  {
    text: "Browser Popular", link: "/"
  },
  {
    text: "Browse Simulcasts", link: "/"
  },
  {
    text: "Browse Manga", link: "/"
  },
  {
    text: "Release Calendar", link: "/"
  },
  {
    text: "News", link: "/"
  },
  {
    text: "Store", link: "/"
  },
  {
    text: "Games", link: "/"
  }
]
const SocialLinks = [
  {
    text: "Youtube", link: "/", icon: FaYoutube
  },
  {
    text: "Facebook", link: "/", icon: FaFacebook
  },
  {
    text: "Twitter", link: "/", icon: FaTwitter
  },
  {
    text: "Instagram", link: "/", icon: FaInstagram
  }
]
const DailyAnimeLinks = [
  {
    text: "About", link: "/"
  },
  {
    text: "Help/FAQ", link: "/"
  },
  {
    text: "Terms of Use", link: "/"
  },
  {
    text: "Privacy Policy", link: "/"
  },
  {
    text: "AdChoices", link: "/"
  },
  {
    text: "Cookie Consent Tool", link: "/"
  },
  {
    text: "Get the Apps", link: "/"
  },
  {
    text: "Redeem Gift Card", link: "/"
  },
  {
    text: "Jobs", link: "/"
  },
]
const AccountLinks = [
  {
    text: "Create Account", link: "/signup"
  },
  {
    text: "Login", link: "/login"
  }
]
const Footer = () => {
  return (
    <>
      <Container maxW="full" bg="blackAlpha.400">
        <SimpleGrid columns={[1, 2, 4]} spacingX='40px' spacingY='20px' p={[4, 8, 16]}>
          <GridItem colSpan="1" p="2">
            <Heading size="md" mb="3" textAlign={['center', 'start']}>Navigation</Heading>
            <VStack pb="2" gap="1" alignItems={['center', 'flex-start']}>
              {
                NavigationLinks.map((item) => {
                  return (
                    <Button variant="link" size="md"> <Link to={item.link}>{item.text}r</Link></Button>
                  )
                })
              }
            </VStack>
          </GridItem>
          <GridItem colSpan="1" p="2" >
            <Heading size="md" mb="3" textAlign={['center', 'start']}>Connect with Us</Heading>
            <VStack gap="1" alignItems={['center', 'flex-start']}>
              {
                SocialLinks.map((item) => {
                  return (
                    <Button leftIcon={<item.icon />} variant="link" size="md"><Link to={item.link}>{item.text}</Link></Button>
                  )
                })
              }
            </VStack>
          </GridItem>
          <GridItem colSpan="1" p="2">
            <Heading size="md" mb="3" textAlign={['center', 'start']}>Daily Anime</Heading>
            <VStack gap="1" alignItems={['center', 'flex-start']} >
              {
                DailyAnimeLinks.map((item) => {
                  return (
                    <Button variant="link" size="md"><Link to={item.link}>{item.text}</Link></Button>
                  )
                })
              }
            </VStack>
          </GridItem>
          <GridItem colSpan="1" p="2">
            <Heading size="md" mb="3" textAlign={['center', 'start']}>Account</Heading>
            <VStack gap="1" alignItems={['center', 'flex-start']}>
              {
                AccountLinks.map((item) => {
                  return (
                    <Button variant="link" size="md"><Link to={item.link}>{item.text}</Link></Button>
                  )
                })
              }
            </VStack>
          </GridItem>
        </SimpleGrid>
        <Divider />
        <Stack my="1" direction={['column', 'row']} justifyContent="space-between" alignItems="center">
          <HStack borderBottom="2px solid white" maxW="260px">
            <Input type="text" placeholder='Enter Email here..' border="none" borderRadius="none" Outline="none" focusBorderColor='none' /> <Button borderRadius="0 50% 50% 0" p="0" variant="ghost"><FaArrowAltCircleRight size="1rem" /></Button>
          </HStack>
          <VStack borderLeft="2px solid white" borderRight="2px solid white" px="4">
            <Heading size='md'>Daily Anime</Heading>
            <Text>all copyrights reserved 2022</Text>
          </VStack>
        </Stack>
      </Container>
    </>
  )
}

export default Footer