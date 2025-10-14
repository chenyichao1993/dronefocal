import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - DroneFocal',
  description: 'DroneFocal Cookie Policy - Learn about how we use cookies and tracking technologies on our drone review website.',
}

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>

        <p className="text-gray-600 mb-8">
          This Cookie Policy explains how DroneFocal uses cookies and similar technologies when you visit our website. By using our site, you consent to the use of cookies as described in this policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
        <p className="text-gray-600 mb-6">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
        <p className="text-gray-600 mb-6">
          We use cookies for several purposes to enhance your browsing experience and improve our website functionality.
        </p>

        <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Cookies</h3>
        <p className="text-gray-600 mb-4">
          These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your preferences.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Session management</li>
          <li>Security features</li>
          <li>Load balancing</li>
          <li>User interface preferences</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-900 mb-3">Analytics Cookies</h3>
        <p className="text-gray-600 mb-4">
          We use Google Analytics to understand how visitors interact with our website. These cookies help us improve our content and user experience.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Page views and session duration</li>
          <li>Traffic sources and user behavior</li>
          <li>Popular content and user engagement</li>
          <li>Device and browser information</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-900 mb-3">Marketing and Affiliate Cookies</h3>
        <p className="text-gray-600 mb-4">
          These cookies are used to track visitors across websites for marketing purposes and to ensure proper affiliate link tracking.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Affiliate link tracking (Amazon, Best Buy, B&H Photo)</li>
          <li>Ad performance measurement</li>
          <li>Conversion tracking</li>
          <li>Retargeting campaigns</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
        <p className="text-gray-600 mb-4">
          Some cookies on our site are set by third-party services that appear on our pages:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
          <li><strong>Amazon Associates:</strong> Affiliate link tracking and commission attribution</li>
          <li><strong>Social Media Platforms:</strong> Social sharing and engagement tracking</li>
          <li><strong>CDN Services:</strong> Content delivery and performance optimization</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Duration</h2>
        <p className="text-gray-600 mb-4">
          Cookies may be either "session" cookies or "persistent" cookies:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
          <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
        <p className="text-gray-600 mb-4">
          You have several options for managing cookies:
        </p>

        <h3 className="text-xl font-medium text-gray-900 mb-3">Browser Settings</h3>
        <p className="text-gray-600 mb-4">
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Block all cookies</li>
          <li>Block third-party cookies only</li>
          <li>Delete existing cookies</li>
          <li>Set preferences for specific websites</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-900 mb-3">Opt-Out Options</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
          <li><strong>Ad Personalization:</strong> <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
          <li><strong>Network Advertising Initiative:</strong> <a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NAI Opt-out Tool</a></li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
        <p className="text-gray-600 mb-6">
          If you choose to disable cookies, some features of our website may not function properly. This may include:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Inability to remember your preferences</li>
          <li>Reduced website performance</li>
          <li>Issues with affiliate link tracking</li>
          <li>Limited personalization features</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
        <p className="text-gray-600 mb-6">
          We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about our use of cookies, please contact us:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            <strong>Email:</strong> motionjoy93@gmail.com<br />
            <strong>Website:</strong> <a href="/" className="text-blue-600 hover:underline">DroneFocal.com</a>
          </p>
        </div>
      </div>
    </main>
  )
}
