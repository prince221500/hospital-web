import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Clock, Phone, Calendar, Shield, Stethoscope } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized treatment plans"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Expert Team",
      description: "Board-certified physicians and healthcare professionals"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Award Winning",
      description: "Recognized for excellence in patient care and safety"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services available"
    }
  ];

  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "Primary Care",
      description: "Comprehensive healthcare for all family members"
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "Cardiology",
      description: "Advanced heart care and cardiovascular treatments"
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Providing exceptional healthcare services with compassion, expertise, and state-of-the-art technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Emergency: 6201047***</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">General: 6201047***</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <Link to="/appointments" className="font-semibold hover:underline">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HealthCare Plus?</h2>
            <p className="text-xl text-gray-600">Excellence in healthcare delivery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive healthcare solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Take the first step towards better health</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointments"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Appointment
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;