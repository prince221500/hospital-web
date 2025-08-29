import React from 'react';
import { Clock, MapPin, Phone, Calendar } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Internal Medicine',
      qualifications: 'MD, Harvard Medical School, Board Certified Internal Medicine',
      experience: '20+ years',
      languages: ['English', 'Spanish','Bhojpuri'],
      consultationTimes: {
        monday: '9:00 AM - 5:00 PM',
        tuesday: '9:00 AM - 5:00 PM',
        wednesday: '9:00 AM - 5:00 PM',
        thursday: '9:00 AM - 5:00 PM',
        friday: '9:00 AM - 3:00 PM',
        saturday: 'Closed',
        sunday: 'Closed'
      },
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Johnson specializes in preventive care and chronic disease management. She is committed to providing comprehensive, patient-centered care.',
      phone: '6201047***'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      qualifications: 'MD, Johns Hopkins University, Board Certified Cardiology',
      experience: '15+ years',
      languages: ['English', 'Mandarin'],
      consultationTimes: {
        monday: '8:00 AM - 4:00 PM',
        tuesday: '8:00 AM - 4:00 PM',
        wednesday: '8:00 AM - 4:00 PM',
        thursday: '8:00 AM - 4:00 PM',
        friday: '8:00 AM - 2:00 PM',
        saturday: 'Closed',
        sunday: 'Closed'
      },
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Chen is an expert in interventional cardiology and heart disease prevention. He has performed thousands of cardiac procedures.',
      phone: '6201047***'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Emergency Medicine',
      qualifications: 'MD, Stanford University, Board Certified Emergency Medicine',
      experience: '12+ years',
      languages: ['English', 'Spanish', 'French'],
      consultationTimes: {
        monday: '24/7 Emergency',
        tuesday: '24/7 Emergency',
        wednesday: '24/7 Emergency',
        thursday: '24/7 Emergency',
        friday: '24/7 Emergency',
        saturday: '24/7 Emergency',
        sunday: '24/7 Emergency'
      },
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Rodriguez leads our emergency department with expertise in trauma care and critical care medicine.',
      phone: '6201047***'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Orthopedic Surgery',
      qualifications: 'MD, Mayo Clinic, Board Certified Orthopedic Surgery',
      experience: '18+ years',
      languages: ['English', 'Korean'],
      consultationTimes: {
        monday: '7:00 AM - 3:00 PM',
        tuesday: '7:00 AM - 3:00 PM',
        wednesday: '7:00 AM - 3:00 PM',
        thursday: '7:00 AM - 3:00 PM',
        friday: '7:00 AM - 1:00 PM',
        saturday: 'Closed',
        sunday: 'Closed'
      },
      image: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Kim specializes in joint replacement surgery and sports medicine. He has helped thousands of patients regain mobility.',
      phone: '6201047***'
    },
    {
      name: 'Dr. Lisa Thompson',
      specialty: 'Pediatrics',
      qualifications: 'MD, Children\'s Hospital Boston, Board Certified Pediatrics',
      experience: '14+ years',
      languages: ['English'],
      consultationTimes: {
        monday: '8:00 AM - 6:00 PM',
        tuesday: '8:00 AM - 6:00 PM',
        wednesday: '8:00 AM - 6:00 PM',
        thursday: '8:00 AM - 6:00 PM',
        friday: '8:00 AM - 4:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      },
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Thompson is passionate about child health and development. She provides comprehensive care from infancy through adolescence.',
      phone: '6201047***'
    },
    {
      name: 'Dr. Robert Wilson',
      specialty: 'Neurology',
      qualifications: 'MD, Cleveland Clinic, Board Certified Neurology',
      experience: '22+ years',
      languages: ['English', 'German'],
      consultationTimes: {
        monday: '9:00 AM - 5:00 PM',
        tuesday: '9:00 AM - 5:00 PM',
        wednesday: '9:00 AM - 5:00 PM',
        thursday: '9:00 AM - 5:00 PM',
        friday: '9:00 AM - 3:00 PM',
        saturday: 'Closed',
        sunday: 'Closed'
      },
      image: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Dr. Wilson is an expert in neurological disorders and has extensive experience in stroke care and epilepsy treatment.',
      phone: '6201047***'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Doctors</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Meet our team of experienced, board-certified physicians dedicated to your health
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{doctor.phone}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Languages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((lang, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Consultation Hours:</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Mon-Thu:</span>
                        <span>{doctor.consultationTimes.monday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday:</span>
                        <span>{doctor.consultationTimes.friday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend:</span>
                        <span>{doctor.consultationTimes.saturday}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Qualifications:</h4>
                    <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8">Our experienced doctors are here to provide you with the best care possible</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Online
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
