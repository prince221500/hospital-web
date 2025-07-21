import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Phone } from 'lucide-react';

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your privacy and the protection of your personal health information is our priority
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">HIPAA Privacy Notice</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p className="text-gray-600 mb-6">
              This notice describes how medical information about you may be used and disclosed and 
              how you can get access to this information. Please review it carefully.
            </p>
          </div>

          <div className="space-y-8">
            {/* Our Commitment */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-2" />
                Our Commitment to Your Privacy
              </h3>
              <p className="text-gray-600 mb-4">
                HealthCare Plus is committed to protecting the privacy of your personal health information. 
                We are required by law to maintain the privacy of your protected health information (PHI) 
                and to provide you with notice of our legal duties and privacy practices.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We will not use or disclose your health information without your authorization, except as described in this notice</li>
                <li>We will tell you promptly if a breach occurs that may have compromised your health information</li>
                <li>We must follow the duties and privacy practices described in this notice</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                How We Use and Disclose Your Health Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Treatment</h4>
                  <p className="text-gray-600">
                    We use your health information to provide you with medical care and services. 
                    We may disclose your information to doctors, nurses, technicians, and other personnel 
                    who are involved in your care.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Payment</h4>
                  <p className="text-gray-600">
                    We use and disclose your health information to obtain payment for services we provide. 
                    This may include billing your insurance company, verifying coverage, and collection activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Healthcare Operations</h4>
                  <p className="text-gray-600">
                    We use your health information for healthcare operations such as quality assessment, 
                    training programs, licensing, and conducting general administrative activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Your Rights Regarding Your Health Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Right to Access</h4>
                  <p className="text-gray-600">
                    You have the right to inspect and copy your health information. To request access, 
                    contact our Medical Records Department.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Right to Amend</h4>
                  <p className="text-gray-600">
                    You have the right to request that we amend your health information if you believe 
                    it is incorrect or incomplete.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Right to Restrict</h4>
                  <p className="text-gray-600">
                    You have the right to request restrictions on how we use or disclose your health 
                    information for treatment, payment, or healthcare operations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Right to Confidential Communications</h4>
                  <p className="text-gray-600">
                    You have the right to request that we communicate with you about your health 
                    information in a certain way or at a certain location.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Measures */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-blue-600 mr-2" />
                Security Measures
              </h3>
              <p className="text-gray-600 mb-4">
                We maintain physical, electronic, and procedural safeguards to protect your health information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access controls and user authentication systems</li>
                <li>Encrypted data transmission and storage</li>
                <li>Regular security training for all staff members</li>
                <li>Secure disposal of physical and electronic records</li>
                <li>Network security monitoring and firewalls</li>
                <li>Regular security audits and assessments</li>
              </ul>
            </div>

            {/* Website Privacy */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Privacy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Information We Collect</h4>
                  <p className="text-gray-600">
                    When you visit our website, we may collect information such as your IP address, 
                    browser type, pages visited, and time spent on our site for analytical purposes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cookies</h4>
                  <p className="text-gray-600">
                    We use cookies to enhance your browsing experience and provide personalized content. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Services</h4>
                  <p className="text-gray-600">
                    We may use third-party services for website analytics and functionality. 
                    These services have their own privacy policies governing the use of your information.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-2" />
                Contact Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  If you have questions about this privacy notice or need to exercise your rights, 
                  please contact our Privacy Officer:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Privacy Officer</strong></p>
                  <p>HealthCare Plus</p>
                  <p>123 Healthcare Mathura</p>
                  <p>MC 123</p>
                  <p>Phone: 6201047***</p>
                  <p>Email: pk2302861@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Notice</h3>
              <p className="text-gray-600">
                We reserve the right to change this privacy notice at any time. Any changes will be 
                effective immediately upon posting the updated notice on our website. We will provide 
                a copy of the current notice at each service encounter.
              </p>
            </div>

            {/* Effective Date */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                This privacy notice was last updated on January 1, 2024, and is effective as of that date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;