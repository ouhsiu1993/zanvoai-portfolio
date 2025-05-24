import React, { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Heading,
  Text,
  Box,
  Spinner,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { fetchAllProjects } from '../api/projectApi';
import fallbackProjects from '../data/projects'; // 備用靜態資料

const CACHE_KEY = 'zanvoai_projects_cache';
const CACHE_DURATION = 10 * 60 * 1000; // 10分鐘快取

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  // 從 localStorage 獲取快取資料
  const getCachedProjects = () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const now = new Date().getTime();
        
        // 檢查快取是否仍然有效
        if (now - timestamp < CACHE_DURATION) {
          return data;
        }
      }
    } catch (err) {
      console.warn('無法讀取快取資料:', err);
    }
    return null;
  };

  // 儲存資料到 localStorage
  const setCachedProjects = (data) => {
    try {
      const cacheData = {
        data,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (err) {
      console.warn('無法儲存快取資料:', err);
    }
  };

  useEffect(() => {
    const loadProjects = async () => {
      // 先檢查快取
      const cachedProjects = getCachedProjects();
      if (cachedProjects && cachedProjects.length > 0) {
        setProjects(cachedProjects);
        setLoading(false);
        
        // 背景更新：仍然嘗試從 API 獲取最新資料
        try {
          const freshData = await fetchAllProjects();
          if (freshData && freshData.length > 0) {
            setProjects(freshData);
            setCachedProjects(freshData);
          }
        } catch (err) {
          console.log('背景更新失敗，使用快取資料');
        }
        return;
      }

      // 沒有快取時的載入流程
      try {
        // 先載入備用資料以快速顯示內容
        if (fallbackProjects && fallbackProjects.length > 0) {
          setProjects(fallbackProjects);
          setLoading(false);
          setUsingFallback(true);
        }

        // 然後嘗試從 API 獲取最新資料
        const data = await fetchAllProjects();
        if (data && data.length > 0) {
          setProjects(data);
          setCachedProjects(data);
          setUsingFallback(false);
          setError(null);
        }
      } catch (err) {
        console.error('API 請求失敗:', err);
        setError(err.message);
        
        // 如果 API 失敗且沒有備用資料，顯示靜態資料
        if (!projects.length && fallbackProjects.length > 0) {
          setProjects(fallbackProjects);
          setUsingFallback(true);
        }
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // 重試函數
  const handleRetry = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchAllProjects();
      if (data && data.length > 0) {
        setProjects(data);
        setCachedProjects(data);
        setUsingFallback(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box as="section" id="projects-section">
      <Box textAlign="center" mb={10}>
        <Heading
          as="h2"
          size="2xl"
          mb={4}
          bgGradient="linear(to-r, blue.500, purple.500)"
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
          探索 ZanvoAI 的實現成果，點擊卡片開始試玩
        </Text>
        <Text
          fontSize="md"
          maxW="container.md"
          mx="auto"
          mt={2}
          color="gray.500"
          _dark={{ color: 'gray.400' }}
        >
          免費服務有冷啟動時間，還請耐心等候
        </Text>
      </Box>

      {/* 錯誤提示 */}
      {error && !usingFallback && (
        <Alert status="warning" mb={6} borderRadius="md">
          <AlertIcon />
          <Box>
            <AlertTitle>API 連接問題</AlertTitle>
            <AlertDescription>
              無法從伺服器獲取最新資料，正在使用備用資料。
              <Text 
                as="button" 
                color="blue.500" 
                textDecoration="underline"
                ml={2}
                onClick={handleRetry}
              >
                點擊重試
              </Text>
            </AlertDescription>
          </Box>
        </Alert>
      )}

      {/* 使用備用資料提示 */}
      {usingFallback && !error && (
        <Alert status="info" mb={6} borderRadius="md">
          <AlertIcon />
          <AlertDescription>
            正在載入最新資料，目前顯示的是快取內容...
          </AlertDescription>
        </Alert>
      )}

      {loading && projects.length === 0 ? (
        <Center>
          <Box textAlign="center">
            <Spinner size="xl" mb={4} />
            <Text color="gray.500">載入專案資料中...</Text>
          </Box>
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <ProjectCard key={project._id || project.id || index} project={project} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ProjectGrid;