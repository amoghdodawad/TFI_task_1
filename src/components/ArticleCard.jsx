import React from 'react';
import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

function ArticleCard({ url, title, description }) {
  return (
    <Flex
        flexDirection="column"
        width={{ base: "100%", md: "27%" }}
        // height={{ base:"30%", md:"90%" }}
        height={"90%"}
        border="1px"
        borderColor="rgba(0,0,0,0.1)"
        borderRadius="1rem"
        justifyContent="center"
        alignItems="center"
        mr={{ base: "3.5rem", md: "2rem" }}
        mb={{ base: "2rem", md: "0" }}
    >
        <Flex
            width="100%"
            alignItems="center"
            justifyContent="center"
            height="40%"
            my="2rem"
        >
            <Image 
                src={url} 
                width="70%"
                borderRadius={{ base: "5px", md: "20px"}}
            />
        </Flex>
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems={{ base:"center", md:"start"}}
            height="60%"
        >
            <Heading
                height="30%"
                fontSize="large"
                overflow="hidden"
                my="0.4rem"
                mx="3rem"
            >
                {title}
            </Heading>
            <Text 
                fontWeight="light"
                height="50%"
                overflow="hidden"
                mx="3rem"
            >
                {description}
            </Text>
            <Button
                width="8rem" 
                borderRadius="full" 
                border="1px" 
                borderColor="rgba(66, 73, 97, 1)" 
                backgroundColor="white"
                fontWeight="medium"
                height="20%"
                mx="3rem"
                my="0.8rem"
                px={{ base:"2rem", md:"1.5rem"}}
                py={{ base:"0.4rem", md:"0.7rem" }}
            >
                Read more
            </Button>
        </Flex>
    </Flex>
  )
}

export default ArticleCard