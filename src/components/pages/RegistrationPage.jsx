import React from 'react';
import { Check, Calendar, CreditCard, User, Briefcase, GraduationCap, Globe } from 'lucide-react';

const RegistrationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Registration</h1>
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
            <Calendar size={16} />
            Opens January 2026
          </div>
          <p className="mt-6 text-xl text-blue-100">
            Secure your spot at the Indo-German Conference on Critical Computation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10">
        
        {/* Registration Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Regular */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:-translate-y-2 transition transform">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <User size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Regular Participant</h3>
            <p className="text-gray-500 text-sm mb-6">For faculty, researchers, and general attendees.</p>
            <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition">
              Notify Me
            </button>
          </div>

          {/* Card 2: Student */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:-translate-y-2 transition transform">
            <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-4">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">PhD Student</h3>
            <p className="text-gray-500 text-sm mb-6"> discounted rates for full-time research scholars.</p>
            <button className="w-full py-3 rounded-lg border-2 border-green-500 text-green-600 font-bold hover:bg-green-50 transition">
              Notify Me
            </button>
          </div>

          {/* Card 3: Industry */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-600 hover:-translate-y-2 transition transform">
            <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center text-indigo-600 mb-4">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Industry Delegate</h3>
            <p className="text-gray-500 text-sm mb-6">For professionals from corporate & R&D sectors.</p>
            <button className="w-full py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-50 transition">
              Notify Me
            </button>
          </div>

          {/* Card 4: International */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600 hover:-translate-y-2 transition transform">
            <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">International</h3>
            <p className="text-gray-500 text-sm mb-6">For attendees joining from outside India.</p>
            <button className="w-full py-3 rounded-lg border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-50 transition">
              Notify Me
            </button>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Registration Includes</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Check size={20} strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-700">Access to all plenary & technical sessions</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Check size={20} strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-700">Official conference kit & materials</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Check size={20} strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-700">Networking dinners & cultural events</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Check size={20} strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-700">Daily tea/coffee and lunch</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Check size={20} strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-700">Certificate of Participation</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                <CreditCard size={20} strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-700">Payment support via Credit Card / UPI</span>
            </div>
          </div>
        </div>

        {/* Note on Limited Seats */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 bg-gray-100 inline-block px-6 py-3 rounded-full text-sm">
            <span className="font-bold text-red-500">* Note:</span> Limited seats available for the Young Researchers Forum.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegistrationPage;