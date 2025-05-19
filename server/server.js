const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// 載入環境變數
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS 設置 - 允許前端網域訪問
app.use(cors({
  // 在生產環境中，您可能想要限制哪些網域可以訪問您的 API
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://zanvoai-portfolio.onrender.com', 'https://your-custom-domain.com', 'https://www.your-custom-domain.com'] 
    : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));

// 資料庫連接
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB 連接成功');
  })
  .catch((err) => {
    console.error('MongoDB 連接失敗:', err.message);
  });

// 路由
const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

// 根路由 - 健康檢查
app.get('/', (req, res) => {
  res.json({ 
    message: 'ZanvoAI Portfolio API',
    status: 'running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// 處理 404 錯誤
app.use((req, res) => {
  res.status(404).json({ message: '找不到該路由' });
});

// 全局錯誤處理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: '伺服器錯誤',
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// 啟動服務器
app.listen(PORT, () => {
  console.log(`服務器運行在 http://localhost:${PORT}`);
});