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
        w="280px" 
        h="280px" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        fontSize="6xl"
        opacity={isActive ? 1 : 0.4}
        transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {fallbackEmoji}
      </Box>
    );
  }

  return (
    <Box 
      w="280px" 
      h="280px" 
      opacity={isActive ? 1 : 0.4} 
      transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
    >
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
      const cardCenter = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;
      const isVisible = Math.abs(cardCenter - windowCenter) < window.innerHeight * 0.2;
      
      setIsActive(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 處理按鈕點擊 - 使用與其他組件一致的滾動邏輯
  const handleActionClick = (link) => {
    if (link.startsWith('#')) {
      // 移除 # 符號獲取真實的 section ID
      const sectionId = link.substring(1);
      
      // 使用與 HeroSection 和 Footer 一致的滾動邏輯
      const scrollToSection = (targetId, offset = 100) => {
        let element = document.getElementById(targetId);
        
        // 備用查找方式
        if (!element && targetId === 'projects-section') {
          element = document.querySelector('[data-scroll-section="projects"]');
        }
        
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          console.warn(`找不到元素: ${targetId}`);
        }
      };
      
      // 執行滾動，使用適當的偏移量
      scrollToSection(sectionId, 100);
    } else {
      window.open(link, '_blank');
    }
  };

  const isEven = index % 2 === 0;

  return (
    <Grid
      ref={cardRef}
      templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      gap={{ base: 8, md: 12, lg: 16 }}
      alignItems="center"
      w="full"
      opacity={isActive ? 1 : 0.4}
      transform={isActive ? 'translateY(0)' : 'translateY(20px)'}
      transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      mb={{ base: 20, md: 32 }}
    >
      {/* 文字內容 */}
      <GridItem order={{ base: 1, lg: isEven ? 1 : 2 }}>
        <VStack align="start" spacing={{ base: 6, md: 8 }}>
          {/* 標籤 - SaaS 風格優化 */}
          <Box
            px={4}
            py={2}
            bg={isActive ? 'blue.100' : 'gray.100'}
            color={isActive ? 'blue.600' : 'gray.500'}
            borderRadius="full"
            fontSize="sm"
            fontWeight="medium"
            transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            letterSpacing="wide"
            textTransform="uppercase"
            _dark={{
              bg: isActive ? 'blue.900' : 'gray.700',
              color: isActive ? 'blue.300' : 'gray.400'
            }}
          >
            {principle.tag}
          </Box>
          
          {/* 標題 - 強化層次 */}
          <Heading
            as="h3"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight="bold"
            color={isActive ? 'blue.600' : 'gray.500'}
            transition="color 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            lineHeight="1.2"
            letterSpacing="tight"
          >
            {principle.title}
          </Heading>
          
          {/* 描述文字 - 優化行距 */}
          <Text 
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.8"
            color={textColor}
            whiteSpace="pre-line"
            fontWeight="400"
          >
            {principle.description}
          </Text>
          
          {/* 行動按鈕 - SaaS 風格 */}
          <Button
            colorScheme="blue"
            variant={isActive ? 'solid' : 'outline'}
            size="lg"
            onClick={() => handleActionClick(principle.action.link)}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            fontWeight="semibold"
            borderRadius="lg"
            px={6}
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
          p={{ base: 6, md: 8 }}
          borderWidth="1px"
          borderColor={isActive ? 'blue.200' : borderColor}
          transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
          boxShadow={isActive ? 'xl' : 'md'}
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{
            boxShadow: '2xl',
            borderColor: 'blue.300',
          }}
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

  // 品牌原則數據
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
      py={0}  // 由外層 App.js 控制間距
    >
      <Container maxW="container.xl">
        {/* 區塊標題 - 優化間距和層次 */}
        <VStack spacing={{ base: 4, md: 6 }} textAlign="center" mb={{ base: 16, md: 24 }}>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="blue.500"
            fontWeight="medium"
            letterSpacing="wider"
            textTransform="uppercase"
            lineHeight="1.2"
          >
            在 ZanvoAI
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
            fontWeight="bold"
            lineHeight="1.2"
            letterSpacing="tight"
            maxW="4xl"
          >
            我們這樣思考與行動
          </Heading>
        </VStack>

        {/* 4張獨立卡片 - 優化間距 */}
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