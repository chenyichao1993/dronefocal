# DroneFocal 部署指南

## 项目概述
DroneFocal 是一个基于 Next.js 14 的静态无人机评测网站，使用 Markdown 文件作为内容源，无需数据库。

## 部署方案：Vercel + 自定义域名

### 1. 准备工作
- ✅ 已清理数据库相关文件
- ✅ 配置静态导出
- ✅ 优化 Vercel 配置
- ✅ 域名：dronefocal.com（在 Spaceship 注册）

### 2. Vercel 部署步骤

#### 2.1 连接 GitHub
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择你的 `dronefocal` 仓库
5. 点击 "Import"

#### 2.2 配置项目
Vercel 会自动检测到 Next.js 项目，使用以下配置：
- **Framework Preset**: Next.js
- **Root Directory**: `./` (默认)
- **Build Command**: `npm run build` (自动检测)
- **Output Directory**: `out` (已配置)
- **Install Command**: `npm install` (自动检测)

#### 2.3 环境变量
无需设置环境变量，项目使用静态数据。

#### 2.4 部署
1. 点击 "Deploy" 按钮
2. 等待构建完成（约 2-3 分钟）
3. 获得临时域名：`https://dronefocal-xxx.vercel.app`

### 3. 域名配置

#### 3.1 在 Vercel 中添加域名
1. 进入项目 Dashboard
2. 点击 "Settings" → "Domains"
3. 添加域名：`dronefocal.com`
4. 添加子域名：`www.dronefocal.com`

#### 3.2 在 Spaceship 中配置 DNS
登录 Spaceship 域名管理面板，添加以下 DNS 记录：

```
类型: CNAME
名称: @
值: cname.vercel-dns.com
TTL: 3600

类型: CNAME  
名称: www
值: cname.vercel-dns.com
TTL: 3600
```

#### 3.3 等待 DNS 生效
- DNS 传播时间：5-30 分钟
- 验证域名：访问 `https://dronefocal.com`

### 4. 验证部署

#### 4.1 功能测试
- [ ] 首页加载正常
- [ ] 导航菜单工作
- [ ] 文章页面显示
- [ ] 搜索功能正常
- [ ] 响应式设计
- [ ] 图片加载正常

#### 4.2 SEO 验证
- [ ] 访问 `https://dronefocal.com/sitemap.xml`
- [ ] 检查 robots.txt
- [ ] 验证 meta 标签

#### 4.3 性能测试
- [ ] 使用 Google PageSpeed Insights
- [ ] 检查 Core Web Vitals
- [ ] 验证图片优化

### 5. 后续维护

#### 5.1 内容更新
1. 编辑 `src/content/` 目录下的 Markdown 文件
2. 提交到 GitHub
3. Vercel 自动重新部署

#### 5.2 图片优化
```bash
# 运行图片优化脚本
npm run optimize-images
```

#### 5.3 监控
- Vercel Analytics（免费）
- Google Analytics（已配置）
- Microsoft Clarity（已配置）
- 百度统计（已配置）

### 6. 成本预估
- **Vercel**: 免费（Hobby 计划）
- **域名**: 已在 Spaceship 注册
- **总成本**: $0/月

### 7. 故障排除

#### 7.1 构建失败
- 检查 `package.json` 依赖
- 查看 Vercel 构建日志
- 确保所有文件路径正确

#### 7.2 域名无法访问
- 检查 DNS 配置
- 等待 DNS 传播
- 验证域名在 Vercel 中正确配置

#### 7.3 图片不显示
- 检查图片路径
- 验证 Unsplash 链接
- 确保图片优化配置正确

### 8. 联系支持
- Vercel 支持：通过 Dashboard 提交工单
- 域名问题：联系 Spaceship 客服

---

**部署完成后，你的网站将在 `https://dronefocal.com` 上线！**
