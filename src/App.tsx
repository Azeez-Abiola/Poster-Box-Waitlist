import React, { useState } from 'react';
import { Send, Package, Truck, Clock, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe-z33hRVE-QdcCV4ZBCPofhaJWvvWK6aSg8fVPCa4BmZiu2Q/viewform?usp=header';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically save the email to your backend
      // For now, we'll just simulate saving with localStorage
      localStorage.setItem('posterbox_email', email);
      
      setSubmitted(true);
      
      // Redirect to Google Form after a short delay
      setTimeout(() => {
        // Open Google Form in a new tab
        window.open(GOOGLE_FORM_URL, '_blank');
      }, 1500);
      
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      // You might want to show an error message to the user
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex justify-between items-center mb-16">
              <img src="./images/poster-logo.png" alt="Posterbox Logo" className="h-16 w-auto" />
              <button className="bg-white/10 text-white px-6 py-2 rounded-full font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors">
                Contact Us
              </button>
            </nav>
            
            <div className="max-w-4xl mx-auto text-center py-20">
              <h1 className="text-6xl font-bold mb-6 text-white animate-type-in">
                The Future of Logistics
              </h1>
              <p className="text-2xl mb-12 text-white/90 animate-type-in-delay-1">
                Join the waitlist for Posterbox - Your all-in-one logistics solution for seamless package delivery and tracking.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto animate-type-in-delay-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white/95 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 flex items-center gap-2 group"
                >
                  Join 
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              {submitted && (
                <div className="mt-4 text-white/90 flex items-center justify-center gap-2 animate-fade-in">
                  <CheckCircle size={20} />
                  <span>Thank you! Redirecting you to complete your registration...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="feature-card group">
            <div className="relative overflow-hidden rounded-3xl bg-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <Package className="text-red-700" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Smart Package Tracking</h3>
                <p className="text-gray-600 mb-6">Real-time tracking and notifications for all your deliveries in one place. Never lose sight of your packages again.</p>
                <div className="flex items-center text-red-700 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="feature-card group">
            <div className="relative overflow-hidden rounded-3xl bg-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <Truck className="text-red-700" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Efficient Delivery</h3>
                <p className="text-gray-600 mb-6">Optimized routes and professional drivers ensure quick and reliable delivery, saving you time and money.</p>
                <div className="flex items-center text-red-700 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="feature-card group">
            <div className="relative overflow-hidden rounded-3xl bg-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <Clock className="text-red-700" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-gray-600 mb-6">Round-the-clock customer support to assist you with any queries. We're always here when you need us.</p>
                <div className="flex items-center text-red-700 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-4">© 2025 Posterbox Logistics. All rights reserved.</p>
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:text-red-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;