# DroneFocal 图片SEO优化系统

## 📁 文件夹结构

```
dronefocal/
├── images/
│   ├── original/          # 原始图片存放处
│   ├── optimized/         # 优化后的图片
│   │   ├── webp/         # WebP格式图片
│   │   ├── avif/         # AVIF格式图片
│   │   ├── responsive/   # 响应式尺寸图片
│   │   └── *.txt         # 生成的HTML代码文件
│   └── thumbnails/       # 缩略图
├── scripts/
│   └── image-optimizer.js # 图片优化脚本
└── package.json
```

## 🚀 使用方法

### 1. 安装依赖
```bash
npm install
```

### 2. 放置图片
将需要优化的图片（PNG、JPG、JPEG格式）放入 `images/original/` 文件夹

### 3. 运行优化脚本
```bash
npm run optimize-images
```

### 4. 获取结果
- 优化后的图片保存在 `images/optimized/` 各子文件夹中
- HTML代码保存在 `images/optimized/*.txt` 文件中
- 处理报告保存在 `optimization-report.json` 中

## 🎯 SEO优化功能

### 1. 格式转换
- **WebP格式**：现代浏览器支持，文件更小
- **AVIF格式**：最新格式，压缩率更高
- **保持兼容性**：自动生成fallback

### 2. 响应式图片
自动生成4种尺寸：
- 320px（手机）
- 640px（平板）
- 1024px（桌面）
- 1920px（大屏）

### 3. 缩略图生成
- 150px × 150px
- 300px × 300px

### 4. 文件名优化
- 转换为小写
- 替换特殊字符为连字符
- SEO友好的命名规则

### 5. HTML代码生成
自动生成包含以下特性的HTML：
- `<picture>` 元素支持多种格式
- `srcset` 响应式图片
- `loading="lazy"` 懒加载
- 自动生成 `alt` 标签
- 结构化数据支持

## 📝 图片命名建议

### 推荐的命名格式：
```
dji-mavic-3-pro-review.jpg
best-drones-under-500.jpg
drone-photography-tips.png
faa-drone-regulations-2024.jpeg
```

### 命名规则：
- 使用小写字母
- 单词间用连字符分隔
- 包含关键词
- 描述图片内容
- 避免特殊字符

## 🔧 技术特性

- **Sharp库**：高性能图片处理
- **批量处理**：支持多张图片同时处理
- **自动检测**：识别图片格式和尺寸
- **质量优化**：平衡文件大小和图片质量
- **错误处理**：完善的错误处理机制

## 📊 输出示例

### 生成的HTML代码：
```html
<picture>
    <source srcset="dji-mavic-3-pro-review.avif" type="image/avif">
    <source srcset="dji-mavic-3-pro-review-320w.webp 320w, dji-mavic-3-pro-review-640w.webp 640w, dji-mavic-3-pro-review-1024w.webp 1024w, dji-mavic-3-pro-review-1920w.webp 1920w" type="image/webp" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
    <img 
        src="dji-mavic-3-pro-review.webp" 
        alt="Dji Mavic 3 Pro Review"
        width="1920" 
        height="1080"
        loading="lazy"
        class="w-full h-auto rounded-lg shadow-md"
    >
</picture>
```

## ⚠️ 注意事项

1. **原图片处理**：脚本运行后会自动删除原图片
2. **备份建议**：运行前请备份重要图片
3. **文件格式**：支持 PNG、JPG、JPEG 格式
4. **文件大小**：建议单张图片不超过10MB
5. **浏览器兼容**：生成的代码兼容所有现代浏览器

## 🆘 故障排除

### 常见问题：
1. **依赖安装失败**：确保Node.js版本 >= 14
2. **图片处理失败**：检查图片格式和文件完整性
3. **权限错误**：确保对文件夹有读写权限

### 联系支持：
如有问题，请检查控制台输出或联系技术支持。
