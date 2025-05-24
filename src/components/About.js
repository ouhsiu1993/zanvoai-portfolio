// 如果您想要更有層次感的設計，可以使用這個版本
// 這個版本會為文字內容添加白色卡片背景

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

// SaaS 風格分隔線組件
const SaaSDivider = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const dotColor = useColorModeValue('blue.400', 'blue.500');
  const shadowColor = useColorModeValue('white', 'gray.900');
  
  return (
    <Box position="relative" w="full" maxW="500px" mx="auto">
      <Divider 
        borderColor={borderColor}
        borderWidth="0.5px"
        opacity={0.8}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="6px"
        h="6px"
        bg={dotColor}
        borderRadius="full"
        boxShadow="0 0 0 3px"
        boxShadowColor={shadowColor}
      />
    </Box>
  );
};

const About = () => {
const bgColor = useColorModeValue('gray.100', 'gray.900');      // 更溫和
const cardBg = useColorModeValue('gray.50', 'gray.800');       // 不刺眼的卡片
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const highlightColor = useColorModeValue('gray.900', 'white');
  const subTitleColor = useColorModeValue('blue.500', 'blue.400');
  const emphasisColor = useColorModeValue('blue.600', 'blue.400');
  const linkColor = useColorModeValue('blue.500', 'blue.300');
  
  // 預先定義社交媒體按鈕的樣式
  const socialButtonBg = useColorModeValue('gray.100', 'gray.700');
  const socialButtonHoverBg = useColorModeValue('blue.50', 'blue.900');
  const grayTextColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box 
      id="about" 
      bg={bgColor} 
      py={0}  // 由外層 App.js 控制間距
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 32, md: 48 }}>

          {/* 關於 ZanvoAI 區塊 - 添加卡片背景 */}
          <Box w="full" maxW="6xl" mx="auto">
            <VStack spacing={{ base: 16, md: 20 }} textAlign="center">
              
              {/* 主標題 */}
              <VStack spacing={{ base: 4, md: 6 }}>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  color={subTitleColor}
                  fontWeight="medium"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  lineHeight="1.2"
                >
                  About ZanvoAI
                </Text>
                
                <Heading
                  as="h2"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="bold"
                  color={highlightColor}
                  lineHeight="1.1"
                  letterSpacing="tight"
                  maxW="5xl"
                >
                  關於 ZanvoAI
                </Heading>
              </VStack>

              {/* 文字容器 - 添加卡片背景 */}
              <Box
                maxW="5xl"
                mx="auto"
                w="full"
                bg={cardBg} // 添加卡片背景
                borderRadius="2xl"
                boxShadow="sm"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                p={{ base: 8, md: 12, lg: 16 }}
              >
                <VStack spacing={{ base: 8, md: 10 }} align="start" textAlign="left">
                  <Text
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    color={textColor}
                    lineHeight="1.8"
                    fontWeight="400"
                    whiteSpace="pre-line"
                  >
                    {`ZanvoAI 誕生於一個觀察：
許多專業工作者都有很棒的創意，但往往在實現過程中因為技術門檻而止步。`}
                  </Text>
                  
                  <Text
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    color={textColor}
                    lineHeight="1.8"
                    fontWeight="400"
                    whiteSpace="pre-line"
                  >
                    {`我們運用 AI 技術快速開發實用工具，專注於縮短從想法到成品的距離，
讓創意能夠更快速地被驗證和實現。`}
                  </Text>
                  
                  <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    color={grayTextColor}
                    lineHeight="1.8"
                    fontStyle="italic"
                    fontWeight="300"
                    pt={{ base: 4, md: 6 }}
                    whiteSpace="pre-line"
                    textAlign="center"
                    w="full"
                  >
                    ZanvoAI 是一個 AI 驅動的新型創作品牌，持續追求 AI 領域的應用邊界。
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* SaaS 風格分隔線 */}
          <SaaSDivider />

          {/* 關於創辦人區塊 - 添加卡片背景 */}
          <Box w="full" maxW="6xl" mx="auto">
            {/* 手機版和平板版 - 垂直排列 */}
            <Box
              display={{ base: 'block', lg: 'none' }}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="sm"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              p={{ base: 8, md: 12 }}
            >
              <VStack spacing={{ base: 10, md: 12 }} textAlign="center">
                {/* 標題 */}
                <VStack spacing={{ base: 4, md: 6 }}>
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    color={subTitleColor}
                    fontWeight="medium"
                    letterSpacing="wider"
                    textTransform="uppercase"
                    lineHeight="1.2"
                  >
                    Founder
                  </Text>
                  
                  <Heading
                    as="h3"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color={highlightColor}
                    lineHeight="1.2"
                    letterSpacing="tight"
                  >
                    關於創辦人
                  </Heading>
                </VStack>

                {/* 手機版頭像 */}
                <Box
                  w={{ base: "120px", md: "140px" }}
                  h={{ base: "120px", md: "140px" }}
                  borderRadius="full"
                  overflow="hidden"
                  boxShadow="xl"
                  mx="auto"
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: '2xl'
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
                        fontSize="xl"
                        fontWeight="bold"
                      >
                        ODI
                      </Box>
                    }
                  />
                </Box>

                {/* 手機版內容 */}
                <VStack spacing={{ base: 8, md: 10 }} maxW="4xl">
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color={textColor}
                    lineHeight="1.8"
                    fontWeight="400"
                    whiteSpace="pre-line"
                  >
                    {`一名長期致力於新創產品與技術實作的產品經理，
正在用 AI 強化自己的職涯輸出力。`}
                  </Text>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color={grayTextColor}
                    lineHeight="1.8"
                    fontStyle="italic"
                    fontWeight="300"
                    whiteSpace="pre-line"
                  >
                    {`我相信，每個有才華的人，都值得一套更好的表達工具。`}
                  </Text>
                </VStack>

                {/* 手機版聯絡資訊 */}
                <VStack spacing={{ base: 6, md: 8 }}>
                  <VStack spacing={3}>
                    <Icon as={FiMail} color={linkColor} boxSize={5} />
                    <Link
                      href="mailto:ouhsiu1993@gmail.com"
                      fontSize={{ base: 'md', md: 'lg' }}
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
                  </VStack>

                  <HStack spacing={4}>
                    {[
                      { icon: FiLinkedin, href: "https://www.linkedin.com/in/hsiu-ou-a24a4021b/" },
                      { icon: FiGithub, href: "https://github.com/ouhsiu1993" },
                      { icon: SiNotion, href: "https://reurl.cc/j9rXzn" }
                    ].map((social, index) => (
                      <Link 
                        key={index}
                        href={social.href} 
                        isExternal
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="44px"
                        h="44px"
                        borderRadius="full"
                        bg={socialButtonBg}
                        color={linkColor}
                        _hover={{ 
                          bg: socialButtonHoverBg,
                          color: 'blue.600',
                          transform: 'translateY(-2px)'
                        }}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      >
                        <Icon as={social.icon} boxSize={5} />
                      </Link>
                    ))}
                  </HStack>
                </VStack>
              </VStack>
            </Box>

            {/* 桌面版 - 左右排列，也添加卡片背景 */}
            <Box
              display={{ base: 'none', lg: 'block' }}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="sm"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              p={{ base: 12, lg: 16 }}
            >
              <Grid 
                templateColumns="1fr 200px" 
                gap={{ base: 12, lg: 16 }}
                alignItems="center"
              >
                {/* 左側：內容 */}
                <GridItem>
                  <VStack spacing={{ base: 10, md: 12 }} align="start" textAlign="left">
                    {/* 桌面版標題 */}
                    <VStack spacing={6} align="start">
                      <Text
                        fontSize="md"
                        color={subTitleColor}
                        fontWeight="medium"
                        letterSpacing="wider"
                        textTransform="uppercase"
                        lineHeight="1.2"
                      >
                        Founder
                      </Text>
                      
                      <Heading
                        as="h3"
                        fontSize="4xl"
                        fontWeight="bold"
                        color={highlightColor}
                        lineHeight="1.2"
                        letterSpacing="tight"
                      >
                        關於創辦人
                      </Heading>
                    </VStack>

                    {/* 桌面版內容 */}
                    <VStack spacing={8} align="start">
                      <Text
                        fontSize="xl"
                        color={textColor}
                        lineHeight="1.8"
                        fontWeight="400"
                        whiteSpace="pre-line"
                      >
                        {`一名長期致力於新創產品與技術實作的產品經理，正在用 AI 強化自己的職涯輸出力。`}
                      </Text>

                      <Text
                        fontSize="lg"
                        color={grayTextColor}
                        lineHeight="1.8"
                        fontStyle="italic"
                        fontWeight="300"
                        whiteSpace="pre-line"
                      >
                        {`我相信，每個有才華的人，都值得一套更好的表達工具。`}
                      </Text>
                    </VStack>

                    {/* 桌面版聯絡資訊 */}
                    <VStack spacing={6} align="start" pt={4}>
                      <HStack spacing={3}>
                        <Icon as={FiMail} color={linkColor} boxSize={5} />
                        <Link
                          href="mailto:ouhsiu1993@gmail.com"
                          fontSize="lg"
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

                      <HStack spacing={4}>
                        {[
                          { icon: FiLinkedin, href: "https://www.linkedin.com/in/hsiu-ou-a24a4021b/" },
                          { icon: FiGithub, href: "https://github.com/ouhsiu1993" },
                          { icon: SiNotion, href: "https://reurl.cc/j9rXzn" }
                        ].map((social, index) => (
                          <Link 
                            key={index}
                            href={social.href} 
                            isExternal
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            w="44px"
                            h="44px"
                            borderRadius="full"
                            bg={socialButtonBg}
                            color={linkColor}
                            _hover={{ 
                              bg: socialButtonHoverBg,
                              color: 'blue.600',
                              transform: 'translateY(-2px)'
                            }}
                            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                          >
                            <Icon as={social.icon} boxSize={5} />
                          </Link>
                        ))}
                      </HStack>
                    </VStack>
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
                      w="180px"
                      h="180px"
                      borderRadius="full"
                      overflow="hidden"
                      boxShadow="2xl"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
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
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};

export default About;