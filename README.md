# ZanvoAI Portfolio

一個使用 React 和 Chakra UI 構建的一頁式作品集網站，展示各種專案的卡片佈局，支援深淺色模式切換和 MongoDB 資料庫連接。

## 專案結構

```
zanvoai-portfolio/
├── public/                  # 靜態資源
│   ├── index.html
│   └── ...
├── src/
│   ├── components/          # React 組件
│   │   ├── Header.js        # 頁頭組件 (含深淺色模式切換)
│   │   ├── Footer.js        # 頁尾組件
│   │   ├── ProjectCard.js   # 專案卡片組件
│   │   └── ProjectGrid.js   # 專案卡片集合組件 (從 API 獲取資料)
│   ├── api/
│   │   ├── projectApi.js    # API 服務
│   │   └── db.js            # 資料庫連接 (未啟用)
│   ├── data/
│   │   └── projects.js      # # ZanvoAI Portfolio

一個使用 React 和 Chakra UI 構建的一頁式作品集網站，展示各種專案的卡片佈局，支援深淺色模式切換和 MongoDB 資料庫連接。

## 專案結構

```
zanvoai-portfolio/
├── public/                  # 靜態資源
│   ├── index.html
│   └── ...
├── src/
│   ├── components/          # React 組件
│   │   ├── Header.js        # 頁頭組件 (含深淺色模式切換)
│   │   ├── Footer.js        # 頁尾組件
│   │   ├── ProjectCard.js   # 專案卡片組件
│   │   └── ProjectGrid.js   # 專案卡片集合組件 (從 API 獲取資料)
│   ├── api/
│   │   ├── projectApi.js    # API 服務
│   │   └── db.js            # 資料庫連接 (未啟用)
│   ├── data/
│   │   └── projects.js      # 本地靜態資料 (作為備用)
│   ├── assets/
│   │   └── ...              # 圖片和其他資源
│   ├── App.js               # 應用程式主組件
│   ├── index.js             # 入口文件
│   ├── theme.js             # Chakra UI 主題設定 (含深淺色模式配置)
│   └── index.css            # 全局CSS樣式
├── server/                  # 後端 API 服務
│   ├── controllers/         # 控制器
│   │   └── projectController.js
│   ├── models/              # 資料模型
│   │   └── Project.js
│   ├── routes/              # API 路由
│   │   └── projectRoutes.js
│   ├── server.js            # 伺服器入口
│   ├── importData.js        # 資料導入腳本
│   └── .env                 # 後端環境變數
├── .env                     # 前端環境變數
└── package.json             # 專案依賴管理
```

## 特色功能

- **MongoDB 資料庫連接**：使用 MongoDB Atlas 雲端資料庫儲存專案資料
- **RESTful API**：完整的後端 API 支援資料的 CRUD 操作
- **深淺色模式切換**：支援系統偏好和手動切換
- **響應式設計**：自適應不同螢幕大小
- **現代化 UI**：使用 Chakra UI 實現現代簡潔界面
- **卡片點擊動畫**：提供流暢的用戶體驗

## 如何運行

### 前端

1. 確保已安裝 Node.js (建議 14.x 或更高版本)

2. 安裝依賴:
   ```bash
   npm install
   ```

3. 啟動開發服務器:
   ```bash
   npm start
   ```

4. 打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 後端

1. 進入 server 目錄:
   ```bash
   cd server
   ```

2. 安裝依賴:
   ```bash
   npm install
   ```

3. 導入初始資料 (可選):
   ```bash
   node importData.js
   ```

4. 啟動後端服務器:
   ```bash
   npm run dev
   ```

5. 後端 API 將在 [http://localhost:3001](http://localhost:3001) 運行

## 環境變數設定

### 前端 (.env)

```
REACT_APP_API_URL=http://localhost:3001
```

### 後端 (server/.env)

```
PORT=3001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

## API 端點

| 方法   | 端點                | 描述           |
|--------|-------------------|----------------|
| GET    | /api/projects     | 獲取所有專案     |
| GET    | /api/projects/:id | 獲取單個專案     |
| POST   | /api/projects     | 創建新專案       |
| PUT    | /api/projects/:id | 更新專案         |
| DELETE | /api/projects/:id | 刪除專案         |

## 部署

### 前端

建立生產版本:
```bash
npm run build
```

生成的靜態文件將位於 `build/` 目錄中，可以部署到任何靜態網頁託管服務。

### 後端

後端可以部署到 Heroku、Vercel、Digital Ocean 等支援 Node.js 的平台。記得設定環境變數。

## 擴展建議

1. 添加管理員面板以管理專案
2. 實現圖片上傳功能
3. 添加專案詳情頁面
4. 添加用戶身份驗證和授權
5. 添加評論或點讚功能