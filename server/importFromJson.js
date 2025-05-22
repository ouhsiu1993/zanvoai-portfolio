// server/importFromJson.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Project = require('./models/Project');

// 載入環境變數
dotenv.config();

// 從 JSON 檔案導入資料
const importFromJson = async () => {
  try {
    // 連接資料庫
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB 連接成功');

    // 讀取 JSON 檔案
    const jsonPath = path.join(__dirname, 'test.projects.json');
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    const projects = JSON.parse(jsonData);

    // 轉換資料格式（移除 MongoDB 特有的格式）
    const cleanProjects = projects.map(project => ({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      tags: project.tags,
      projectUrl: project.projectUrl,
      notionUrl: project.notionUrl, // 新增的欄位
      featured: project.featured,
      order: project.order,
      // 不需要 _id, __v, createdAt, updatedAt，讓 Mongoose 自動處理
    }));

    // 清空現有資料
    await Project.deleteMany({});
    console.log('已清空舊資料');

    // 導入新資料
    const result = await Project.insertMany(cleanProjects);
    console.log(`成功導入 ${result.length} 筆專案資料`);

    // 顯示導入的資料
    console.log('\n導入的專案：');
    result.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
      console.log(`   專案連結: ${project.projectUrl}`);
      console.log(`   Notion 介紹: ${project.notionUrl}`);
      console.log('');
    });

    process.exit(0);
  } catch (error) {
    console.error('導入資料出錯:', error.message);
    process.exit(1);
  }
};

importFromJson();