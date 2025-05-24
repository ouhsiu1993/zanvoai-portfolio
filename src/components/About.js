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
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { SiNotion } from 'react-icons/si';

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

          {/* 關於 ZanvoAI 區塊 - 可控制斷行版 */}
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

              {/* 文字容器 - 居中但內容左對齊，調寬 */}
              <Box
                maxW="4xl"  // 從 4xl 調到 6xl，更寬
                mx="auto"
                w="full"
                textAlign="left"
                p={{ base: 6, md: 8, lg: 10 }}  // 增加 padding
              >
                <VStack spacing={6} align="start">
                  <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    color={textColor}
                    lineHeight="1.8"
                    fontWeight="normal"
                    whiteSpace="pre-line"
                  >
                    {`ZanvoAI 誕生於一個觀察：
許多專業工作者都有很棒的創意，但往往在實現過程中因為技術門檻而止步。`}
                  </Text>
                  
                  <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    color={textColor}
                    lineHeight="1.8"
                    fontWeight="normal"
                    whiteSpace="pre-line"
                  >
                    {`我們運用 AI 技術快速開發實用工具，專注於縮短從想法到成品的距離，
讓創意能夠更快速地被驗證和實現。`}
                  </Text>
                  
                  <Text
                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                    color={useColorModeValue('gray.500', 'gray.400')}
                    lineHeight="tall"
                    fontStyle="italic"
                    fontWeight="light"
                    pt={4}
                    whiteSpace="pre-line"
                  >
                    ZanvoAI 是一個 AI 驅動的新型創作品牌，持續追求 AI 領域的應用邊界。
                  </Text>
                </VStack>
              </Box>
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
            templateColumns={{ base: '1fr', lg: '1fr 200px' }} 
            gap={{ base: 8, lg: 6 }}
            alignItems="center"
            w="full"
            maxW="4xl"
            mx="auto"
          >
            {/* 左側：內容 */}
            <GridItem>
              <VStack spacing={6} align={{ base: 'center', lg: 'start' }} textAlign={{ base: 'center', lg: 'left' }}>
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}  // 調小標題
                  fontWeight="bold"
                  color={highlightColor}
                  lineHeight="shorter"
                >
                  關於創辦人
                </Heading>

                <VStack spacing={6} align={{ base: 'center', lg: 'start' }} textAlign={{ base: 'center', lg: 'left' }}>
                  <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    color={textColor}
                    lineHeight="1.8"
                    maxW={{ base: '3xl', lg: 'none' }}
                    whiteSpace="pre-line"
                  >
                    {`一名長期致力於新創產品與技術實作的產品經理，
正在用 AI 強化自己的職涯輸出力。`}
                  </Text>

                  <Text
                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                    color={useColorModeValue('gray.500', 'gray.400')}
                    lineHeight="tall"
                    fontStyle="italic"
                    fontWeight="light"
                    maxW={{ base: '3xl', lg: 'none' }}
                    whiteSpace="pre-line"
                  >
                    {`我相信，每個有才華的人，都值得一套更好的表達工具。`}
                  </Text>
                </VStack>

                {/* 聯絡區塊 - email和社群連結一行 */}
                <HStack 
                  spacing={6} 
                  align="center"
                  justify="space-between"
                  w="full"
                  maxW="400px"
                  flexDirection={{ base: 'column', sm: 'row' }}
                >
                  {/* Email */}
                  <HStack spacing={2}>
                    <Icon as={FiMail} color={linkColor} boxSize={4} />
                    <Link
                      href="mailto:ouhsiu1993@gmail.com"
                      fontSize="md"
                      color={emphasisColor}
                      fontWeight="medium"
                      _hover={{
                        textDecoration: 'underline',
                        color: 'blue.600'
                      }}
                      transition="all 0.2s"
                    >
                      ouhsiu1993@gmail.com
                    </Link>
                  </HStack>

                  {/* 社群連結 - 靠右 */}
                  <HStack spacing={3}>
                    <Link 
                      href="https://www.linkedin.com/in/hsiu-ou-a24a4021b/" 
                      isExternal
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="36px"
                      h="36px"
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
                      <Icon as={FiLinkedin} boxSize={4} />
                    </Link>
                    
                    <Link 
                      href="https://github.com/ouhsiu1993" 
                      isExternal
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="36px"
                      h="36px"
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
                      <Icon as={FiGithub} boxSize={4} />
                    </Link>
                    
                    <Link 
                      href="https://reurl.cc/j9rXzn" 
                      isExternal
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="36px"
                      h="36px"
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
                      <Icon as={SiNotion} boxSize={4} />
                    </Link>
                  </HStack>
                </HStack>
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