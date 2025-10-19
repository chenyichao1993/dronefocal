const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

class ImageOptimizer {
    constructor() {
        this.originalDir = path.join(__dirname, '../public/images/original');
        this.optimizedDir = path.join(__dirname, '../public/images/optimized');
        this.webpDir = path.join(this.optimizedDir, 'webp');
        this.avifDir = path.join(this.optimizedDir, 'avif');
        this.responsiveDir = path.join(this.optimizedDir, 'responsive');
        this.thumbnailsDir = path.join(__dirname, '../public/images/thumbnails');
        
        // 响应式图片尺寸
        this.responsiveSizes = [320, 640, 1024, 1920];
        
        // 缩略图尺寸
        this.thumbnailSizes = [150, 300];
    }

    // 确保所有目录存在
    async ensureDirectories() {
        const dirs = [
            this.originalDir,
            this.optimizedDir,
            this.webpDir,
            this.avifDir,
            this.responsiveDir,
            this.thumbnailsDir
        ];

        for (const dir of dirs) {
            await fs.ensureDir(dir);
        }
    }

    // 生成SEO友好的文件名
    generateSEOFileName(originalName) {
        const ext = path.extname(originalName);
        const nameWithoutExt = path.basename(originalName, ext);
        
        // 转换为小写，替换空格和特殊字符为连字符
        const seoName = nameWithoutExt
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        
        return seoName;
    }

    // 获取图片信息
    async getImageInfo(imagePath) {
        const metadata = await sharp(imagePath).metadata();
        return {
            width: metadata.width,
            height: metadata.height,
            format: metadata.format,
            size: metadata.size
        };
    }

    // 生成响应式图片
    async generateResponsiveImages(inputPath, outputDir, baseName) {
        const results = [];
        
        for (const size of this.responsiveSizes) {
            const outputPath = path.join(outputDir, `${baseName}-${size}w.webp`);
            
            await sharp(inputPath)
                .resize(size, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: 85 })
                .toFile(outputPath);
            
            const info = await this.getImageInfo(outputPath);
            results.push({
                size: size,
                path: outputPath,
                width: info.width,
                height: info.height,
                format: 'webp'
            });
        }
        
        return results;
    }

    // 生成缩略图
    async generateThumbnails(inputPath, outputDir, baseName) {
        const results = [];
        
        for (const size of this.thumbnailSizes) {
            const outputPath = path.join(outputDir, `${baseName}-thumb-${size}.webp`);
            
            await sharp(inputPath)
                .resize(size, size, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({ quality: 80 })
                .toFile(outputPath);
            
            results.push({
                size: size,
                path: outputPath,
                format: 'webp'
            });
        }
        
        return results;
    }

    // 生成AVIF格式
    async generateAVIF(inputPath, outputDir, baseName) {
        const outputPath = path.join(outputDir, `${baseName}.avif`);
        
        await sharp(inputPath)
            .avif({ quality: 80 })
            .toFile(outputPath);
        
        const info = await this.getImageInfo(outputPath);
        return {
            path: outputPath,
            width: info.width,
            height: info.height,
            format: 'avif'
        };
    }

    // 生成WebP格式
    async generateWebP(inputPath, outputDir, baseName) {
        const outputPath = path.join(outputDir, `${baseName}.webp`);
        
        await sharp(inputPath)
            .webp({ quality: 85 })
            .toFile(outputPath);
        
        const info = await this.getImageInfo(outputPath);
        return {
            path: outputPath,
            width: info.width,
            height: info.height,
            format: 'webp'
        };
    }

    // 生成HTML代码
    generateHTMLCode(imageData) {
        const { baseName, originalInfo, responsiveImages, avifImage, webpImage, thumbnails } = imageData;
        
        // 生成srcset
        const webpSrcset = responsiveImages
            .map(img => `${path.basename(img.path)} ${img.width}w`)
            .join(', ');
        
        const avifSrcset = `${path.basename(avifImage.path)} ${avifImage.width}w`;
        
        // 生成alt标签
        const altText = baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        const html = `
<!-- Optimized Image: ${baseName} -->
<picture>
    <source srcset="${avifSrcset}" type="image/avif">
    <source srcset="${webpSrcset}" type="image/webp" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
    <img 
        src="${path.basename(webpImage.path)}" 
        alt="${altText}"
        width="${originalInfo.width}" 
        height="${originalInfo.height}"
        loading="lazy"
        class="w-full h-auto rounded-lg shadow-md"
    >
</picture>
<!-- End Optimized Image -->`;

        return html;
    }

    // 处理单张图片
    async processImage(imagePath) {
        const originalName = path.basename(imagePath);
        const baseName = this.generateSEOFileName(originalName);
        
        console.log(`Processing: ${originalName} -> ${baseName}`);
        
        // 获取原始图片信息
        const originalInfo = await this.getImageInfo(imagePath);
        
        // 生成各种格式
        const responsiveImages = await this.generateResponsiveImages(imagePath, this.responsiveDir, baseName);
        const avifImage = await this.generateAVIF(imagePath, this.avifDir, baseName);
        const webpImage = await this.generateWebP(imagePath, this.webpDir, baseName);
        const thumbnails = await this.generateThumbnails(imagePath, this.thumbnailsDir, baseName);
        
        // 生成HTML代码
        const htmlCode = this.generateHTMLCode({
            baseName,
            originalInfo,
            responsiveImages,
            avifImage,
            webpImage,
            thumbnails
        });
        
        // 保存HTML代码到文件
        const htmlPath = path.join(this.optimizedDir, `${baseName}-html.txt`);
        await fs.writeFile(htmlPath, htmlCode);
        
        return {
            baseName,
            originalInfo,
            responsiveImages,
            avifImage,
            webpImage,
            thumbnails,
            htmlCode
        };
    }

    // 主处理函数
    async optimizeImages() {
        try {
            console.log('🚀 Starting image optimization...');
            
            // 确保目录存在
            await this.ensureDirectories();
            
            // 获取所有图片文件
            const files = await fs.readdir(this.originalDir);
            const imageFiles = files.filter(file => 
                /\.(png|jpg|jpeg)$/i.test(file)
            );
            
            if (imageFiles.length === 0) {
                console.log('❌ No images found in original directory');
                return;
            }
            
            console.log(`📸 Found ${imageFiles.length} images to process`);
            
            const results = [];
            
            // 处理每张图片
            for (const file of imageFiles) {
                const imagePath = path.join(this.originalDir, file);
                const result = await this.processImage(imagePath);
                results.push(result);
                console.log(`✅ Processed: ${file}`);
            }
            
            // 生成汇总报告
            await this.generateReport(results);
            
            console.log('🎉 Image optimization completed!');
            console.log(`📊 Processed ${results.length} images`);
            console.log('📁 Check the optimized/ directory for results');
            
        } catch (error) {
            console.error('❌ Error during optimization:', error);
        }
    }

    // 生成处理报告
    async generateReport(results) {
        const report = {
            timestamp: new Date().toISOString(),
            totalImages: results.length,
            images: results.map(result => ({
                name: result.baseName,
                originalSize: result.originalInfo.size,
                originalFormat: result.originalInfo.format,
                originalDimensions: `${result.originalInfo.width}x${result.originalInfo.height}`,
                responsiveSizes: result.responsiveImages.length,
                hasAVIF: true,
                hasWebP: true,
                hasThumbnails: result.thumbnails.length
            }))
        };
        
        const reportPath = path.join(this.optimizedDir, 'optimization-report.json');
        await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
        
        console.log('📋 Optimization report saved to optimization-report.json');
    }
}

// 运行优化
if (require.main === module) {
    const optimizer = new ImageOptimizer();
    optimizer.optimizeImages();
}

module.exports = ImageOptimizer;
