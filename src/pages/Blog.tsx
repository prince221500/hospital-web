import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '10 Tips for Maintaining Heart Health',
      excerpt: 'Learn simple lifestyle changes that can significantly improve your cardiovascular health and reduce the risk of heart disease.',
      category: 'Cardiology',
      author: 'Dr. Michael Chen',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'The Importance of Regular Health Screenings',
      excerpt: 'Early detection can save lives. Discover which screenings you should prioritize based on your age and risk factors.',
      category: 'Preventive Care',
      author: 'Dr. Sarah Johnson',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Understanding Mental Health: Breaking the Stigma',
      excerpt: 'Mental health is just as important as physical health. Learn how to recognize signs and seek appropriate help.',
      category: 'Mental Health',
      author: 'Dr. Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3958488/pexels-photo-3958488.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Pediatric Nutrition: Building Healthy Eating Habits',
      excerpt: 'Guide for parents on establishing nutritious eating patterns that will benefit children throughout their lives.',
      category: 'Pediatrics',
      author: 'Dr. Lisa Thompson',
      date: 'March 8, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Managing Diabetes: A Comprehensive Guide',
      excerpt: 'Essential information for diabetes management, including diet, exercise, monitoring, and medication compliance.',
      category: 'Endocrinology',
      author: 'Dr. David Kim',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Recognizing Stroke Symptoms: Act F.A.S.T.',
      excerpt: 'Time is critical when it comes to stroke. Learn the warning signs and what to do in an emergency situation.',
      category: 'Emergency Medicine',
      author: 'Dr. Robert Wilson',
      date: 'March 3, 2024',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/236604/pexels-photo-236604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Seasonal Allergies: Prevention and Treatment',
      excerpt: 'Prepare for allergy season with effective strategies for prevention and treatment of common seasonal allergies.',
      category: 'Allergy & Immunology',
      author: 'Dr. Sarah Johnson',
      date: 'March 1, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'The Benefits of Regular Exercise for All Ages',
      excerpt: 'Discover how physical activity can improve your health at every stage of life and tips for getting started.',
      category: 'Wellness',
      author: 'Dr. Michael Chen',
      date: 'February 28, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const categories = [
    'All',
    'Cardiology',
    'Preventive Care',
    'Mental Health',
    'Pediatrics',
    'Emergency Medicine',
    'Wellness'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert health tips, news, and awareness articles from our medical professionals
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for the latest health tips and news</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;