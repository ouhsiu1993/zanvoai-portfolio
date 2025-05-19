import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, tags, projectUrl } = project;
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const tagBg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  
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
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-8px)',
          shadow: 'lg',
          borderColor: 'blue.500',
        }}
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box position="relative" overflow="hidden" paddingTop="56.25%"> {/* 16:9 Aspect Ratio */}
          <Image
            src={imageUrl || 'https://via.placeholder.com/800x450?text=ZanvoAI+Project'}
            alt={title}
            objectFit="cover"
            position="absolute"
            top={0}
            width="100%"
            height="100%"
          />
        </Box>
        
        <Flex direction="column" p={5} flex={1}>
          <Heading as="h3" size="md" mb={2}>
            {title}
          </Heading>
          
          <Text mb={4} color={textColor} flex={1}>
            {description}
          </Text>
          
          <Flex wrap="wrap" gap={2} mb={4}>
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                colorScheme="blue"
                bg={tagBg}
                color="blue.500"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="xs"
                fontWeight="medium"
              >
                {tag}
              </Badge>
            ))}
          </Flex>
          
          <Flex align="center" justifyContent="flex-end" color="blue.500">
            <FiExternalLink />
            <Text ml={1} fontSize="sm" fontWeight="medium">
              查看專案
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProjectCard;
