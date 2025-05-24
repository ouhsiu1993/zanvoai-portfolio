import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  Text,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';

// 導入您下載的 Lottie JSON 文件
import ideaToProductAnimation from '../assets/lotties/Animation - idea.json';
import simplificationAnimation from '../assets/lotties/Animation - simple.json';
import aiAssistantAnimation from '../assets/lotties/Animation - think.json';
import problemFocusAnimation from '../assets/lotties/Animation - robot.json';

// Lottie 動畫組件
const LottieAnimation = ({ animationData, isActive, fallbackEmoji = "🎯" }) => {
  if (!animationData) {
    return (
      <Box 
        w="300px" 
        h="300px" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        fontSize="6xl"
        opacity={isActive ? 1 : 0.4}
        transition="all 0.8s"
      >
        {fallbackEmoji}
      </Box>
    );
  }

  return (
    <Box w="300px" h="300px" opacity={isActive ? 1 : 0.4} transition="all 0.8s">
      <Lottie
        animationData={animationData}
        loop={isActive}
        autoplay={isActive}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

// 單個原則卡片組件
const PrincipleCard = ({ principle, index }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  // 每張卡片獨立的滾動監聽
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      // 更精確的觸發範圍：卡片中心點在視窗中央40%區域內才亮起
      const cardCenter = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;
      const isVisible = Math.abs(cardCenter - windowCenter) < window.innerHeight * 0.2;
      
      setIsActive(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始檢查
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 處理按鈕點擊
  const handleActionClick = (link) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(link, '_blank');
    }
  };

  const isEven = index % 2 === 0;

  return (
    <Grid
      ref={cardRef}
      templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      gap={12}
      alignItems="center"
      w="full"
      opacity={isActive ? 1 : 0.4}
      transform={isActive ? 'translateY(0)' : 'translateY(20px)'}
      transition="all 0.8s ease-out"
      mb={20}
    >
      {/* 文字內容 */}
      <GridItem order={{ base: 1, lg: isEven ? 1 : 2 }}>
        <VStack align="start" spacing={6}>
          {/* 標籤 */}
          <Box
            px={4}
            py={2}
            bg={isActive ? 'blue.100' : 'gray.100'}
            color={isActive ? 'blue.600' : 'gray.500'}
            borderRadius="full"
            fontSize="sm"
            fontWeight="medium"
            transition="all 0.8s"
            _dark={{
              bg: isActive ? 'blue.900' : 'gray.700',
              color: isActive ? 'blue.300' : 'gray.400'
            }}
          >
            {principle.tag}
          </Box>
          
          <Heading
            as="h3"
            size="xl"
            color={isActive ? 'blue.600' : 'gray.500'}
            transition="color 0.8s"
          >
            {principle.title}
          </Heading>
          
          <Text fontSize="lg" 
                lineHeight="tall" 
                color={textColor}
                whiteSpace="pre-line"
          >
            {principle.description}
          </Text>
          
          <Button
            colorScheme="blue"
            variant={isActive ? 'solid' : 'outline'}
            size="lg"
            onClick={() => handleActionClick(principle.action.link)}
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-2px)',
              shadow: 'lg',
            }}
          >
            {principle.action.text}
          </Button>
        </VStack>
      </GridItem>

      {/* 動畫內容 */}
      <GridItem order={{ base: 2, lg: isEven ? 2 : 1 }}>
        <Box
          bg={cardBg}
          borderRadius="2xl"
          p={8}
          borderWidth="1px"
          borderColor={isActive ? 'blue.200' : borderColor}
          transition="all 0.8s"
          boxShadow={isActive ? 'xl' : 'md'}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LottieAnimation
            animationData={principle.animationData}
            isActive={isActive}
            fallbackEmoji={principle.fallbackEmoji}
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

// 主組件
const BrandPrinciples = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  // 品牌原則數據 - 帶標籤的新格式
  const principles = [
    {
      tag: '創意',
      title: '每個好點子，都值得被看見',
      description: '我們相信，想法不該只停留在腦海中，每個創意，都值得一次嘗試的機會。',
      action: { text: '看看我們的創意實現', link: '#projects-section' },
      animationData: ideaToProductAnimation,
      fallbackEmoji: '💡'
    },
    {
      tag: '技術',
      title: '讓技術不再是創意的阻礙',
      description: '我們用 AI 解決困難且複雜的工作，讓你專注在更有價值的創造和決策上。',
      action: { text: '了解我們的技術能力', link: '#projects-section' },
      animationData: simplificationAnimation,
      fallbackEmoji: '🤖'
    },
    {
      tag: '實踐',
      title: '再完美的計畫都比不上實際的行動',
      description: '與其花三個月做計畫，不如花三週快速做出原型，讓市場告訴我們答案。',
      action: { text: '體驗我們的實踐成果', link: '#projects-section' },
      animationData: aiAssistantAnimation,
      fallbackEmoji: '🚀'
    },
    {
      tag: '探索',
      title: 'AI 讓實現變得更容易',
      description: '我們持續投入 AI 技術的最新應用，結合商業 x 技術 x 產品思維，\n幫助非技術人士快速驗證商業想法。',
      action: { text: '一起探索 AI 可能性', link: '#projects-section' },
      animationData: problemFocusAnimation,
      fallbackEmoji: '🔍'
    }
  ];

  return (
    <Box
      id="brand-story"
      bg={bgColor}
      py={{ base: 16, md: 24 }}
    >
      <Container maxW="container.xl">
        {/* 區塊標題 */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="blue.500"
            fontWeight="medium"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            在 ZanvoAI
          </Text>
          <Heading
            as="h2"
            size={{ base: 'xl', md: '2xl' }}
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
            fontWeight="bold"
          >
            我們這樣思考與行動
          </Heading>
        </VStack>

        {/* 4張獨立卡片 */}
        <VStack spacing={0}>
          {principles.map((principle, index) => (
            <PrincipleCard 
              key={index} 
              principle={principle} 
              index={index} 
            />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default BrandPrinciples;