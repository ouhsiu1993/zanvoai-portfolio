// src/components/StatsAndFeatures.js
import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const StatsAndFeatures = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  // 統計數據
  const stats = [
    { number: '4+', label: '活躍專案' },
    { number: '2h→5min', label: '效率提升' },
    { number: '100%', label: 'AI 輔助開發' }
  ];

  // 特色說明
  const features = [
    { 
      icon: '🎯', 
      title: '專注解決真實問題', 
      desc: '從股票追蹤到認證系統，每個專案都源於實際需求', 
      color: 'blue.500' 
    },
    { 
      icon: '🤖', 
      title: 'AI 加速開發', 
      desc: '運用 AI 工具提升開發效率，縮短從想法到產品的距離', 
      color: 'purple.500' 
    },
    { 
      icon: '🚀', 
      title: '從 0 到 1 實現', 
      desc: '將概念轉化為可用的產品，專注於 MVP 快速驗證', 
      color: 'teal.500' 
    },
  ];

  return (
    <Box bg={bgColor} py={{ base: 16, md: 24 }}>
      <Container maxW="container.xl">
        {/* 區塊標題 */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading
            as="h2"
            size="xl"
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
            fontWeight="bold"
          >
            專案成果與核心優勢
          </Heading>
          <Text
            fontSize="lg"
            color={textColor}
            maxW="2xl"
          >
            用數據說話，以實力證明價值
          </Text>
        </VStack>

        <Grid templateColumns={{ base: '1fr', lg: '1fr 2fr' }} gap={12} alignItems="start">
          {/* 左側：統計數據 */}
          <GridItem>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={8}
              boxShadow="xl"
              borderWidth="1px"
              borderColor={borderColor}
              w="full"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                shadow: '2xl',
              }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={8} textAlign="center">
                專案成果
              </Text>
              <VStack spacing={8}>
                {stats.map((stat, index) => (
                  <VStack key={index} spacing={2}>
                    <Text 
                      fontSize="4xl" 
                      fontWeight="bold" 
                      bgGradient="linear(to-r, blue.500, purple.500)"
                      bgClip="text"
                    >
                      {stat.number}
                    </Text>
                    <Text fontSize="lg" color={textColor} textAlign="center" fontWeight="medium">
                      {stat.label}
                    </Text>
                  </VStack>
                ))}
              </VStack>
            </Box>
          </GridItem>

          {/* 右側：特色說明 */}
          <GridItem>
            <VStack spacing={6} w="full">
              {features.map((feature, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  p={8}
                  borderLeft="6px"
                  borderLeftColor={feature.color}
                  w="full"
                  boxShadow="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateX(8px)',
                    shadow: 'xl',
                  }}
                >
                  <VStack align="start" spacing={4}>
                    <Text fontSize="3xl">
                      {feature.icon}
                    </Text>
                    <Text fontSize="xl" fontWeight="bold">
                      {feature.title}
                    </Text>
                    <Text fontSize="lg" color={textColor} lineHeight="tall">
                      {feature.desc}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsAndFeatures;