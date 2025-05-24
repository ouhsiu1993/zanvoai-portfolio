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
  Divider,
} from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const emailColor = useColorModeValue('blue.600', 'blue.400');
  
  // 導航功能 - 配合 scroll-snap
  const scrollToSection = (sectionId) => {
    // 優先使用 data 屬性選擇器
    const sectionMap = {
      'brand-story': 'brand',
      'projects-section': 'projects',
      'about': 'about'
    };
    
    const dataAttribute = sectionMap[sectionId];
    let element;
    
    if (dataAttribute) {
      element = document.querySelector(`[data-scroll-section="${dataAttribute}"]`);
    }
    
    // 備用方案：使用原來的 ID
    if (!element) {
      element = document.getElementById(sectionId);
    }
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={{ base: 8, md: 12 }}
    >
      <Container maxW="container.xl" w="full">
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
          {/* 主要內容區 - 修復桌面版佈局 */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'center', md: 'flex-start' }}
            gap={{ base: 6, md: 8 }}
          >
            {/* 左側：品牌 + 導航 */}
            <VStack 
              align={{ base: 'center', md: 'flex-start' }} 
              spacing={4}
              flex="1"
            >
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="bold"
                color={emailColor}
                cursor="pointer"
                onClick={() => {
                  const heroSection = document.querySelector('[data-scroll-section="hero"]');
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s',
                }}
              >
                ZanvoAI
              </Text>
              
              {/* 導航連結 - 手機版垂直，桌面版水平 */}
              <HStack 
                spacing={6} 
                fontSize="sm"
                flexDirection={{ base: 'column', md: 'row' }}
                align="center"
              >
                <Link 
                  onClick={() => scrollToSection('brand-story')}
                  color={textColor}
                  _hover={{ color: emailColor }}
                  cursor="pointer"
                  transition="color 0.2s"
                >
                  品牌理念
                </Link>
                <Link 
                  onClick={() => scrollToSection('projects-section')}
                  color={textColor}
                  _hover={{ color: emailColor }}
                  cursor="pointer"
                  transition="color 0.2s"
                >
                  作品集
                </Link>
                <Link 
                  onClick={() => scrollToSection('about')}
                  color={textColor}
                  _hover={{ color: emailColor }}
                  cursor="pointer"
                  transition="color 0.2s"
                >
                  關於我們
                </Link>
              </HStack>
            </VStack>

            {/* 右側：聯絡資訊 */}
            <VStack 
              align={{ base: 'center', md: 'flex-end' }} 
              spacing={3}
              flex="1"
            >
              <Text 
                fontSize="sm" 
                color={textColor}
                textAlign={{ base: 'center', md: 'right' }}
              >
                技術諮詢/商業合作請聯繫
              </Text>
              <HStack spacing={2} justify={{ base: 'center', md: 'flex-end' }}>
                <Icon as={FiMail} color={emailColor} boxSize={4} />
                <Link 
                  href="mailto:zaovoai@gmail.com"
                  color={emailColor}
                  fontWeight="medium"
                  fontSize="md"
                  _hover={{ 
                    textDecoration: 'underline',
                    transform: 'scale(1.05)',
                  }}
                  transition="all 0.2s"
                >
                  zaovoai@gmail.com
                </Link>
              </HStack>
            </VStack>
          </Flex>

          {/* 底部版權 */}
          <Box textAlign="center" pt={{ base: 4, md: 6 }}>
            <Text 
              fontSize="sm"
              color={useColorModeValue('gray.400', 'gray.500')}
            >
              © {new Date().getFullYear()} ZanvoAI. All Rights Reserved
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;