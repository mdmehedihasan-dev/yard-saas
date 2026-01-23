import React from 'react';
import { Lock, Info, Database, Share2, Shield, Bell, Edit, Mail, Phone } from 'lucide-react';

const page =() => {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-[#eefdf4] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A3019] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#4B5563] text-lg leading-relaxed">
              Your privacy matters to us. This policy explains how we collect, use, and protect your personal information when you use our platform and the choices you have.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Section 1: Information We Collect */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Info className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Information We Collect</h2>
                <p className="text-gray-600">
                  We collect personal and usage information to provide you with a better experience on our platform.
                </p>
              </div>
            </div>
            <div className="ml-16 text-gray-700 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Personal Information:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Name and contact information (email address, phone number, mailing address)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Account credentials and authentication information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Payment information (processed securely through third-party providers)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Profile information, work history, and professional qualifications</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Usage Information:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Device information, IP address, and browser type</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Log data including access times, pages viewed, and actions taken</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Location data (with your consent) to provide location-based services</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <Database className="w-6 h-6 text-purple-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">2. How We Use Your Information</h2>
                <p className="text-gray-600">
                  We leverage data to enhance your experience, optimize our services, and maintain platform security.
                </p>
              </div>
            </div>
            <div className="ml-16">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Operations</h3>
                  <p className="text-sm text-gray-700">
                    To provide, maintain, and improve our platform and services
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Communication</h3>
                  <p className="text-sm text-gray-700">
                    To send updates, notifications, and respond to your inquiries
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Security</h3>
                  <p className="text-sm text-gray-700">
                    To protect against fraud, abuse, and security threats
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Information Sharing */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-orange-100 rounded-full p-3 mr-4">
                <Share2 className="w-6 h-6 text-orange-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">3. Information Sharing</h2>
                <p className="text-gray-600">
                  We only share your information in specific circumstances and never sell your personal data.
                </p>
              </div>
            </div>
            <div className="ml-16 text-gray-700 space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-yellow-700" />
                  Limited Sharing Policy
                </h3>
                <p className="text-sm">
                  We may share your information with service providers, business partners, and in response to legal requirements. We ensure all third parties adhere to strict data protection standards.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-3">We share information with:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">→</span>
                    <span><strong>Service Providers:</strong> Third parties that help us operate our platform (payment processors, hosting services)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">→</span>
                    <span><strong>Business Partners:</strong> When you explicitly consent to sharing with specific partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">→</span>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Data Protection & Security */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <Lock className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Data Protection & Security</h2>
                <p className="text-gray-600">
                  We implement robust security measures to protect your information from unauthorized access.
                </p>
              </div>
            </div>
            <div className="ml-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Security Measures:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>SSL encryption for all data transmissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>Regular security audits and vulnerability testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>Secure data storage with access controls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>Employee training on data protection</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Compliance & Standards:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>GDPR compliant data processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>PCI DSS compliance for payment data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>Regular compliance certifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>Industry-standard security protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Your Rights */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Shield className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">5. Your Rights</h2>
                <p className="text-gray-600">
                  You have control over your personal information and can exercise various rights regarding your data.
                </p>
              </div>
            </div>
            <div className="ml-16">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-all duration-300">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Access</h3>
                  <p className="text-sm text-gray-700">
                    Request a copy of the personal data we hold about you
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6 hover:border-green-400 transition-all duration-300">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Edit className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Update</h3>
                  <p className="text-sm text-gray-700">
                    Correct or update inaccurate information in your account
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-6 hover:border-red-400 transition-all duration-300">
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Delete</h3>
                  <p className="text-sm text-gray-700">
                    Request deletion of your personal data from our systems
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Changes to This Policy */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-indigo-100 rounded-full p-3 mr-4">
                <Bell className="w-6 h-6 text-indigo-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">6. Changes to This Policy</h2>
              </div>
            </div>
            <div className="ml-16 text-gray-700 space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will notify you through the platform or via email.
              </p>
              <p>
                We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of our platform after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-green-800 to-green-600 rounded-2xl shadow-xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about how we handle your data, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                privacy@platform.com
              </button>
              <button className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Support
              </button>
            </div>
          </section>

          {/* Footer Note */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
            <p className="text-gray-700 mb-2">
              Last updated: January 19, 2026
            </p>
            <p className="text-sm text-gray-600">
              This privacy policy is effective immediately and applies to all users of our platform.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
export default page;