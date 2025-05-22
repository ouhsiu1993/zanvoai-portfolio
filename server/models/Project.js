// server/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
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
      default: 'https://via.placeholder.com/800x450?text=ZanvoAI+Project',
    },
    tags: {
      type: [String],
      default: [],
    },
    projectUrl: {
      type: String,
      required: true,
    },
    notionUrl: {  // 新增欄位
      type: String,
      required: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;