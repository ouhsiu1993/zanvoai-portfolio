// API 服務檔案
// src/api/projectApi.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const projectApi = axios.create({
  baseURL: `${API_URL}/api/projects`,
});

// 獲取所有專案
export const fetchAllProjects = async () => {
  try {
    const response = await projectApi.get('/');
    return response.data;
  } catch (error) {
    console.error('獲取專案列表失敗:', error);
    throw error;
  }
};

// 獲取單個專案
export const fetchProjectById = async (id) => {
  try {
    const response = await projectApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`獲取專案 ${id} 失敗:`, error);
    throw error;
  }
};

// 創建專案
export const createProject = async (projectData) => {
  try {
    const response = await projectApi.post('/', projectData);
    return response.data;
  } catch (error) {
    console.error('創建專案失敗:', error);
    throw error;
  }
};

// 更新專案
export const updateProject = async (id, projectData) => {
  try {
    const response = await projectApi.put(`/${id}`, projectData);
    return response.data;
  } catch (error) {
    console.error(`更新專案 ${id} 失敗:`, error);
    throw error;
  }
};

// 刪除專案
export const deleteProject = async (id) => {
  try {
    const response = await projectApi.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`刪除專案 ${id} 失敗:`, error);
    throw error;
  }
};