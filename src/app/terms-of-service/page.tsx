import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - DroneFocal',
  description: 'DroneFocal Terms of Service - Read our terms and conditions for using our drone review website and services.',
}

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>

        <p className="text-gray-600 mb-8">
          Welcome to DroneFocal. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using DroneFocal, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Description of Service</h2>
        <p className="text-gray-600 mb-6">
          DroneFocal is a content website that provides drone reviews, buying guides, tutorials, and industry news. We offer informational content to help users make informed decisions about drone purchases and usage.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Conduct</h2>
        <p className="text-gray-600 mb-4">You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Use the service for any unlawful purpose or to solicit others to perform unlawful acts</li>
          <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
          <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
          <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
          <li>Submit false or misleading information</li>
          <li>Upload or transmit viruses or any other type of malicious code</li>
          <li>Attempt to gain unauthorized access to our service or related systems</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
        <p className="text-gray-600 mb-4">
          The content on DroneFocal, including but not limited to text, graphics, images, logos, and software, is the property of DroneFocal and is protected by copyright and other intellectual property laws.
        </p>
        <p className="text-gray-600 mb-6">
          You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Content Accuracy and Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of our content. Our reviews and recommendations are based on our research and testing, but individual results may vary.
        </p>
        <p className="text-gray-600 mb-6">
          Product specifications, prices, and availability are subject to change without notice. We recommend verifying information directly with manufacturers or retailers before making purchasing decisions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Affiliate Links and Advertising</h2>
        <p className="text-gray-600 mb-4">
          DroneFocal participates in affiliate marketing programs. This means we may earn commissions when you click on links to products on our site and make purchases from our affiliate partners, including but not limited to Amazon, Best Buy, and B&H Photo.
        </p>
        <p className="text-gray-600 mb-6">
          These affiliate relationships do not influence our editorial content or product recommendations. We maintain editorial independence and provide honest, unbiased reviews.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Links</h2>
        <p className="text-gray-600 mb-6">
          Our website may contain links to third-party websites or services that are not owned or controlled by DroneFocal. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          In no event shall DroneFocal, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
        <p className="text-gray-600 mb-6">
          You agree to defend, indemnify, and hold harmless DroneFocal and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
        <p className="text-gray-600 mb-6">
          We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
        <p className="text-gray-600 mb-6">
          These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about these Terms of Service, please contact us:
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
