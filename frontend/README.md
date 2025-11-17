# frontend (Phone Prefix Admin)

这是一个轻量的 React + Vite 前端原型，用于管理号段、导入 CSV、导出离线 JSON 包并与后端交互。

快速启动：
1. 进入 frontend 目录
2. 安装依赖： `npm install`
3. 启动开发服务器： `npm run dev`
4. 默认访问地址： `http://localhost:5173`

配置后端地址：
- 默认情况下，前端会使用相对路径调用后端 API（同一域名下）。如果后端在不同主机或端口，可以在运行时通过在页面中注入 window.__BACKEND_URL__（例如在 index.html 中加入一段脚本或使用环境变量替换）来设置后端基址。

主要页面：
- 号段列表（GET /admin/prefixes）
- CSV 导入（POST /admin/import）
- 离线包导出（GET /sync/download）

CSV 模板格式： 第一行必须包含列名：
```
prefix,country,province,city,carrier,note
```

将前端放入仓库后，你可以把 frontend 目录连同后端一起打包或单独部署在静态服务器。
