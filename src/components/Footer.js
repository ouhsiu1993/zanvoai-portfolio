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
  Flex,
} from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const emailColor = useColorModeValue('blue.600', 'blue.400');
  
  // 導航功能
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={12}
    >
      <Container maxW="container.xl">
        {/* 主要內容區 - 橫向布局 */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          spacing={8}
          mb={8}
        >
          {/* 左側：品牌 + 導航 */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
            <Text 
              fontSize="xl"
              fontWeight="bold"
              color={emailColor}
            >
              ZanvoAI
            </Text>
            
            <HStack spacing={6} fontSize="sm">
              <Link 
                onClick={() => scrollToSection('brand-story')}
                color={textColor}
                _hover={{ color: emailColor }}
                cursor="pointer"
              >
                品牌理念
              </Link>
              <Link 
                onClick={() => scrollToSection('projects-section')}
                color={textColor}
                _hover={{ color: emailColor }}
                cursor="pointer"
              >
                作品集
              </Link>
              <Link 
                onClick={() => scrollToSection('about')}
                color={textColor}
                _hover={{ color: emailColor }}
                cursor="pointer"
              >
                關於我們
              </Link>
            </HStack>
          </VStack>

          {/* 右側：聯絡資訊 */}
          <VStack align={{ base: 'center', md: 'flex-end' }} spacing={3}>
            <Text fontSize="sm" color={textColor}>
              商業合作請聯繫
            </Text>
            <HStack spacing={2}>
              <Icon as={FiMail} color={emailColor} boxSize={4} />
              <Link 
                href="mailto:zaovoai@gmail.com"
                color={emailColor}
                fontWeight="medium"
                fontSize="md"
                _hover={{ textDecoration: 'underline' }}
              >
                zaovoai@gmail.com
              </Link>
            </HStack>
          </VStack>
        </Flex>

        {/* 底部版權 - 分隔線 + 居中 */}
        <Box>
          <Text 
            fontSize="sm" 
            color={useColorModeValue('gray.400', 'gray.500')}
          >
            © {new Date().getFullYear()} ZanvoAI. All Rights Reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;