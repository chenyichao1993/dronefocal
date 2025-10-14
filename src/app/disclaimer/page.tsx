import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - DroneFocal',
  description: 'DroneFocal Disclaimer - Important information about our drone reviews, recommendations, and content accuracy.',
}

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-800 font-medium">
            <strong>Important:</strong> The information on this website is for informational purposes only and should not be considered as professional advice.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Information</h2>
        <p className="text-gray-600 mb-6">
          DroneFocal provides drone reviews, buying guides, tutorials, and industry news for informational purposes only. All content on this website is based on our research, testing, and analysis, but individual results may vary.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Accuracy</h2>
        <p className="text-gray-600 mb-4">
          While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of our content. Information may become outdated or inaccurate over time.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Product specifications and features may change without notice</li>
          <li>Prices and availability are subject to change</li>
          <li>Performance results may vary based on conditions and usage</li>
          <li>Software updates may alter product functionality</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Drone Safety and Regulations</h2>
        <p className="text-gray-600 mb-4">
          <strong>CRITICAL SAFETY NOTICE:</strong> Drone operation involves inherent risks and requires compliance with local, state, and federal regulations.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Always check and comply with local drone regulations before flying</li>
          <li>Obtain necessary permits and licenses as required</li>
          <li>Follow manufacturer safety guidelines and recommendations</li>
          <li>Never fly in restricted areas or near airports</li>
          <li>Maintain visual line of sight with your drone at all times</li>
          <li>Check weather conditions before each flight</li>
          <li>Ensure proper insurance coverage for drone operations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Advice</h2>
        <p className="text-gray-600 mb-6">
          Our content is not intended to replace professional advice. For specific drone operations, legal compliance, or technical issues, consult with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Certified drone instructors</li>
          <li>Aviation lawyers</li>
          <li>Local aviation authorities</li>
          <li>Manufacturer support teams</li>
          <li>Licensed drone service providers</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Recommendations</h2>
        <p className="text-gray-600 mb-4">
          Our product reviews and recommendations are based on our testing and analysis, but:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Individual needs and preferences vary</li>
          <li>Market conditions and product availability change</li>
          <li>New products may be released after our reviews</li>
          <li>User experience may differ from our testing results</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate Relationships</h2>
        <p className="text-gray-600 mb-4">
          DroneFocal participates in affiliate marketing programs with various retailers including Amazon, Best Buy, and B&H Photo. This means:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>We may earn commissions when you purchase through our links</li>
          <li>This does not affect the price you pay for products</li>
          <li>Our editorial content remains independent and unbiased</li>
          <li>We only recommend products we believe are valuable to our readers</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          DroneFocal, its authors, and contributors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Use of information provided on this website</li>
          <li>Drone operation based on our recommendations</li>
          <li>Product purchases made through affiliate links</li>
          <li>Regulatory violations or legal issues</li>
          <li>Property damage or personal injury</li>
          <li>Financial losses or business disruptions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Content</h2>
        <p className="text-gray-600 mb-6">
          Our website may contain links to third-party websites, products, or services. We are not responsible for the content, privacy practices, or terms of use of these external sites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates and Changes</h2>
        <p className="text-gray-600 mb-6">
          This disclaimer may be updated periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for any updates.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-gray-600 mb-6">
          If you have questions about this disclaimer or need clarification on any content, please contact us:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            <strong>Email:</strong> motionjoy93@gmail.com<br />
            <strong>Website:</strong> <a href="/" className="text-blue-600 hover:underline">DroneFocal.com</a>
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-8">
          <p className="text-red-800 font-medium">
            <strong>Final Reminder:</strong> Drone operation carries inherent risks. Always prioritize safety, follow regulations, and seek professional guidance when needed. DroneFocal is not responsible for any consequences resulting from the use of information on this website.
          </p>
        </div>
      </div>
    </main>
  )
}
