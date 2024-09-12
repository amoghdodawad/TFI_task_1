import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import pizza from "../images/pizza.png";
import vector from "../images/Vector 1.png";

function Landing() {
  return (
    <Flex 
        flexDirection={{ base: 'column-reverse', md: 'row '}}
        maxWidth="100vw"
        height="100vh"
        justifyContent="space-between"
        align="center"
        pb="5rem"
    >
        <Box 
            width={{ base: "100vw", md: '50vw' }} 
            height="100%" 
            alignItems="center"
        >
            <Flex 
                direction="column" 
                width="100%" 
                justifyContent="center" 
                alignItems="center" 
                height="100%"
                >
                <Flex 
                    direction="column" 
                    width="80%" 
                    justifyContent="center" 
                    alignItems={{ base: 'center', md: 'start' }} 
                    height="100%"
                >
                    <Heading 
                        as="h1" 
                        size="3xl" 
                        mb="4" 
                        color="rgba(14,35,104,1)" 
                        alignItems="center"
                        fontFamily="Open Sans"
                    >
                        Discover the <br/><Text as="span" color="#E23744">Best </Text> Food <br/> and Drinks
                    </Heading>
                    <Text 
                        mb="6" 
                        color="rgba(14,35,104,1)"
                        fontFamily="Open sans"
                    >
                        <Text
                            color="rgba(68, 73, 87, 1)"
                        >
                            Naturally made Healthcare Products for the &nbsp;
                        </Text>
                        <Text
                            color="rgba(68, 73, 87, 1)"
                        >
                            better care & support of your body.
                        </Text>
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
                            fontFamily="Open sans"
                        >
                            Explore Now!
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </Box>
        <Box 
            width={{ base: "100vw", md: '50vw' }} 
            position={'relative'} 
            height="100%"
        >
            <Image 
                src={pizza} 
                alt="Delicious Pizza" 
                position={'absolute'} 
                top="0" 
                right="0" 
                width={{ base: "100%", md: "96%"}} 
                height={{ base: "100%", md: "97%"}}/>
            <Image 
                src={vector} 
                alt="Delicious Pizza" 
                position={'absolute'} 
                top="0" 
                right="0" 
                width="100%" 
                height={{ base: "102%", md: "100%" }}
            />
        </Box>
    </Flex>
  )
}

export default Landing