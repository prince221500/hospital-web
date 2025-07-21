import React from 'react';
import { FileText, AlertCircle, Shield, CreditCard, Users, Phone } from 'lucide-react';

const Terms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Please review our terms and conditions for using our services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p className="text-gray-600 mb-6">
              These terms and conditions govern your use of HealthCare Plus services and facilities. 
              By using our services, you agree to be bound by these terms.
            </p>
          </div>

          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
                Acceptance of Terms
              </h3>
              <p className="text-gray-600 mb-4">
                By accessing or using HealthCare Plus services, including our website, facilities, 
                and medical services, you acknowledge that you have read, understood, and agree to 
                be bound by these terms and conditions.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>These terms apply to all patients, visitors, and users of our services</li>
                <li>You must be at least 18 years old to agree to these terms</li>
                <li>Parents or guardians must accept these terms on behalf of minors</li>
                <li>We reserve the right to modify these terms at any time</li>
              </ul>
            </div>

            {/* Medical Services */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Medical Services and Treatment
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consent to Treatment</h4>
                  <p className="text-gray-600">
                    By seeking treatment at HealthCare Plus, you consent to medical examination, 
                    diagnosis, and treatment by our healthcare professionals. This includes consent 
                    to procedures deemed necessary by your physician.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medical Records</h4>
                  <p className="text-gray-600">
                    We maintain comprehensive medical records for all patients. These records are 
                    confidential and protected under HIPAA regulations. You have the right to access 
                    your medical records as outlined in our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Care</h4>
                  <p className="text-gray-600">
                    In emergency situations, we may provide treatment without prior consent when 
                    immediate care is necessary to prevent serious harm or death.
                  </p>
                </div>
              </div>
            </div>

            {/* Appointments and Scheduling */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Appointments and Scheduling
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Appointment Scheduling</h4>
                  <p className="text-gray-600">
                    Appointments can be scheduled through our online system, by phone, or in person. 
                    We recommend scheduling appointments in advance to ensure availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h4>
                  <p className="text-gray-600">
                    Please provide at least 24 hours notice for appointment cancellations. 
                    Failure to cancel within this timeframe may result in a cancellation fee.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">No-Show Policy</h4>
                  <p className="text-gray-600">
                    Patients who fail to show up for scheduled appointments without notice may 
                    be charged a no-show fee and may be subject to dismissal from our practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment and Billing */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                Payment and Billing
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Responsibility</h4>
                  <p className="text-gray-600">
                    Patients are responsible for all charges incurred for medical services. 
                    Payment is due at the time of service unless other arrangements have been made.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Insurance</h4>
                  <p className="text-gray-600">
                    We accept most major insurance plans. Patients are responsible for verifying 
                    coverage and obtaining necessary authorizations. You are responsible for any 
                    deductibles, co-pays, or non-covered services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Plans</h4>
                  <p className="text-gray-600">
                    Payment plans may be available for qualifying patients. Contact our billing 
                    department to discuss payment options and financial assistance programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Website Terms */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Website and Online Services</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Acceptable Use</h4>
                  <p className="text-gray-600">
                    You agree to use our website and online services only for lawful purposes. 
                    You may not use our services to transmit harmful, threatening, or inappropriate content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Account Security</h4>
                  <p className="text-gray-600">
                    If you create an account on our website, you are responsible for maintaining 
                    the security of your login credentials and for all activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Content Accuracy</h4>
                  <p className="text-gray-600">
                    While we strive to provide accurate information on our website, we cannot 
                    guarantee the completeness or accuracy of all content. Medical information 
                    should not replace professional medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Liability and Disclaimers */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Liability and Disclaimers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                  <p className="text-gray-600">
                    To the fullest extent permitted by law, HealthCare Plus shall not be liable 
                    for any indirect, incidental, special, or consequential damages arising from 
                    the use of our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medical Malpractice</h4>
                  <p className="text-gray-600">
                    Nothing in these terms shall limit our liability for medical malpractice or 
                    other claims arising from our provision of medical services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Services</h4>
                  <p className="text-gray-600">
                    We may use third-party services or contractors. We are not responsible for 
                    the actions or omissions of these third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h3>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of 
                the state in which HealthCare Plus is located. Any disputes arising from these 
                terms shall be resolved in the courts of competent jurisdiction in that state.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-2" />
                Contact Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  If you have questions about these terms and conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>HealthCare Plus</strong></p>
                  <p>123 Healthcare Mathura</p>
                  <p>MC 123</p>
                  <p>Phone: 6201047***</p>
                  <p>Email: pk2302861@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h3>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services after 
                changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Effective Date */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                These terms of service were last updated on January 1, 2024, and are effective as of that date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;