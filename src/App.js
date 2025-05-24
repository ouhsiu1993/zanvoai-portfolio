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
        <Box minH="100vh" bg="gray.100" _dark={{ bg: "gray.900" }}>
          <Header />
          
          {/* Hero Section - 主要區塊 */}
          <Box data-scroll-section="hero">
            <HeroSection />
          </Box>
          
          {/* Brand Principles - 主要區塊 */}
          <Box data-scroll-section="brand" py={{ base: 20, md: 32 }}>
            <BrandPrinciples />
          </Box>
          
          {/* Projects Section - 主要區塊 */}
          <Box data-scroll-section="projects" py={{ base: 20, md: 32 }}>
            <Container maxW="container.xl">
              <ProjectGrid />
            </Container>
          </Box>
          
          {/* About Section - 主要區塊 */}
          <Box data-scroll-section="about" py={{ base: 20, md: 32 }}>
            <About />
          </Box>
          
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;