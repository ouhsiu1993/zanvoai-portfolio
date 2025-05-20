import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiNotion } from "react-icons/si";
import { trackEvent } from './Analytics'; // 修正導入路徑，假設在同一目錄

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  
  // 社群媒體點擊追蹤函數
  const handleSocialClick = (platform) => {
    trackEvent('social_click', { 
      platform, 
      source: 'footer',
      timestamp: new Date().toISOString()
    });
  };
  
  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      mt={8}
    >
      <Container
        as={Stack}
        maxW="container.xl"
        py={6}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© {new Date().getFullYear()} ZanvoAI. All Rights Reserved</Text>
        
        <Stack direction="row" spacing={4}>
          <Link 
            href="https://github.com/ouhsiu1993" 
            isExternal
            onClick={() => handleSocialClick('github')} // 添加點擊追蹤
            aria-label="GitHub"
          >
            <Icon as={FiGithub} boxSize={5} />
          </Link>
          <Link 
            href="https://pumped-agustinia-c1c.notion.site/Hi-I-m-ODI-1e4fd1f02cf28053ba9ece685c5c316d?pvs=4" 
            isExternal
            onClick={() => handleSocialClick('notion')} // 添加點擊追蹤
            aria-label="Notion"
          >
            <Icon as={SiNotion} boxSize={5} />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/hsiu-ou-a24a4021b/" 
            isExternal
            onClick={() => handleSocialClick('linkedin')} // 添加點擊追蹤
            aria-label="LinkedIn"
          >
            <Icon as={FiLinkedin} boxSize={5} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;