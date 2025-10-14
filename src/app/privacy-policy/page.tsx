import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - DroneFocal',
  description: 'DroneFocal Privacy Policy - Learn how we collect, use, and protect your personal information when you visit our drone review website.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>

        <p className="text-gray-600 mb-8">
          At DroneFocal, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
        
        <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Email address (when you subscribe to our newsletter)</li>
          <li>Name (if provided voluntarily)</li>
          <li>Contact information (if you reach out to us)</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-900 mb-3">Automatically Collected Information</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and time spent on our site</li>
          <li>Referring website information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>To provide and maintain our drone review services</li>
          <li>To send you newsletters and updates about drone content</li>
          <li>To improve our website and user experience</li>
          <li>To analyze website traffic and user behavior</li>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
        <p className="text-gray-600 mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>With service providers who assist us in operating our website</li>
          <li>With affiliate partners (Amazon, Best Buy, etc.) when you click on affiliate links</li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a business transfer or acquisition</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
        <p className="text-gray-600 mb-4">
          We use cookies and similar tracking technologies to enhance your browsing experience. For detailed information about our cookie usage, please see our <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
        <p className="text-gray-600 mb-6">
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
        <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Access to your personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of your personal information</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
        <p className="text-gray-600 mb-6">
          Our website contains affiliate links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
        <p className="text-gray-600 mb-6">
          Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-600 mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about this Privacy Policy, please contact us at:
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
