import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import LandingSection from '../components/Landing';
import AboutUsSection from '../components/AboutUs';
import ArticlesSection from '../components/Articles';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function LandingPage (){
    return (
        <Box padding="0" margin="0">
            <Container maxWidth="100vw" padding="0" margin="0">
                <Navbar/>
                <LandingSection />
                <AboutUsSection />
                <ArticlesSection />
                <Footer />
            </Container>
        </Box>
    );
};
  
export default LandingPage;