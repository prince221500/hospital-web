import React from 'react';
import { Award, Users, Heart, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Years of Service' },
    { number: '100+', label: 'Healthcare Professionals' },
    { number: '50,000+', label: 'Patients Served Annually' },
    { number: '24/7', label: 'Emergency Services' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      specialization: 'Internal Medicine',
      education: 'MD, Harvard Medical School',
      experience: '20+ years',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Director of Cardiology',
      specialization: 'Cardiology',
      education: 'MD, Johns Hopkins University',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Emergency Medicine',
      specialization: 'Emergency Medicine',
      education: 'MD, Stanford University',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About HealthCare Plus</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A legacy of compassionate care, medical excellence, and community service
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At HealthCare Plus, our mission is to provide exceptional, compassionate healthcare services 
                that improve the health and well-being of our community. We are committed to delivering 
                patient-centered care using the latest medical technologies and evidence-based practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700">Compassionate Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">Medical Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Community Focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">24/7 Availability</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Hospital building" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-xl text-gray-600">Five decades of serving our community</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1974</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundation</h3>
                  <p className="text-gray-600">
                    HealthCare Plus was founded with a vision to provide accessible, quality healthcare 
                    to our growing community. Starting with just 50 beds and a dedicated team of 20 professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1990</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Major expansion added specialized departments including cardiology, oncology, 
                    and emergency services, doubling our capacity to serve the community.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Era</h3>
                  <p className="text-gray-600">
                    Today, we continue to evolve with state-of-the-art technology, expanded services, 
                    and a commitment to excellence that has made us a trusted healthcare partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts leading our medical excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.specialization}</p>
                <p className="text-sm text-gray-500 mb-1">{member.education}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;