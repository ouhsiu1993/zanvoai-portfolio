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
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

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
        <Text>© {new Date().getFullYear()} ZanvoAI. 保留所有權利</Text>
        
        <Stack direction="row" spacing={4}>
          <Link href="#" isExternal>
            <Icon as={FiGithub} boxSize={5} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FiTwitter} boxSize={5} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FiLinkedin} boxSize={5} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;