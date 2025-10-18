import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://dronefocal.com'),
  title: 'DroneFocal - Expert Drone Reviews & Buying Guides',
  description: 'Get expert drone reviews, buying guides, and tutorials. Find the perfect drone for your needs with our comprehensive comparisons and recommendations.',
  keywords: 'drone reviews, drone buying guide, DJI drone, best drone, drone comparison',
  authors: [{ name: 'DroneFocal Team' }],
  openGraph: {
    title: 'DroneFocal - Expert Drone Reviews & Buying Guides',
    description: 'Get expert drone reviews, buying guides, and tutorials. Find the perfect drone for your needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DroneFocal - Expert Drone Reviews & Buying Guides',
    description: 'Get expert drone reviews, buying guides, and tutorials.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HMJXB0MYLE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HMJXB0MYLE');
            `,
          }}
        />
        
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sz5i3hrbah");
            `,
          }}
        />
        
        {/* 百度统计 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?34a1971468567956f4e88f020387dafd";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white">
        <Header />
        <main className="pt-28">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}