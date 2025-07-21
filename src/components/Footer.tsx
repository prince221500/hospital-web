import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">HealthCare Plus</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing compassionate, high-quality healthcare services to our community for over 50 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Twitter className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Instagram className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Youtube className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link to="/appointments" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/patient-resources" className="text-gray-400 hover:text-white transition-colors">Patient Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">6201047***</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">pk2302861@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">123 Healthcare Mathura, MC 123</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Emergency: 24/7</span>
              </div>
              <div className="text-gray-400">
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 4:00 PM</p>
                <p>Sun: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 HealthCare Plus. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;