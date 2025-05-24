import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Heading,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiExternalLink, FiFileText } from 'react-icons/fi';

// 標籤顏色映射表 - 根據標籤名稱選擇顏色
const tagColorSchemes = {
  '0 to 1 Product': 'blue',
  'Saas': 'green',
  'AI Coding': 'yellow',
  'InfoSec': 'orange',
  'AI Agent': 'pink',
  'Prompt Engineering': 'green',
  'MarTech': 'orange',
  'Tracking Code': 'purple',
  'AdTech': 'teal',
  'FinTech': 'purple',
};

// 根據標籤名稱判斷用哪種顏色，若無對應項則使用預設顏色
const getTagColorScheme = (tag) => {
  return tagColorSchemes[tag] || 'gray';
};

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, tags, projectUrl, notionUrl } = project;
  
  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.900', 'white');
  
  // 防止按鈕點擊事件冒泡到卡片
  const handleButtonClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank');
  };
  
  return (
    <Link 
      href={projectUrl} 
      isExternal 
      _hover={{ textDecoration: 'none' }}
      display="block"
    >
      <Box
        bg={cardBg}
        borderWidth="1px"
        borderColor={cardBorder}
        borderRadius="xl"
        overflow="hidden"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          transform: 'translateY(-4px)',
          shadow: '2xl',
          borderColor: 'blue.300',
        }}
        height="100%"
        display="flex"
        flexDirection="column"
        position="relative"
        boxShadow="sm"
      >
        {/* 圖片區域 - 優化比例和樣式 */}
        <Box position="relative" overflow="hidden" paddingTop="56.25%">
          <Image
            src={imageUrl || 'https://via.placeholder.com/800x450?text=ZanvoAI+Project'}
            alt={title}
            objectFit="cover"
            position="absolute"
            top={0}
            width="100%"
            height="100%"
            transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </Box>
        
        {/* 內容區域 - 優化間距和層次 */}
        <Flex direction="column" p={{ base: 5, md: 6 }} flex={1} position="relative">
          {/* 標題 - 強化層次 */}
          <Heading 
            as="h3" 
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="semibold" 
            color={headingColor}
            mb={{ base: 3, md: 4 }}
            lineHeight="1.3"
            letterSpacing="tight"
          >
            {title}
          </Heading>
          
          {/* 描述 - 優化行距 */}
          <Text 
            mb={{ base: 4, md: 5 }}
            color={textColor} 
            flex={1}
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight="1.6"
            fontWeight="400"
          >
            {description}
          </Text>
          
          {/* 標籤區域 - 優化間距 */}
          <Flex wrap="wrap" gap={{ base: 2, md: 3 }} mb={{ base: 5, md: 6 }}>
            {tags?.map((tag, index) => {
              const colorScheme = getTagColorScheme(tag);
              return (
                <Badge
                  key={index}
                  colorScheme={colorScheme}
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="medium"
                  variant="subtle"
                  textTransform="none"
                >
                  {tag}
                </Badge>
              );
            })}
          </Flex>
          
          {/* 底部按鈕區域 - SaaS 風格優化 */}
          <Flex justify="space-between" align="center" pt={2}>
            {/* 左下角：專案介紹按鈕 */}
            {notionUrl && (
              <Button
                size="sm"
                variant="ghost"
                colorScheme="purple"
                leftIcon={<FiFileText />}
                onClick={(e) => handleButtonClick(e, notionUrl)}
                fontSize="sm"
                fontWeight="medium"
                px={3}
                _hover={{
                  bg: 'purple.50',
                  _dark: { bg: 'purple.900' },
                  transform: 'translateY(-1px)'
                }}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                查看介紹
              </Button>
            )}
            
            {/* 右下角：查看專案連結 */}
            <Flex 
              align="center" 
              color="blue.500" 
              ml="auto"
              fontSize="sm"
              fontWeight="medium"
              _hover={{
                color: 'blue.600',
                transform: 'translateX(2px)'
              }}
              transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Text mr={2}>免費體驗</Text>
              <FiExternalLink />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProjectCard;