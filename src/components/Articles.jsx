import React, { useEffect, useState } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import ArticleCard from './ArticleCard';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import image1 from "../images/grilled-tomatoes-1-846x846 1 (1).png";
import image2 from "../images/grilled-tomatoes-1-846x846 1.png";
import image3 from "../images/meal-prep-ideas-846x846 1 (1).png";
import image4 from "../images/meal-prep-ideas-846x846 1 (2).png";
import image5 from "../images/meal-prep-ideas-846x846 1 (3).png";
import image6 from "../images/meal-prep-ideas-846x846 1.png";

const articles = [
    {
        title: 'Grilled tomatoes at home',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis debitis dolore aliquam vitae saepe, cupiditate quos eius atque laboriosam ea?',
        url: image1
    },
    {
        title: 'Snacks for travel',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis debitis dolore aliquam vitae saepe, cupiditate quos eius atque laboriosam ea?',
        url: image2
    },
    {
        title: 'Post-workout recipes',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis debitis dolore aliquam vitae saepe, cupiditate quos eius atque laboriosam ea?',
        url: image3
    },
    {
        title: 'How to grill corn',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis debitis dolore aliquam vitae saepe, cupiditate quos eius atque laboriosam ea?',
        url: image4
    },
    {
        title: 'Crunchwrap supreme',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis debitis dolore aliquam vitae saepe, cupiditate quos eius atque laboriosam ea?',
        url: image5
    },
    {
        title: 'Brocoli cheese soup',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis debitis dolore aliquam vitae saepe, cupiditate quos eius atque laboriosam ea?',
        url: image6
    }
];

function Articles() {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ activeArticles, setActiveArticles ] = useState([]);

    function handleIndexChange(index){
        const finalIndex = index + activeIndex;
        if(finalIndex < 0 || finalIndex > 1) return;
        setActiveIndex(finalIndex);
    }

    useEffect(() => {
        const temp = articles.filter(( article, index ) => {
            if(index === 3*activeIndex || index === 3*activeIndex + 1 || index === 3*activeIndex + 2) return true;
            return false;
        })
        setActiveArticles([...temp]);
    },[activeIndex])

    return (
        <Flex
            flexDirection="column"
            color="rgba(14,35,104,1)"
            py="2rem"
            pl="4rem"
            alignItems="start"
            width="100%"
            // height={{ base:"300vh", md:"100vh" }}
        >
            <Heading>
                Latest articles
            </Heading>
            <Flex
                flexDirection={{ base: "column", md: "row" }}
                my="2rem"
                width="100%"
                justifyContent={{ base: "center", md: "space-between"}}
                alignItems="center"
            >
                {activeArticles.map(({ url, title, description }) => <ArticleCard key={title} url={url} title={title} description={description} />)}
            </Flex>
            <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="100%"
            >
                <Text
                    border="1px"
                    borderColor={activeIndex === 0 ? "rgba(0,0,0,0.1)" : "rgba(14,35,104,1)"}
                    borderRadius="3px"
                    onClick={() => handleIndexChange(-1)}
                >
                    <MdKeyboardArrowLeft/> 
                </Text>
                <Text
                    mx="1rem"
                >
                    {activeIndex + 1}/{2}
                </Text>
                <Text
                    border="1px"
                    borderColor={activeIndex === 1 ? "rgba(0,0,0,0.1)" : "rgba(14,35,104,1)"}
                    borderRadius="3px"
                    onClick={() => handleIndexChange(+1)}
                >
                    <MdKeyboardArrowRight/>
                </Text>
            </Flex>
        </Flex>
    )
}

export default Articles