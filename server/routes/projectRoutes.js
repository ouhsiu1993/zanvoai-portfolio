const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// 獲取所有專案
router.get('/', projectController.getAllProjects);

// 獲取單個專案
router.get('/:id', projectController.getProjectById);

// 創建新專案
router.post('/', projectController.createProject);

// 更新專案
router.put('/:id', projectController.updateProject);

// 刪除專案
router.delete('/:id', projectController.deleteProject);

module.exports = router;