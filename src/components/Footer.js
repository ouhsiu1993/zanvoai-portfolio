import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiNotion } from "react-icons/si";

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  
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
          <Link href="https://github.com/ouhsiu1993" isExternal>
            <Icon as={FiGithub} boxSize={5} />
          </Link>
          <Link href="https://pumped-agustinia-c1c.notion.site/Hi-I-m-ODI-1e4fd1f02cf28053ba9ece685c5c316d?pvs=4" isExternal>
            <Icon as={SiNotion} boxSize={5} />
          </Link>
          <Link href="https://www.linkedin.com/in/hsiu-ou-a24a4021b/" isExternal>
            <Icon as={FiLinkedin} boxSize={5} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;