# ZanvoAI Portfolio API

這是 ZanvoAI Portfolio 網站的後端 API 服務器，提供專案資料的 CRUD 操作。

## 本地開發

### 安裝依賴

```bash
npm install
```

### 設定環境變數

創建 `.env` 文件並設定以下內容：

```
PORT=3001
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/portfolio
```

### 導入初始資料 (可選)

```bash
node importData.js
```

### 運行服務器

```bash
# 開發模式 (使用 nodemon 自動重啟)
npm run dev

# 生產模式
npm start
```

## Render 部署說明

此專案已配置為可以直接部署到 Render 平台。部署步驟如下：

1. 在 Render 控制台創建新的 Web Service
2. 連接包含此 server 目錄的 GitHub 倉庫
3. 設置以下配置：
   - **Name**: `zanvoai-portfolio-api` (或您喜歡的名稱)
   - **Root Directory**: `server`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. 添加環境變數：
   - `PORT`: 預設值 `10000` (Render 會自動分配端口)
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: 您的 MongoDB 連接字串

5. 點擊 "Create Web Service" 開始部署

## API 端點

| 方法   | 端點                | 描述           |
|--------|-------------------|----------------|
| GET    | /api/projects     | 獲取所有專案     |
| GET    | /api/projects/:id | 獲取單個專案     |
| POST   | /api/projects     | 創建新專案       |
| PUT    | /api/projects/:id | 更新專案         |
| DELETE | /api/projects/:id | 刪除專案         |