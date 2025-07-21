import React from 'react';
import { Heart, Brain, Bone, Eye, Baby, Stethoscope, ShieldCheck, Zap } from 'lucide-react';

const Services = () => {
  const departments = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      name: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatments, and preventive care.',
      services: ['Cardiac Catheterization', 'Echocardiography', 'Stress Testing', 'Pacemaker Implantation']
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      name: 'Neurology',
      description: 'Expert diagnosis and treatment of nervous system disorders.',
      services: ['Stroke Care', 'Epilepsy Treatment', 'Neurological Testing', 'Memory Disorders']
    },
    {
      icon: <Bone className="h-12 w-12 text-orange-500" />,
      name: 'Orthopedics',
      description: 'Advanced treatments for bone, joint, and muscle conditions.',
      services: ['Joint Replacement', 'Sports Medicine', 'Arthroscopy', 'Trauma Care']
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-500" />,
      name: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      services: ['Cataract Surgery', 'Retinal Care', 'Glaucoma Treatment', 'LASIK Surgery']
    },
    {
      icon: <Baby className="h-12 w-12 text-pink-500" />,
      name: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      services: ['Well-Child Visits', 'Immunizations', 'Developmental Screening', 'Pediatric Surgery']
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-green-500" />,
      name: 'Internal Medicine',
      description: 'Primary care for adults with focus on prevention and wellness.',
      services: ['Annual Physicals', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings']
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-red-600" />,
      name: 'Emergency Medicine',
      description: '24/7 emergency care for urgent and life-threatening conditions.',
      services: ['Trauma Care', 'Urgent Care', 'Critical Care', 'Emergency Surgery']
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      name: 'Radiology',
      description: 'Advanced imaging services for accurate diagnosis.',
      services: ['CT Scans', 'MRI', 'X-rays', 'Ultrasound', 'Mammography']
    }
  ];

  const specialties = [
    'Oncology & Cancer Care',
    'Gastroenterology',
    'Pulmonology',
    'Dermatology',
    'Urology',
    'Obstetrics & Gynecology',
    'Psychiatry',
    'Anesthesiology',
    'Pathology',
    'Physical Therapy',
    'Pharmacy Services',
    'Laboratory Services'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive healthcare services delivered with expertise and compassion
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Main Departments</h2>
            <p className="text-xl text-gray-600">Specialized care across multiple medical disciplines</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{dept.name}</h3>
                <p className="text-gray-600 mb-6 text-center">{dept.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Services Include:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {dept.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Specialties</h2>
            <p className="text-xl text-gray-600">Extended healthcare services for comprehensive care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-900 font-medium">{specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Excellence</h2>
            <p className="text-xl text-gray-600">State-of-the-art facilities and advanced medical technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Latest medical equipment and diagnostic tools</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Care</h3>
              <p className="text-gray-600">Accredited programs and safety protocols</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Specialists</h3>
              <p className="text-gray-600">Board-certified physicians and specialists</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Care</h3>
              <p className="text-gray-600">Round-the-clock emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Medical Care?</h2>
          <p className="text-xl mb-8">Our expert team is ready to help you with all your healthcare needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;