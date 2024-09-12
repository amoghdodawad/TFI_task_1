import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import logo from "../images/logo_.png";
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <Flex
        flexDirection={{ base: "column", md: "row" }}
        backgroundColor="rgba(248, 248, 248, 1)"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        height="100%"
        color="rgba(14,35,104,1)"
    >
        <Box 
            width={{ base: "100%", md: "25%" }}
            mt={{ base: "3rem", md: "0" }}
        >
            <Flex
                height="100%"
                justifyContent="center"
                alignItems="center"
            >
                <Image 
                    src={logo} 
                    width={{ base : "25%", md: "50%" }}
                />
            </Flex>
        </Box>
        <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-around"
            alignItems="start"
            width="100%"
        >
            <Box
                maxWidth={{ base: "80%", md: "25%" }}
                py="3rem"
                pl={{ base: "1rem", md: "0"}}
            >
                <Heading 
                    fontWeight="semibold"
                    fontFamily="Open Sans"
                >
                    Contact us
                </Heading>
                <Flex
                    flexDirection="column"
                    fontFamily="Open Sans"
                    color="rgba(100, 104, 116, 1)"
                >
                    <Text my=".5rem">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo saepe natus at voluptatum non temporibus autem, suscipit reiciendis rerum.
                    </Text>
                    <Text my=".5rem">
                        amoghasdodawad@gmail.com
                    </Text>
                    <Text>
                        8147078932
                    </Text>
                </Flex>
            </Box>
            <Box
                maxWidth={{ base: "80%", md: "25%" }}
                py="3rem"
                pl={{ base: "1rem", md: "0"}}
            >
                <Heading 
                    fontWeight="semibold"
                    fontFamily="Open Sans"
                >
                    More
                </Heading>
                <Flex
                    flexDirection="column"
                    fontFamily="Open Sans"
                    color="rgba(100, 104, 116, 1)"
                >
                    <Text my=".3rem">
                        About us
                    </Text>
                    <Text my=".3rem">
                        Products
                    </Text>
                    <Text my=".3rem">
                        Career
                    </Text>
                    <Text my=".3rem">
                        Contact us
                    </Text>
                </Flex>
            </Box>
            <Flex
                maxWidth={{ base: "80%", md: "25%" }}
                py="3rem"
                pl={{ base: "1rem", md: "0"}}
                justifyContent="center"
                flexDirection="column"
            >
                <Heading 
                    fontWeight="semibold"
                    fontFamily="Open Sans"
                >
                    Social Links
                </Heading>
                <Flex
                    flexDirection="row"
                    justifyContent="space-around"
                >
                    <Text my=".5rem">
                        <FaInstagram/>
                    </Text>
                    <Text my=".5rem">
                        <FaXTwitter/>
                    </Text>
                    <Text my=".5rem">
                        <FaFacebookF/>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Footer;