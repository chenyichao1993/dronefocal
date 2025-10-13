import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact DroneFocal - Get in Touch',
  description: 'Contact DroneFocal for questions, suggestions, or partnerships. We\'re here to help with all your drone-related inquiries.',
  keywords: ['contact dronefocal', 'drone support', 'drone questions', 'dronefocal contact'],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="container-custom py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions about drones, need help choosing the right one, or want to work with us? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We're here to help with all your drone-related questions. 
                Whether you're a beginner or a professional, we're happy to assist.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    hello@dronefocal.com
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Monday - Friday, 9 AM - 6 PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Drone Street<br />
                    Tech City, TC 12345
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By appointment only
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Business Hours
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 border border-gray-200 dark:border-dark-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Check out our FAQ section for quick answers to common questions.
              </p>
              <a
                href="/faq"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                View FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


