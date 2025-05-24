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
  const bgColor = useColorModeValue('white', 'gray.800'); // Footer 保持 white 作為區隔
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
      py={{ base: 10, md: 16 }}
      mt={{ base: 20, md: 32 }}
    >
      <Container maxW="container.xl" w="full">
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          {/* 主要內容區 */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'center', md: 'flex-start' }}
            gap={{ base: 8, md: 10 }}
          >
            {/* 左側：品牌 + 導航 */}
            <VStack 
              align={{ base: 'center', md: 'flex-start' }} 
              spacing={{ base: 6, md: 8 }}
              flex="1"
            >
              <Text 
                fontSize={{ base: 'xl', md: '2xl' }}
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
                  transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                letterSpacing="tight"
              >
                ZanvoAI
              </Text>
              
              {/* 導航連結 */}
              <HStack 
                spacing={{ base: 4, md: 8 }} 
                fontSize={{ base: 'sm', md: 'md' }}
                flexDirection={{ base: 'column', md: 'row' }}
                align="center"
              >
                {[
                  { text: '品牌理念', section: 'brand-story' },
                  { text: '作品集', section: 'projects-section' },
                  { text: '關於我們', section: 'about' }
                ].map((nav, index) => (
                  <Link 
                    key={index}
                    onClick={() => scrollToSection(nav.section)}
                    color={textColor}
                    _hover={{ 
                      color: emailColor,
                      transform: 'translateY(-1px)'
                    }}
                    cursor="pointer"
                    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                    fontWeight="medium"
                  >
                    {nav.text}
                  </Link>
                ))}
              </HStack>
            </VStack>

            {/* 右側：聯絡資訊 */}
            <VStack 
              align={{ base: 'center', md: 'flex-end' }} 
              spacing={{ base: 4, md: 6 }}
              flex="1"
            >
              <Text 
                fontSize={{ base: 'sm', md: 'md' }}
                color={textColor}
                textAlign={{ base: 'center', md: 'right' }}
                lineHeight="1.6"
                fontWeight="medium"
              >
                技術諮詢 / 商業合作請聯繫
              </Text>
              <HStack spacing={3} justify={{ base: 'center', md: 'flex-end' }}>
                <Icon as={FiMail} color={emailColor} boxSize={5} />
                <Link 
                  href="mailto:zaovoai@gmail.com"
                  color={emailColor}
                  fontWeight="semibold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  _hover={{ 
                    textDecoration: 'underline',
                    transform: 'scale(1.05)',
                  }}
                  transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  zaovoai@gmail.com
                </Link>
              </HStack>
            </VStack>
          </Flex>

          {/* 精緻分隔線 */}
          <Box w="full" position="relative">
            <Divider 
              borderColor={borderColor}
              borderWidth="0.5px"
              opacity={0.6}
            />
          </Box>

          {/* 底部版權 */}
          <Box textAlign="center" pt={{ base: 2, md: 4 }}>
            <Text 
              fontSize={{ base: 'xs', md: 'sm' }}
              color={useColorModeValue('gray.400', 'gray.500')}
              fontWeight="400"
              letterSpacing="wide"
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