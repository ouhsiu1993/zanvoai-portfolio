import React, { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Heading,
  Text,
  Box,
  Spinner,
  Center
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { fetchAllProjects } from '../api/projectApi';

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchAllProjects();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <Box as="section">
      <Box textAlign="center" mb={10}>
        <Heading
          as="h2"
          size="2xl"
          mb={4}
          bgGradient="linear(to-r, brand.500, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          作品集
        </Heading>
        <Text
          fontSize="xl"
          maxW="container.md"
          mx="auto"
          color="gray.600"
          _dark={{ color: 'gray.300' }}
        >
          探索 ZanvoAI 的專案作品，點擊卡片以查看更多詳情
        </Text>
      </Box>

      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ProjectGrid;
