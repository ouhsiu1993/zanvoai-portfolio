import React from 'react';
import { ChakraProvider, Box, Container, ColorModeScript } from '@chakra-ui/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectGrid from './components/ProjectGrid';
import BrandPrinciples from './components/BrandPrinciples';
import Footer from './components/Footer';
import theme from './theme';
import About from './components/About';

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
          <Header />
          <HeroSection />
          <BrandPrinciples />
          <Container maxW="container.xl" py={8}>
            <ProjectGrid />
          </Container>
          <About /> 
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;