# DroneFocal - Expert Drone Reviews & Buying Guides

A modern Next.js website for drone reviews, buying guides, and industry insights.

## 🚀 Features

- **SEO Optimized**: Clean URLs without .html suffixes
- **Global Analytics**: Google Analytics, Microsoft Clarity, and Baidu Analytics integrated
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 14, TypeScript, and Tailwind CSS
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Legal Pages**: Complete privacy policy, terms of service, cookie policy, and disclaimer

## 📁 Project Structure

```
dronefocal/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global layout with analytics
│   │   ├── page.tsx            # Homepage
│   │   ├── privacy-policy/     # Privacy policy page
│   │   ├── terms-of-service/   # Terms of service page
│   │   ├── cookie-policy/      # Cookie policy page
│   │   └── disclaimer/         # Disclaimer page
│   └── components/
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Site footer
├── public/
│   └── images/                 # Static images
├── scripts/
│   └── image-optimizer.js      # Image optimization script
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production
```bash
npm run build
npm start
```

## 📊 Analytics Integration

The website includes three analytics platforms:

1. **Google Analytics** (G-HMJXB0MYLE)
2. **Microsoft Clarity** (sz5i3hrbah)
3. **Baidu Analytics** (34a1971468567956f4e88f020387dafd)

All analytics are automatically included on every page through the global layout.

## 🔗 URL Structure

- Homepage: `/`
- Privacy Policy: `/privacy-policy`
- Terms of Service: `/terms-of-service`
- Cookie Policy: `/cookie-policy`
- Disclaimer: `/disclaimer`

## 🎨 Styling

- **Framework**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Design**: Clean, modern, professional
- **Responsive**: Mobile-first approach

## 📱 Features

- Fixed navigation header
- Mobile hamburger menu
- Email subscription with validation
- Success modal for subscriptions
- Popular articles sidebar
- SEO-optimized meta tags
- Automatic year updates in footer

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Free tier includes unlimited personal projects

### Other Platforms
- Netlify
- Railway
- Render
- Any Node.js hosting platform

## 📈 SEO Features

- Clean URLs without file extensions
- Meta tags and Open Graph
- Structured data ready
- Fast loading with Next.js optimization
- Mobile-friendly design
- Image optimization

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. The page will automatically include analytics and layout

### Modifying Analytics
Edit the tracking codes in `src/app/layout.tsx`

### Styling Changes
Modify `src/app/globals.css` or component-specific styles

## 📞 Contact

- Email: motionjoy93@gmail.com
- Website: DroneFocal.com

## 📄 License

MIT License - see LICENSE file for details