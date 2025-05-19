import React from 'react';
import { ChakraProvider, Box, Container, ColorModeScript } from '@chakra-ui/react';
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
          <Header />
          <Container maxW="container.xl" py={8}>
            <ProjectGrid />
          </Container>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;