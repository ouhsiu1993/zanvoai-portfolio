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
  Icon,
} from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const emailColor = useColorModeValue('blue.600', 'blue.400');
  
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
          {/* 聯絡資訊 */}
          <HStack 
            spacing={3}
            align="center"
            fontSize={{ base: 'lg', md: 'xl' }}
            color={textColor}
            flexDirection={{ base: 'column', sm: 'row' }}
          >
            <HStack spacing={2}>
              <Icon as={FiMail} color={emailColor} />
              <Text fontWeight="medium">合作、諮詢，歡迎來信：</Text>
            </HStack>
            <Link 
              href="mailto:zaovoai@gmail.com"
              color={emailColor}
              fontWeight="semibold"
              fontSize={{ base: 'lg', md: 'xl' }}
              _hover={{ 
                textDecoration: 'underline',
                transform: 'scale(1.02)',
              }}
              transition="all 0.2s"
            >
              zaovoai@gmail.com
            </Link>
          </HStack>
          
          {/* 版權資訊 */}
          <Text 
            fontSize="sm" 
            color={useColorModeValue('gray.400', 'gray.500')}
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