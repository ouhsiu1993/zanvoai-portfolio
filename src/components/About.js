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
        <VStack spacing={{ base: 20, md: 32 }}> {/* 主區塊間保持較大間距，建立明確層次 */}

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

          {/* 分隔線 - 優化設計符合 SaaS 標準 */}
          <Box position="relative" w="full" maxW="400px">
            <Divider 
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              borderWidth="1px"
              opacity={0.6}
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="4px"
              h="4px"
              bg={useColorModeValue('blue.400', 'blue.500')}
              borderRadius="full"
            />
          </Box>

          {/* 關於創辦人區塊 - 修復桌面版佈局 */}
          <Box w="full" maxW="6xl" mx="auto" mt={{ base: 10, md: 20 }}>
            {/* 手機版和平板版 - 垂直排列 */}
            <VStack 
              spacing={8} 
              display={{ base: 'flex', lg: 'none' }}
              textAlign="center"
            >
              <Heading
                as="h3"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="bold"
                color={highlightColor}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                關於創辦人
              </Heading>

              {/* 手機版頭像 */}
              <Box
                w="120px"
                h="120px"
                borderRadius="full"
                overflow="hidden"
                boxShadow="xl"
                mx="auto"
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
                      bgGradient="linear(to-br, blue.400, purple.500)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontSize="xl"
                      fontWeight="bold"
                    >
                      ODI
                    </Box>
                  }
                />
              </Box>

              <VStack spacing={6} maxW="3xl">
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={textColor}
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  {`一名長期致力於新創產品與技術實作的產品經理，
正在用 AI 強化自己的職涯輸出力。`}
                </Text>

                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  color={useColorModeValue('gray.500', 'gray.400')}
                  lineHeight="tall"
                  fontStyle="italic"
                  fontWeight="light"
                  whiteSpace="pre-line"
                >
                  {`我相信，每個有才華的人，都值得一套更好的表達工具。`}
                </Text>
              </VStack>

              {/* 手機版聯絡資訊 */}
              <VStack spacing={4}>
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
              </VStack>
            </VStack>

            {/* 桌面版 - 左右排列 */}
            <Grid 
              templateColumns="1fr 200px" 
              gap={12}
              alignItems="center"
              display={{ base: 'none', lg: 'grid' }}
            >
              {/* 左側：內容 */}
              <GridItem>
                <VStack spacing={8} align="start" textAlign="left">
                  <Heading
                    as="h3"
                    fontSize="4xl"
                    fontWeight="bold"
                    color={highlightColor}
                    lineHeight="shorter"
                    letterSpacing="tight"
                  >
                    關於創辦人
                  </Heading>

                  <VStack spacing={6} align="start">
                    <Text
                      fontSize="xl"
                      color={textColor}
                      lineHeight="1.8"
                      whiteSpace="pre-line"
                    >
                      {`一名長期致力於新創產品與技術實作的產品經理，正在用 AI 強化自己的職涯輸出力。`}
                    </Text>

                    <Text
                      fontSize="lg"
                      color={useColorModeValue('gray.500', 'gray.400')}
                      lineHeight="tall"
                      fontStyle="italic"
                      fontWeight="light"
                      whiteSpace="pre-line"
                    >
                      {`我相信，每個有才華的人，都值得一套更好的表達工具。`}
                    </Text>
                  </VStack>

                  {/* 桌面版聯絡資訊 */}
                  <HStack spacing={8} align="center" pt={4}>
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
              <GridItem>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    w="160px"
                    h="160px"
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
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};

export default About;