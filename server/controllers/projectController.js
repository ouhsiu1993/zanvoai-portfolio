const Project = require('../models/Project');

// 獲取所有專案
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ order: 1, createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: '獲取專案列表失敗', error: error.message });
  }
};

// 獲取單個專案
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: '找不到該專案' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: '獲取專案詳情失敗', error: error.message });
  }
};

// 創建新專案
exports.createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: '創建專案失敗', error: error.message });
  }
};

// 更新專案
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: '找不到該專案' });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: '更新專案失敗', error: error.message });
  }
};

// 刪除專案
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: '找不到該專案' });
    }
    res.status(200).json({ message: '專案已成功刪除' });
  } catch (error) {
    res.status(500).json({ message: '刪除專案失敗', error: error.message });
  }
};