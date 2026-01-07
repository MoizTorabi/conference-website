import React from 'react';
import { MapPin, Plane, Train, Hotel, Navigation, Info } from 'lucide-react';

const VenuePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Venue & Accommodation</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Indian Institute of Technology Bombay (IIT Bombay), Powai, Mumbai
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Section 1: The Venue & Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Text Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <MapPin className="text-secondary" size={32} />
                The Campus
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The conference will be held at <span className="font-semibold">IIT Bombay</span>, one of India's premier academic institutions. Located in Powai, the campus is centrally located with excellent connectivity to the rest of Mumbai.
              </p>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Campus Access</h3>
                <p className="text-gray-600 mb-1">
                  • <strong>Main Gate:</strong> Best for taxis and private vehicles.
                </p>
                <p className="text-gray-600">
                  • <strong>Y-Point Gate:</strong> Convenient for local transport.
                </p>
              </div>
            </div>

            {/* Travel Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">How to Reach</h3>
              
              <div className="space-y-4">
                {/* Airport */}
                <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition hover:shadow-md">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Plane size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Air Travel</h4>
                    <p className="text-gray-600">
                      <strong>Mumbai International Airport (T2)</strong> is approximately 25 minutes away by taxi.
                    </p>
                  </div>
                </div>

                {/* Train */}
                <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition hover:shadow-md">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Train size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Train Stations</h4>
                    <p className="text-gray-600">
                      Nearest stations: <strong>Kanjurmarg</strong>, <strong>Ghatkopar</strong>, and <strong>Andheri</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed (Placeholder) */}
          <div className="bg-white p-2 rounded-xl shadow-lg h-[500px] relative overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3364654763!2d72.91278831490206!3d19.136324587053337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f42299479b%3A0x705c1d3f6d71d37b!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1679900000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="IIT Bombay Map"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Section 2: Accommodation */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex justify-center items-center gap-3">
            <Hotel className="text-secondary" size={32} />
            Accommodation Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition transform">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">IIT Bombay Guest House</h3>
              <p className="text-gray-600 mb-4">
                On-campus accommodation available for speakers and select delegates.
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-semibold">
                Limited Seats
              </span>
            </div>

            {/* Option 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition transform">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Partner Hotels</h3>
              <p className="text-gray-600">
                We have tied up with several hotels in the <strong>Powai</strong> area for discounted rates.
              </p>
            </div>

            {/* Option 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition transform">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Student Housing</h3>
              <p className="text-gray-600">
                Budget-friendly accommodation options are available near the campus for students.
              </p>
            </div>
          </div>

          {/* <div className="mt-10 bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3 max-w-2xl mx-auto">
            <Info className="text-primary flex-shrink-0" />
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> Detailed booking links and discount codes for partner hotels will be shared with registered participants via email soon.
            </p>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default VenuePage;