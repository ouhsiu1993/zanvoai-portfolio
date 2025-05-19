# ZanvoAI Portfolio API 服務器

這是 ZanvoAI Portfolio 網站的後端 API 服務器，提供專案資料的 CRUD 操作。

## 環境要求

- Node.js (>= 14.x)
- MongoDB Atlas 帳戶 (或本地 MongoDB 實例)

## 安裝與運行

### 安裝依賴

```bash
cd server
npm install
```

### 設定環境變數

確保 `.env` 文件已添加以下內容：

```
PORT=3001
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/portfolio
```

### 導入初始資料 (可選)

```bash
node importData.js
```

### 運行伺服器

```bash
# 開發模式 (使用 nodemon 自動重啟)
npm run dev

# 生產模式
npm start
```

## API 端點

| 方法   | 端點             | 描述               |
|--------|------------------|------------------|
| GET    | /api/projects    | 獲取所有專案     |
| GET    | /api/projects/:id | 獲取單個專案     |
| POST   | /api/projects    | 創建新專案       |
| PUT    | /api/projects/:id | 更新專案         |
| DELETE | /api/projects/:id | 刪除專案         |

## 專案資料結構

```json
{
  "title": "專案標題",
  "description": "專案描述",
  "imageUrl": "圖片URL",
  "tags": ["標籤1", "標籤2"],
  "projectUrl": "專案連結",
  "featured": false,
  "order": 1
}
```