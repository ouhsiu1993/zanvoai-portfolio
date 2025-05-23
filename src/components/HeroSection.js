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
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  
  // 滾動到作品區的函數
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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

  // 技能標籤
  const skills = [
    '0 to 1 Product', 'AI Agent', 'FinTech', 'SaaS Development'
  ];

  return (
    <Box 
      position="relative"
      minH="90vh"
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

      {/* 主要內容 - 現在置中顯示 */}
      <Container maxW="container.lg" position="relative" zIndex={2} py={{ base: 20, md: 32 }}>
        <VStack spacing={10} textAlign="center" maxW="4xl" mx="auto">
          {/* 小標 */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="blue.500"
            fontWeight="medium"
            letterSpacing="wide"
          >
            和我一起
          </Text>
          
          {/* 主標 */}
          <Heading
            as="h1"
            size={{ base: '2xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="shorter"
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
            whiteSpace={{ base: 'normal', md: 'nowrap' }}
          >
            用 AI 把想法做出來
          </Heading>
          
          {/* 副標 */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color={textColor}
            lineHeight="tall"
            maxW="3xl"
          >
            Hi! 我是 <Text as="span" fontWeight="bold" color="blue.500">ODI</Text>，一個熱愛技術與商業的超級 I 人。
            <br />
            <Text as="span" fontWeight="bold" color="purple.500">ZanvoAI</Text> 是我打造的個人創作品牌，專注於用 AI 幫助自己與他人「說清楚、做出來」，讓好點子有機會被做出來。
          </Text>

          {/* 技能標籤 */}
          <Flex wrap="wrap" gap={3} justifyContent="center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                colorScheme={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'teal'}
                px={4}
                py={2}
                borderRadius="full"
                fontSize="md"
                transition="all 0.3s"
                _hover={{
                  transform: 'scale(1.05)',
                  shadow: 'md',
                }}
              >
                {skill}
              </Badge>
            ))}
          </Flex>
          
          {/* CTA 按鈕 */}
          <HStack spacing={6} flexDirection={{ base: 'column', sm: 'row' }}>
            <Button
              size="xl"
              colorScheme="blue"
              onClick={scrollToProjects}
              px={12}
              py={8}
              fontSize="xl"
              _hover={{
                transform: 'translateY(-3px)',
                shadow: 'xl',
                bgGradient: 'linear(to-r, blue.500, blue.600)',
              }}
              transition="all 0.3s"
              boxShadow="lg"
              bgGradient="linear(to-r, blue.500, blue.600)"
            >
              🚀 開始試玩
            </Button>
            
            <Button
              size="xl"
              variant="outline"
              colorScheme="purple"
              px={12}
              py={8}
              fontSize="xl"
              _hover={{
                transform: 'translateY(-3px)',
                shadow: 'lg',
                bg: 'purple.50',
                _dark: { bg: 'purple.900' },
              }}
              transition="all 0.3s"
              as="a"
              href="#brand-story"
              backdropFilter="blur(10px)"
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