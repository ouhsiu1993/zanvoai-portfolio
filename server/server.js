const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// 載入環境變數
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// 中間件
app.use(cors());
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

// 根路由
app.get('/', (req, res) => {
  res.json({ message: 'ZanvoAI Portfolio API' });
});

// 啟動服務器
app.listen(PORT, () => {
  console.log(`服務器運行在 http://localhost:${PORT}`);
});