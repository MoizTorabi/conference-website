// import React, { useState } from "react";
// import { User, MapPin, ExternalLink } from "lucide-react";
// import { speakersData } from "../../data/speakers";

// const SpeakersPage = () => {
//   const [activeTab, setActiveTab] = useState("germany");

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Page Header */}
//       <div className="bg-primary text-white py-16 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Distinguished Speakers
//           </h1>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             Meet world-leading researchers from Germany, India, and the USA
//             joining us for IGCCC 2026.
//           </p>
//         </div>
//       </div>

//       {/* Filter Tabs */}
//       <div className="max-w-6xl mx-auto px-6 mt-12 mb-8">
//         <div className="flex justify-center">
//           <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
//             <button
//               onClick={() => setActiveTab("germany")}
//               className={`px-8 py-3 rounded-lg text-lg font-medium transition-all ${
//                 activeTab === "germany"
//                   ? "bg-primary text-white shadow-md"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               🇩🇪 Speakers from Germany
//             </button>
//             <button
//               onClick={() => setActiveTab("global")}
//               className={`px-8 py-3 rounded-lg text-lg font-medium transition-all ${
//                 activeTab === "global"
//                   ? "bg-primary text-white shadow-md"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               🌍 International Speakers
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Speakers Grid */}
//       <div className="max-w-6xl mx-auto px-6 pb-20">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {speakersData[activeTab].map((speaker, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full"
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
//                   <User size={24} />
//                 </div>
//                 {speaker.country && (
//                   <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
//                     {speaker.country}
//                   </span>
//                 )}
//               </div>

//               <h3 className="text-lg font-bold text-gray-900 mb-1">
//                 {speaker.name}
//               </h3>

//               <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
//                 <MapPin size={14} />
//                 {speaker.university}
//               </div>

//               <div className="border-t border-gray-100 pt-3 mb-4 flex-grow">
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {speaker.topics}
//                 </p>
//               </div>

//               {/* NEW BUTTON ADDED HERE */}
//               {speaker.profileUrl && (
//                 <a
//                   href={speaker.profileUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2 border border-blue-200 text-primary rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
//                 >
//                   View Profile
//                   <ExternalLink size={14} />
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpeakersPage;



import React from 'react';
import { User, MapPin } from 'lucide-react';
import { speakersData } from '../../data/speakers';

const SpeakersPage = () => {
  // Merge both lists into one single array
  const allSpeakers = [...speakersData.germany, ...speakersData.global];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Distinguished Speakers</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet world-leading researchers joining us for IGCCC 2026.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Single Grid for All Speakers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSpeakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>

      </div>
    </div>
  );
};

// Extracted Card Component
const SpeakerCard = ({ speaker }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group h-full flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <User size={24} />
      </div>
      {/* Show Country Badge if available (useful since they are mixed now) */}
      {speaker.country ? (
        <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {speaker.country}
        </span>
      ) : (
        /* Default to Germany if no country specified (based on your data structure) */
        <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
          Germany
        </span>
      )}
    </div>
    
    <h3 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
    
    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
      <MapPin size={14} className="flex-shrink-0" />
      <span>{speaker.university}</span>
    </div>
    
    <div className="border-t border-gray-100 pt-3 mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed">
        {speaker.topics}
      </p>
    </div>
  </div>
);

export default SpeakersPage;