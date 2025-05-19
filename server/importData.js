const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

// 載入環境變數
dotenv.config();

// 初始資料
const initialProjects = [
  {
    title: 'AI 語音助手',
    description: '基於先進自然語言處理技術的智能語音助手，支援多語言對話與任務處理。',
    imageUrl: 'https://via.placeholder.com/800x450?text=AI+Voice+Assistant',
    tags: ['React', 'Node.js', 'TensorFlow', 'WebSpeech API'],
    projectUrl: 'https://example.com/ai-assistant',
    featured: true,
    order: 1,
  },
  {
    title: '智慧數據分析平台',
    description: '企業級數據分析平台，提供即時視覺化報表與預測分析功能。',
    imageUrl: 'https://via.placeholder.com/800x450?text=Data+Analytics+Platform',
    tags: ['React', 'Python', 'D3.js', 'MongoDB'],
    projectUrl: 'https://example.com/data-analytics',
    featured: true,
    order: 2,
  },
  {
    title: '區塊鏈資產追蹤系統',
    description: '安全可靠的區塊鏈技術應用，用於追蹤與管理數位資產。',
    imageUrl: 'https://via.placeholder.com/800x450?text=Blockchain+Asset+Tracker',
    tags: ['Solidity', 'React', 'Web3.js', 'Ethereum'],
    projectUrl: 'https://example.com/blockchain-tracker',
    featured: false,
    order: 3,
  },
  {
    title: '智慧城市監控儀表板',
    description: '整合多種城市資源數據的實時監控平台，協助城市管理與規劃。',
    imageUrl: 'https://via.placeholder.com/800x450?text=Smart+City+Dashboard',
    tags: ['React', 'Node.js', 'Socket.io', 'GraphQL'],
    projectUrl: 'https://example.com/smart-city',
    featured: false,
    order: 4,
  },
  {
    title: '醫療影像 AI 診斷輔助',
    description: '應用深度學習技術協助醫療影像分析，提高診斷準確率。',
    imageUrl: 'https://via.placeholder.com/800x450?text=Medical+AI+Imaging',
    tags: ['Python', 'TensorFlow', 'React', 'Flask'],
    projectUrl: 'https://example.com/medical-ai',
    featured: false,
    order: 5,
  },
  {
    title: '智能家居控制中心',
    description: '整合各種智能家居設備的中央控制系統，支援語音及遠端操作。',
    imageUrl: 'https://via.placeholder.com/800x450?text=Smart+Home+Hub',
    tags: ['React Native', 'Node.js', 'MQTT', 'Firebase'],
    projectUrl: 'https://example.com/smart-home',
    featured: false,
    order: 6,
  }
];

// 連接數據庫並導入資料
const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB 連接成功');

    // 清空現有資料
    await Project.deleteMany({});
    console.log('已清空舊資料');

    // 導入新資料
    await Project.insertMany(initialProjects);
    console.log('資料導入成功');

    process.exit(0);
  } catch (error) {
    console.error('導入資料出錯:', error.message);
    process.exit(1);
  }
};

importData();