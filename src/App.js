import React from 'react';
import { ChakraProvider, Box, Container, ColorModeScript } from '@chakra-ui/react';
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import Analytics from './components/Analytics'; // 正確的導入方式
import theme from './theme';

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Analytics /> {/* 確保 Analytics 組件正確使用 */}
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