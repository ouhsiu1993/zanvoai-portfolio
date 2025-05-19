// 注意：這個模組目前是未使用的，但為將來連接 MongoDB 做準備

import mongoose from 'mongoose';

// 連接 MongoDB 資料庫
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/zanvoai-portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB 已連接: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB 連接錯誤: ${error.message}`);
    process.exit(1);
  }
};

// 定義專案 Schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    default: [],
  },
  projectUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 如果在 MongoDB 連接後使用，將取消註解以下行
// const Project = mongoose.model('Project', projectSchema);

export { connectDB /*, Project */ };