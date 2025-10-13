# DroneFocal - Expert Drone Reviews & Buying Guides

A professional drone content marketing website built with Next.js 14, featuring expert reviews, buying guides, and tutorials for drone enthusiasts.

## 🚀 Features

- **Expert Reviews**: Comprehensive drone reviews with ratings and comparisons
- **Buying Guides**: Detailed guides to help users choose the perfect drone
- **SEO Optimized**: Built-in SEO optimization for better search rankings
- **Responsive Design**: Mobile-first design that works on all devices
- **Affiliate Marketing**: Integrated affiliate links for monetization
- **Modern UI**: Clean, professional design with dark mode support
- **Performance**: Fast loading times with optimized images and code

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel
- **CDN**: Cloudflare
- **Analytics**: Google Analytics

## 📁 Project Structure

```
dronefocal/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── drone-reviews/   # Drone reviews pages
│   │   ├── buying-guides/   # Buying guides pages
│   │   ├── tutorials/       # Tutorial pages
│   │   ├── news/           # News and articles
│   │   └── api/            # API routes
│   ├── components/         # React components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── prisma/                # Database schema and migrations
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dronefocal.git
cd dronefocal
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your database URL in `.env.local`:
```
DATABASE_URL="postgresql://username:password@localhost:5432/dronefocal"
```

5. Set up the database:
```bash
npx prisma db push
npx prisma generate
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

The project uses Prisma with the following main models:

- **Product**: Drone product information
- **Review**: Expert reviews and ratings
- **Article**: News articles and tutorials
- **User**: User accounts and profiles
- **Comment**: User comments and feedback
- **AffiliateLink**: Affiliate marketing links

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `src/app/globals.css` for global styles
- Component styles are in individual component files

### Content
- Add new reviews in the database or create static data
- Update the homepage components in `src/components/`
- Modify the navigation in `src/components/Header.tsx`

### SEO
- Update metadata in `src/app/layout.tsx`
- Configure structured data in `src/components/SEO.tsx`
- Customize sitemap in `src/app/api/sitemap/route.ts`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD structured data for better search results
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization

## 💰 Monetization

The website is designed for affiliate marketing with:

- Amazon Associates integration
- Best Buy affiliate links
- B&H Photo affiliate links
- Google AdSense support
- Sponsored content capabilities

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email support@dronefocal.com or create an issue in the GitHub repository.

## 🔗 Links

- **Website**: https://dronefocal.com
- **GitHub**: https://github.com/yourusername/dronefocal
- **Documentation**: https://docs.dronefocal.com

---

Built with ❤️ by the DroneFocal team


