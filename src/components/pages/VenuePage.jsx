// import React from 'react';
// import { MapPin, Plane, Train, Hotel, Navigation, Info } from 'lucide-react';

// const VenuePage = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
      
//       {/* Page Header */}
//       <div className="bg-primary text-white py-16 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Venue & Accommodation</h1>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             Indian Institute of Technology Bombay (IIT Bombay), Powai, Mumbai
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-12">
        
//         {/* Section 1: The Venue & Map */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
//           {/* Text Details */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
//                 <MapPin className="text-secondary" size={32} />
//                 The Campus
//               </h2>
//               <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                 The conference will be held at <span className="font-semibold">IIT Bombay</span>, one of India's premier academic institutions. Located in Powai, the campus is centrally located with excellent connectivity to the rest of Mumbai.
//               </p>
              
//               <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
//                 <h3 className="font-bold text-gray-800 mb-2">Campus Access</h3>
//                 <p className="text-gray-600 mb-1">
//                   • <strong>Main Gate:</strong> Best for taxis and private vehicles.
//                 </p>
//                 <p className="text-gray-600">
//                   • <strong>Y-Point Gate:</strong> Convenient for local transport.
//                 </p>
//               </div>
//             </div>

//             {/* Travel Info */}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">How to Reach</h3>
              
//               <div className="space-y-4">
//                 {/* Airport */}
//                 <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition hover:shadow-md">
//                   <div className="bg-blue-50 p-3 rounded-full text-primary">
//                     <Plane size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800">Air Travel</h4>
//                     <p className="text-gray-600">
//                       <strong>Mumbai International Airport (T2)</strong> is approximately 25 minutes away by taxi.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Train */}
//                 <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition hover:shadow-md">
//                   <div className="bg-blue-50 p-3 rounded-full text-primary">
//                     <Train size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800">Train Stations</h4>
//                     <p className="text-gray-600">
//                       Nearest stations: <strong>Kanjurmarg</strong>, <strong>Ghatkopar</strong>, and <strong>Andheri</strong>.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Map Embed (Placeholder) */}
//           <div className="bg-white p-2 rounded-xl shadow-lg h-[500px] relative overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3364654763!2d72.91278831490206!3d19.136324587053337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f42299479b%3A0x705c1d3f6d71d37b!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1679900000000!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="IIT Bombay Map"
//               className="rounded-lg"
//             ></iframe>
//           </div>
//         </div>

//         {/* Section 2: Accommodation */}
//         <div className="border-t border-gray-200 pt-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex justify-center items-center gap-3">
//             <Hotel className="text-secondary" size={32} />
//             Accommodation Options
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Option 1 */}
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition transform">
//               <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">1</div>
//               <h3 className="font-bold text-xl text-gray-800 mb-3">IIT Bombay Guest House</h3>
//               <p className="text-gray-600 mb-4">
//                 On-campus accommodation available for speakers and select delegates.
//               </p>
//               <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-semibold">
//                 Limited Seats
//               </span>
//             </div>

//             {/* Option 2 */}
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition transform">
//               <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">2</div>
//               <h3 className="font-bold text-xl text-gray-800 mb-3">Partner Hotels</h3>
//               <p className="text-gray-600">
//                 We have tied up with several hotels in the <strong>Powai</strong> area for discounted rates.
//               </p>
//             </div>

//             {/* Option 3 */}
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition transform">
//               <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">3</div>
//               <h3 className="font-bold text-xl text-gray-800 mb-3">Student Housing</h3>
//               <p className="text-gray-600">
//                 Budget-friendly accommodation options are available near the campus for students.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default VenuePage;



import React from 'react';
import { MapPin, Plane, Train, Hotel, ExternalLink, Star } from 'lucide-react';

const VenuePage = () => {
  
  // Hotel Data with Links and Images
  const hotels = [
    {
      name: "Meluha The Fern",
      address: "Hiranandani Gardens, Powai",
      rating: "5-Star",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      link: "https://www.guestreservations.com/meluha-the-fern/booking?utm_source=google&utm_medium=cpc&utm_campaign=990875508&gad_source=1&gad_campaignid=990875508&gbraid=0AAAAADiMQMbPvfbKUswzuB7quZ5pbeyU1&gclid=Cj0KCQiAnJHMBhDAARIsABr7b843_vaWbZoDJHybyLo2UxrhhQ4-Ps1-V0nsdg9dHPNUHgbKyw029KAaAuNNEALw_wcB"
    },
    {
      name: "The Westin Mumbai Powai Lake",
      address: "2 & 3B, Near Chinmayanand Ashram, Powai",
      rating: "Luxury",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
      link: "https://www.marriott.com/en-us/hotels/bomww-the-westin-mumbai-powai-lake/overview/"
    },
    {
      name: "The Beatle Hotel",
      address: "JM Road, Powai",
      rating: "4-Star",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600",
      link: "https://www.beatlehotels.com/"
    },
    {
      name: "Rodas - An Ecotel Boutique Hotel",
      address: "Central Avenue, Hiranandani Gardens, Powai",
      rating: "Boutique",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600",
      link: "https://www.fernhotels.com/rodas-an-ecotel-hotel-mumbai"
    },
    {
      name: "Lakeside Chalet, Marriott",
      address: "Near Chinmayanand Ashram, Powai",
      rating: "Apartments",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=600",
      link: "https://www.marriott.com/en-us/hotels/bomer-lakeside-chalet-mumbai-marriott-executive-apartments/overview/"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Venue & Accommodation</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Indian Institute of Technology Bombay (IIT Bombay), Powai, Mumbai
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Section 1: The Venue & Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Text Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <MapPin className="text-secondary" size={32} />
                The Venue
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The conference will be held at the <span className="font-semibold">F.C. Kohli Auditorium, Ground Floor of Kanwal Rekhi Building (KReSIT), Department of CSE at IIT Bombay, Powai, Mumbai, Maharashtra 400076</span>
. This state-of-the-art facility is located in the heart of the Computer Science department.
              </p>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Campus Access</h3>
                <p className="text-gray-600 mb-2">
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
                <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition hover:shadow-md">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Plane size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Air Travel</h4>
                    <p className="text-gray-600 text-sm">
                      <strong>Mumbai International Airport(T2).</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition hover:shadow-md">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Train size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Train Stations</h4>
                    <p className="text-gray-600 text-sm">
                      Nearest: <strong>Kanjurmarg</strong>, <strong>Ghatkopar</strong>, <strong>Andheri.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="bg-white p-2 rounded-xl shadow-lg h-[500px] relative overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3370392394237!2d72.9124433149028!3d19.136701987053074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f69436382b%3A0x6295247963d3b76!2sKReSIT%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1689234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="KReSIT IIT Bombay Map"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Section 2: Accommodation */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center flex justify-center items-center gap-3">
            {/* <Hotel className="text-secondary" size={32} /> */}
            Accommodation Options
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We recommend the following hotels located near the IIT Bombay campus in Powai.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                
                {/* Hotel Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    {hotel.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 leading-tight">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 flex items-start gap-1">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                    {hotel.address}
                  </p>

                  {/* Button */}
                  <a 
                    href={hotel.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-700 border border-gray-200 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-transparent transition-all group"
                  >
                    Visit Website
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VenuePage;