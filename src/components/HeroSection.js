// src/components/HeroSection.js
import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

const HeroSection = () => {
  const canvasRef = useRef(null);
const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  
  // 通用滾動函數 - 支援多種查找方式
  const scrollToSection = (sectionId, dataSection, offset = 100) => {
    // 嘗試多種方式找到元素
    let element = document.getElementById(sectionId);
    
    if (!element && dataSection) {
      element = document.querySelector(`[data-scroll-section="${dataSection}"]`);
    }
    
    if (!element) {
      console.warn(`找不到元素: ${sectionId} 或 [data-scroll-section="${dataSection}"]`);
      return;
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // 滾動到作品區的函數
  const scrollToProjects = () => {
    scrollToSection('projects-section', 'projects', 100);
  };

  // 滾動到品牌理念的函數
  const scrollToBrandStory = () => {
    scrollToSection('brand-story', 'brand', 100);
  };

  // 粒子動畫效果
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // 設置 canvas 尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 粒子系統
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(66, 153, 225, ${this.opacity})`;
        ctx.fill();
      }
    }

    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // 動畫循環
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 繪製連接線
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();
        
        // 繪製粒子之間的連接線
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(66, 153, 225, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <Box 
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      bg={bgColor}
    >
      {/* 動態背景 Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* 漸層覆蓋層 */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(135deg, rgba(66,153,225,0.05) 0%, rgba(138,43,226,0.05) 50%, rgba(56,178,172,0.05) 100%)"
        zIndex={1}
      />

      {/* 動態漸層斑點 */}
      <Box
        position="absolute"
        top="20%"
        right="15%"
        width="400px"
        height="400px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(66,153,225,0.3) 0%, transparent 70%)"
        animation="float 6s ease-in-out infinite"
        zIndex={1}
        display={{ base: 'none', lg: 'block' }}
        sx={{
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-20px) scale(1.05)' },
          },
        }}
      />

      <Box
        position="absolute"
        bottom="15%"
        left="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(138,43,226,0.2) 0%, transparent 70%)"
        animation="float 8s ease-in-out infinite reverse"
        zIndex={1}
        display={{ base: 'none', lg: 'block' }}
        sx={{
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-15px) scale(0.95)' },
          },
        }}
      />

      {/* 主要內容 - 調整間距遵循 SaaS 標準 */}
      <Container maxW="container.lg" position="relative" zIndex={2} py={{ base: 32, md: 40 }}>
        <VStack spacing={{ base: 10, md: 12 }} textAlign="center" maxW="5xl" mx="auto">
          {/* 小字標籤 - SaaS 風格 */}
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="blue.500"
            fontWeight="medium"
            letterSpacing="wider"
            textTransform="uppercase"
            lineHeight="1.2"
          >
            AI Technology Solutions
          </Text>
          
          {/* 主標 - 加強字體層次和間距 */}
          <VStack spacing={{ base: 6, md: 8 }}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="extrabold"
              lineHeight="1.1"
              letterSpacing="tight"
              bgGradient="linear(to-r, blue.500, purple.500, teal.400)"
              bgClip="text"
              animation="gradientShift 3s ease-in-out infinite"
              sx={{
                '@keyframes gradientShift': {
                  '0%, 100%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                },
                backgroundSize: '200% 200%',
              }}
              textAlign="center"
            >
              用 AI 把想法做出來
            </Heading>
          </VStack>
          
          {/* 副標 - 優化行距和間距 */}
          <Box maxW="4xl" px={{ base: 4, md: 0 }}>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              lineHeight="1.8"
              textAlign="center"
              fontWeight="400"
            >
              將概念轉化為能運作的原型，ZanvoAI 是為專業工作者打造的 AI 產品孵化器，
              <Box as="br" display={{ base: 'none', md: 'block' }} />
              歡迎你帶著熱情，加入我們一起將靈感實現!
            </Text>
          </Box>
          
          {/* CTA 按鈕 - 優化間距和樣式 */}
          <HStack 
            spacing={{ base: 4, md: 6 }} 
            flexDirection={{ base: 'column', sm: 'row' }}
            pt={{ base: 4, md: 6 }}
          >
            <Button
              size="lg"
              colorScheme="blue"
              onClick={scrollToProjects}
              px={{ base: 6, md: 8 }}
              py={{ base: 3, md: 4 }}
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="semibold"
              _hover={{
                transform: 'translateY(-2px)',
                shadow: 'xl',
                bgGradient: 'linear(to-r, blue.500, blue.600)',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              boxShadow="lg"
              bgGradient="linear(to-r, blue.500, blue.600)"
              borderRadius="lg"
            >
              🚀 試玩作品
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              colorScheme="purple"
              px={{ base: 6, md: 8 }}
              py={{ base: 3, md: 4 }}
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="semibold"
              _hover={{
                transform: 'translateY(-2px)',
                shadow: 'lg',
                bg: 'purple.50',
                _dark: { bg: 'purple.900' },
                borderColor: 'purple.400',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              onClick={scrollToBrandStory}
              backdropFilter="blur(10px)"
              borderRadius="lg"
              borderWidth="2px"
            >
              📖 品牌理念
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;