
import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Heading,
  useColorModeValue,
  Divider,
  Image,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FiLinkedin, FiGithub, FiFileText, FiMail } from 'react-icons/fi';

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const highlightColor = useColorModeValue('gray.900', 'white');
  const subTitleColor = useColorModeValue('blue.500', 'blue.400');
  const emphasisColor = useColorModeValue('blue.600', 'blue.400');
  const linkColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Box 
      id="about" 
      bg={bgColor} 
      py={{ base: 16, md: 32 }}
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 20, md: 32 }}>
          
          {/* 關於 ZanvoAI 區塊 - 重新設計 */}
          <Box w="full" maxW="5xl" mx="auto">
            <VStack spacing={16} textAlign="center" p={{ base: 8, md: 12 }}>
              {/* 主標題 */}
              <Heading
                as="h2"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                color={highlightColor}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                關於 ZanvoAI
              </Heading>

              {/* 副標題 */}
              <Text
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                color={subTitleColor}
                fontWeight="medium"
                lineHeight="tall"
                maxW="4xl"
                mx="auto"
              >
                一個專注於將創意快速轉化為現實的 AI 創作品牌
              </Text>

              {/* 核心信念 - 重點突出 */}
              <Box maxW="4xl" mx="auto">
                <Text
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  color={emphasisColor}
                  fontWeight="bold"
                  lineHeight="tall"
                  letterSpacing="wide"
                >
                  ZanvoAI 誕生於一個簡單的信念：
                  <br />
                  每個好想法都值得被實現。
                </Text>
              </Box>

              {/* 內容段落 */}
              <VStack spacing={8} maxW="4xl" mx="auto">
                <Text
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  color={textColor}
                  lineHeight="tall"
                  fontWeight="normal"
                >
                  我們發現許多專業工作者都有很棒的創意，
                  <br />
                  但往往因為技術門檻而讓好點子就這樣消逝。
                </Text>

                <Text
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  color={textColor}
                  lineHeight="tall"
                  fontWeight="normal"
                >
                  因此誕生了 ZanvoAI，我們運用 AI 技術快速開發實用工具，
                  <br />
                  幫助更多人將腦中的想法變成現實中的解決方案。
                </Text>

                <Box pt={4}>
                  <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    color={useColorModeValue('gray.500', 'gray.400')}
                    lineHeight="tall"
                    fontStyle="italic"
                    fontWeight="light"
                  >
                    ZanvoAI 是一個專注於快速原型開發的 AI 創作品牌，
                    <br />
                    持續探索 AI 技術與商業應用的可能性。
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </Box>

          {/* 分隔線 */}
          <Divider 
            maxW="300px" 
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            borderWidth="2px"
          />

          {/* 關於創辦人區塊 - 左右排列 */}
          <Grid 
            templateColumns={{ base: '1fr', lg: '1fr 300px' }} 
            gap={{ base: 8, lg: 16 }}
            alignItems="center"
            w="full"
            maxW="5xl"
            mx="auto"
          >
            {/* 左側：內容 */}
            <GridItem>
              <VStack spacing={8} align={{ base: 'center', lg: 'start' }} textAlign={{ base: 'center', lg: 'left' }}>
                <Heading
                  as="h3"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color={highlightColor}
                  lineHeight="shorter"
                >
                  關於創辦人
                </Heading>

                <Text
                  fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                  color={textColor}
                  lineHeight="tall"
                  maxW={{ base: '3xl', lg: 'none' }}
                >
                  一名長期致力於新創產品與技術實作的產品經理，正在用 AI 強化自己的職涯輸出力。
                  我相信，每個有才華的人，都值得一套更好的表達工具。
                </Text>

                {/* Email 聯絡 + 社群連結 */}
                <VStack spacing={4} align={{ base: 'center', lg: 'start' }}>
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="medium"
                  >
                    聯絡資訊
                  </Text>
                  <HStack 
                    spacing={{ base: 4, md: 8 }}
                    flexDirection={{ base: 'column', sm: 'row' }}
                    align="center"
                  >
                    
                    {/* Email */}
                    <HStack spacing={2}>
                      <Icon as={FiMail} color={linkColor} boxSize={5} />
                      <Link
                        href="mailto:ouhsiu1993@gmail.com"
                        fontSize={{ base: 'md', md: 'lg' }}
                        color={emphasisColor}
                        fontWeight="semibold"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'blue.600'
                        }}
                        transition="all 0.2s"
                      >
                        ouhsiu1993@gmail.com
                      </Link>
                    </HStack>

                    {/* 社群連結 */}
                    <HStack spacing={4}>
                      <Link 
                        href="https://www.linkedin.com/in/hsiu-ou-a24a4021b/" 
                        isExternal
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        bg={useColorModeValue('gray.100', 'gray.700')}
                        color={linkColor}
                        _hover={{ 
                          bg: useColorModeValue('blue.50', 'blue.900'),
                          color: 'blue.600',
                          transform: 'translateY(-2px)'
                        }}
                        transition="all 0.3s"
                      >
                        <Icon as={FiLinkedin} boxSize={5} />
                      </Link>
                      
                      <Link 
                        href="https://github.com/ouhsiu1993" 
                        isExternal
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        bg={useColorModeValue('gray.100', 'gray.700')}
                        color={linkColor}
                        _hover={{ 
                          bg: useColorModeValue('blue.50', 'blue.900'),
                          color: 'blue.600',
                          transform: 'translateY(-2px)'
                        }}
                        transition="all 0.3s"
                      >
                        <Icon as={FiGithub} boxSize={5} />
                      </Link>
                      
                      <Link 
                        href="https://reurl.cc/j9rXzn" 
                        isExternal
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        bg={useColorModeValue('gray.100', 'gray.700')}
                        color={linkColor}
                        _hover={{ 
                          bg: useColorModeValue('blue.50', 'blue.900'),
                          color: 'blue.600',
                          transform: 'translateY(-2px)'
                        }}
                        transition="all 0.3s"
                      >
                        <Icon as={FiFileText} boxSize={5} />
                      </Link>
                    </HStack>
                  </HStack>
                </VStack>
              </VStack>
            </GridItem>

            {/* 右側：頭像 */}
            <GridItem display={{ base: 'none', lg: 'block' }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  w="140px"
                  h="140px"
                  borderRadius="full"
                  overflow="hidden"
                  boxShadow="2xl"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: '3xl'
                  }}
                >
                  <Image
                    src="/ODI Black Ghibli.png"
                    alt="創辦人 ODI"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    fallback={
                      <Box
                        w="100%"
                        h="100%"
                        bg="gradient.500"
                        bgGradient="linear(to-br, blue.400, purple.500)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontSize="2xl"
                        fontWeight="bold"
                      >
                        ODI
                      </Box>
                    }
                  />
                </Box>
              </Box>
            </GridItem>
          </Grid>

        </VStack>
      </Container>
    </Box>
  );
};

export default About;