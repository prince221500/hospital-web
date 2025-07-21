import React, { useState } from 'react';
import { Star, User, Calendar, ThumbsUp, MessageCircle } from 'lucide-react';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    title: '',
    review: '',
    department: ''
  });

  const [showForm, setShowForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      title: 'Exceptional Care and Service',
      review: 'The staff at HealthCare Plus went above and beyond during my recent surgery. Dr. Chen and his team were professional, compassionate, and kept me well-informed throughout the entire process.',
      department: 'Cardiology',
      date: 'March 18, 2024',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      name: 'Michael R.',
      rating: 5,
      title: 'Outstanding Emergency Care',
      review: 'When I arrived at the emergency department with severe chest pain, the team acted quickly and professionally. Dr. Rodriguez and the nursing staff provided excellent care that likely saved my life.',
      department: 'Emergency Medicine',
      date: 'March 15, 2024',
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      name: 'Jennifer L.',
      rating: 4,
      title: 'Great Pediatric Care',
      review: 'Dr. Thompson is wonderful with children. My daughter was nervous about her appointment, but the staff made her feel comfortable and at ease. The waiting room is also very child-friendly.',
      department: 'Pediatrics',
      date: 'March 12, 2024',
      helpful: 15,
      verified: true
    },
    {
      id: 4,
      name: 'David K.',
      rating: 5,
      title: 'Comprehensive Orthopedic Care',
      review: 'After my knee replacement surgery, the rehabilitation team helped me get back on my feet faster than I expected. The physical therapy department is top-notch.',
      department: 'Orthopedics',
      date: 'March 10, 2024',
      helpful: 6,
      verified: true
    },
    {
      id: 5,
      name: 'Lisa W.',
      rating: 5,
      title: 'Excellent Primary Care',
      review: 'Dr. Johnson is an excellent primary care physician. She takes time to listen to my concerns and explains everything clearly. The online appointment booking system is also very convenient.',
      department: 'Internal Medicine',
      date: 'March 8, 2024',
      helpful: 10,
      verified: true
    },
    {
      id: 6,
      name: 'Robert T.',
      rating: 4,
      title: 'Professional Neurology Services',
      review: 'Dr. Wilson provided excellent care for my neurological condition. The diagnostic testing was thorough and the treatment plan was effective.',
      department: 'Neurology',
      date: 'March 5, 2024',
      helpful: 7,
      verified: true
    }
  ];

  const stats = [
    { value: '4.8/5', label: 'Average Rating' },
    { value: '98%', label: 'Recommend Us' },
    { value: '1,247', label: 'Patient Reviews' },
    { value: '24/7', label: 'Support Available' }
  ];

  const departments = [
    'Internal Medicine',
    'Cardiology',
    'Orthopedics',
    'Pediatrics',
    'Neurology',
    'Emergency Medicine',
    'Dermatology',
    'Ophthalmology'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Review:', newReview);
    setShowForm(false);
    setNewReview({ name: '', rating: 5, title: '', review: '', department: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Reviews</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Real feedback from our patients about their healthcare experience
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form */}
      {showForm ? (
        <section className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={newReview.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    name="department"
                    value={newReview.department}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating *</label>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 ${i < newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Review Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={newReview.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Review *</label>
                  <textarea
                    name="review"
                    value={newReview.review}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your experience..."
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Write a Review
            </button>
          </div>
        </section>
      )}

      {/* Reviews List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Patient Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{review.name}</span>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Verified Patient
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{review.department}</span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{review.title}</h3>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Helpful ({review.helpful})</span>
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
          <h2 className="text-3xl font-bold mb-4">Experience Quality Healthcare</h2>
          <p className="text-xl mb-8">Join thousands of satisfied patients who trust us with their health</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;