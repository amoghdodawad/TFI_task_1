import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import logo from "../images/logo_.png";

function Navbar() {
  return (
    <Flex 
        position={'absolute'} 
        top="0" 
        left="0" 
        width="100%" 
        zIndex={10} 
        justifyContent="space-between"
        alignItems="center" 
        flexDirection={{ base: "row-reverse", md: "row"}}
    >
        <Box 
            padding="2rem" 
            pl="4rem" 
            display={{ base: "none", md: "inherit" }}
        >
            <Image src={logo}/>
        </Box>
        <Box 
            color='white' 
            border="1px" 
            borderColor="white" 
            mx={{ base: "0.5rem", md:"2rem" }} 
            my={{ base: "0.5rem", md:"2rem" }} 
            px="1rem" 
            py=".5rem" 
            borderRadius="full"
            fontFamily="Open Sans"
        >
            Get in touch
        </Box>
    </Flex>
  )
}

export default Navbar