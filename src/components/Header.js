import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Container,
  HStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box 
      as="header" 
      position="sticky" 
      top={0} 
      zIndex={10}
      bg={bgColor} 
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Heading 
            as="h1" 
            size="lg" 
            bgGradient="linear(to-r, blue.500, purple.500)" 
            bgClip="text"
            fontWeight="bold"
          >
            ZanvoAI
          </Heading>
          
          <HStack spacing={4}>
            <Button 
              onClick={toggleColorMode} 
              variant="ghost" 
              size="md"
              aria-label={colorMode === 'light' ? '切換暗色模式' : '切換亮色模式'}
            >
              {colorMode === 'light' ? <FiMoon /> : <FiSun />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;