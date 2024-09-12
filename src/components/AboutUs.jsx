import React from 'react';
import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import about from "../images/about.png";

function About() {
  return (
    <Flex 
      flexDirection="row" 
      maxWidth="100vw" 
      alignItems="center" 
      justifyContent="center"
      background="linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);"
    >
      <Flex
        width="50%"
        height="100%"
        display={{ base: "none", md: "inherit" }}
      >
        <Flex 
          alignItems="center" 
          justifyContent="center" 
          width="100%" 
          height="100%"
        >
          <Image 
            src={about} 
            alt="About" 
            maxWidth="70%" 
            maxHeight="70%"
          />
        </Flex>
      </Flex>
      <Flex 
        width={{ base: "100%", md: "50%" }}
        height="100%"
        py={{ base: "2rem", md: "0" }}
        alignItems={{ base: "center", md: "start" }}
        flexDirection="column"
      >
        <Heading 
          as="h1" 
          color="rgba(14,35,104,1)"
          my="0.7rem"
        >
          About us
        </Heading>
        <Text
          color="rgba(14,35,104,1)"
          py="0.7rem"
          width={{ base: "80%", md: "65%"}}
          textAlign={{ base: "center", md: "start" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
        </Text>
        <Button 
          backgroundColor="rgba(226,55,68,1)" 
          size="lg" 
          borderRadius="1.1rem" 
          border="none"
        >
          <Text 
            color="white" 
            pl="8px" 
            pr="8px" 
            fontWeight="bold" 
            fontFamily="Poppins"
          >
            Read more
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}

export default About