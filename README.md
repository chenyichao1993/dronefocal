# DroneFocal

A comprehensive drone review and information website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚁 **Drone Reviews**: Detailed reviews of popular drone models
- 📚 **Buying Guides**: Comprehensive guides for drone purchasing decisions
- 📰 **News**: Latest drone industry news and updates
- 🔍 **Advanced Filtering**: Filter reviews by brand, price range, and rating
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance**: Server-side rendering with Next.js 14
- 🎨 **Modern UI**: Clean, modern interface with Tailwind CSS
- 🔗 **Related Articles**: Smart article recommendations
- 📊 **SEO Optimized**: Built-in SEO features and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown (MDX) with frontmatter
- **Images**: Next.js Image optimization with WebP/AVIF
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chenyichao1993/dronefocal.git
cd dronefocal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
dronefocal/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── drone-reviews/   # Drone reviews pages
│   │   ├── guides/          # Buying guides pages
│   │   ├── news/            # News pages
│   │   └── tutorials/       # Tutorial pages
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   └── content/             # Markdown content files
├── public/
│   └── images/              # Optimized images
├── scripts/                 # Build and optimization scripts
└── package.json
```

## Content Management

Articles are written in Markdown with frontmatter metadata:

```markdown
---
title: "Article Title"
excerpt: "Article excerpt"
image: "/images/article-image.webp"
date: "2024-01-01"
readTime: "5 min read"
rating: 4.5
price: "$999"
brand: "DJI"
category: "reviews"
tags: ["drone", "review", "DJI"]
---

Article content here...
```

## Image Optimization

The project includes an automated image optimization script:

```bash
npm run optimize-images
```

This script:
- Converts images to WebP/AVIF formats
- Generates responsive image sizes
- Creates thumbnails
- Deletes original files after optimization

## Deployment

The project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, please open an issue on GitHub.