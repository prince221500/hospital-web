import React, { useState } from 'react';
import { Download, FileText, CreditCard, Shield, Clock, Phone, HelpCircle, AlertCircle } from 'lucide-react';

const PatientResources = () => {
  const [activeTab, setActiveTab] = useState('forms');

  const forms = [
    {
      name: 'New Patient Registration Form',
      description: 'Complete this form before your first visit',
      type: 'PDF',
      size: '2.1 MB'
    },
    {
      name: 'Medical History Form',
      description: 'Detailed medical and family history questionnaire',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      name: 'Insurance Verification Form',
      description: 'Insurance information and verification',
      type: 'PDF',
      size: '1.2 MB'
    },
    {
      name: 'Consent for Treatment',
      description: 'General consent form for medical treatment',
      type: 'PDF',
      size: '800 KB'
    },
    {
      name: 'HIPAA Privacy Notice',
      description: 'Privacy practices and patient rights',
      type: 'PDF',
      size: '1.5 MB'
    },
    {
      name: 'Financial Responsibility Form',
      description: 'Payment policies and financial agreements',
      type: 'PDF',
      size: '1.1 MB'
    }
  ];

  const faqs = [
    {
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment by calling (555) 123-4567, using our online booking system, or visiting our reception desk in person.'
    },
    {
      question: 'What should I bring to my appointment?',
      answer: 'Please bring a valid ID, insurance card, list of current medications, and any relevant medical records or test results.'
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept cash, credit cards, debit cards, and most major insurance plans. Payment plans are available for qualifying patients.'
    },
    {
      question: 'How can I access my medical records?',
      answer: 'You can request your medical records by completing a records request form at our medical records department or by calling (555) 123-4569.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Please provide at least 24 hours notice for appointment cancellations. Same-day cancellations may result in a fee.'
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, our emergency department is open 24/7. For life-threatening emergencies, please call 911.'
    },
    {
      question: 'How do I refill my prescription?',
      answer: 'You can refill prescriptions by calling our pharmacy at (555) 123-4571 or through your patient portal account.'
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, and many others. Please contact our billing department to verify your coverage.'
    }
  ];

  const insurancePlans = [
    {
      name: 'Medicare',
      description: 'Federal health insurance program for people 65 and older',
      coverage: 'Comprehensive medical coverage',
      contact: '1-800-MEDICARE'
    },
    {
      name: 'Medicaid',
      description: 'State and federal program for low-income individuals and families',
      coverage: 'Medical, dental, and vision coverage',
      contact: 'Contact your state office'
    },
    {
      name: 'Blue Cross Blue Shield',
      description: 'One of the largest health insurance networks',
      coverage: 'Varies by plan',
      contact: '1-800-BLUE-CROSS'
    },
    {
      name: 'Aetna',
      description: 'Health insurance and healthcare benefits',
      coverage: 'Medical, dental, and vision options',
      contact: '1-800-AETNA'
    },
    {
      name: 'Cigna',
      description: 'Global health insurance and healthcare services',
      coverage: 'Comprehensive health plans',
      contact: '1-800-CIGNA'
    },
    {
      name: 'United Healthcare',
      description: 'Health insurance and healthcare services',
      coverage: 'Medical and specialty care',
      contact: '1-800-UNITED'
    }
  ];

  const tabs = [
    { id: 'forms', label: 'Forms', icon: <FileText className="h-5 w-5" /> },
    { id: 'faqs', label: 'FAQs', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'insurance', label: 'Insurance', icon: <Shield className="h-5 w-5" /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Resources</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Everything you need to know for your visit and ongoing care
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'forms' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Forms</h2>
                <p className="text-xl text-gray-600">Download and complete these forms before your visit to save time</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {forms.map((form, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {form.type} • {form.size}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{form.name}</h3>
                    <p className="text-gray-600 mb-4">{form.description}</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notes</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Please complete all forms before your appointment</li>
                      <li>• Bring completed forms with you to your visit</li>
                      <li>• Forms can also be completed online through our patient portal</li>
                      <li>• Contact us if you need assistance with any forms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 ml-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 text-center">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Still Have Questions?</h3>
                  <p className="text-gray-600 mb-6">Can't find what you're looking for? Contact us directly.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Call Us</span>
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'insurance' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Information</h2>
                <p className="text-xl text-gray-600">We accept most major insurance plans</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {insurancePlans.map((plan, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{plan.description}</p>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Coverage: </span>
                        <span className="text-sm text-gray-600">{plan.coverage}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Contact: </span>
                        <span className="text-sm text-blue-600">{plan.contact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                    Payment Options
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Cash and credit cards accepted
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Payment plans available
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Online bill pay through patient portal
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Financial assistance programs
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Phone className="h-6 w-6 text-green-600 mr-2" />
                    Insurance Verification
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Please call our billing department to verify your insurance coverage and benefits before your appointment.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">6201047***</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PatientResources;