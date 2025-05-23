// src/components/Footer.js
import React from 'react';
import {
  Box,
  Container,
  Text,
  Link,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const linkColor = useColorModeValue('blue.500', 'blue.300');
  
  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      mt={16}
      py={12}
    >
      <Container maxW="container.xl">
        <VStack spacing={6} textAlign="center">
          {/* 主要介紹文字 */}
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={textColor}
            lineHeight="tall"
            maxW="4xl"
          >
            我是 ODI，一位長期致力於新創產品與技術實作的產品經理，正在用 AI 強化自己的職涯輸出力。
            <br />
            我相信，每個有才華的人，都值得一套更好的表達工具。歡迎來信交流、合作，或單純聊聊天也可以。
          </Text>
          
          {/* 社群連結 */}
          <HStack 
            spacing={{ base: 4, md: 8 }} 
            flexDirection={{ base: 'column', sm: 'row' }}
            divider={
              <Text color={textColor} display={{ base: 'none', sm: 'block' }}>
                |
              </Text>
            }
          >
            <Link 
              href="https://www.linkedin.com/in/hsiu-ou-a24a4021b/" 
              isExternal
              color={linkColor}
              fontWeight="medium"
              _hover={{ 
                textDecoration: 'none',
                transform: 'translateY(-1px)',
                color: 'blue.600'
              }}
              transition="all 0.2s"
            >
              LinkedIn
            </Link>
            
            <Link 
              href="https://reurl.cc/j9rXzn" 
              isExternal
              color={linkColor}
              fontWeight="medium"
              _hover={{ 
                textDecoration: 'none',
                transform: 'translateY(-1px)',
                color: 'blue.600'
              }}
              transition="all 0.2s"
            >
              Notion 作品集
            </Link>
            
            <Link 
              href="https://github.com/ouhsiu1993" 
              isExternal
              color={linkColor}
              fontWeight="medium"
              _hover={{ 
                textDecoration: 'none',
                transform: 'translateY(-1px)',
                color: 'blue.600'
              }}
              transition="all 0.2s"
            >
              GitHub
            </Link>
          </HStack>
          
          {/* 版權資訊 */}
          <Text 
            fontSize="sm" 
            color={useColorModeValue('gray.500', 'gray.500')}
            pt={4}
          >
            © {new Date().getFullYear()} ZanvoAI. All Rights Reserved
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;