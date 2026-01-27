// Option 01

// import React from 'react';
// import { Check, Calendar, CreditCard, ArrowRight, ExternalLink } from 'lucide-react';

// const RegistrationPage = () => {

//   // --- HANDLER: Opens your Google Form ---
//   const handleRegister = () => {
//     // Replace this string with your ACTUAL Google Form link
//     const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSczhar1HnfeyYMnM_h5fuNW2sRWMgvBsUUGkV6n2Uvt2Y4RNw/viewform?usp=header";
//     window.open(formLink, "_blank");
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen pb-20">

//       {/* Page Header */}
//       <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 px-6 relative overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
//           <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
//           <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-400 blur-3xl"></div>
//         </div>

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wide mb-6 shadow-lg">
//             <Calendar size={16} />
//             Registration Open
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             Secure Your Spot
//           </h1>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
//             Join leading researchers and industry experts at the Indo-German Conference on Critical Computation.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-20">

//         {/* MAIN REGISTRATION CARD */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">

//           {/* Left Side: Info */}
//           <div className="p-8 md:p-10 flex-1">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Conference Registration</h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Please complete the registration form to confirm your participation. This single form covers all categories:
//             </p>

//             <div className="flex flex-wrap gap-2 mb-8">
//               {['Regular Participant', 'PhD Student', 'Industry Delegate', 'International'].map((tag) => (
//                 <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <div className="flex items-center gap-2 text-sm text-gray-500 italic">
//               * Payment details will be shared after form submission.
//             </div>
//           </div>

//           {/* Right Side: Action Area */}
//           <div className="bg-gray-50 p-8 md:p-10 flex flex-col justify-center items-center border-l border-gray-100 md:w-80">
//             <button
//               onClick={handleRegister}
//               className="group w-full bg-primary text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
//             >
//               Register Now
//               <ExternalLink className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             <p className="mt-4 text-center text-sm text-gray-500">
//               Takes approx. 2 minutes
//             </p>
//           </div>
//         </div>

//         {/* What's Included Section */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Your Registration Includes</h3>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
//               <div className="bg-green-100 p-2 rounded-full text-green-600 flex-shrink-0 mt-1">
//                 <Check size={20} strokeWidth={3} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-800">All Access Pass</h4>
//                 <p className="text-sm text-gray-600">Full access to all plenary talks, technical sessions, and panels.</p>
//               </div>
//             </div>

//             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
//               <div className="bg-green-100 p-2 rounded-full text-green-600 flex-shrink-0 mt-1">
//                 <Check size={20} strokeWidth={3} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-800">Conference Kit</h4>
//                 <p className="text-sm text-gray-600">Official bag, notepad, pen, and proceedings summary.</p>
//               </div>
//             </div>

//             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
//               <div className="bg-green-100 p-2 rounded-full text-green-600 flex-shrink-0 mt-1">
//                 <Check size={20} strokeWidth={3} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-800">Food & Beverages</h4>
//                 <p className="text-sm text-gray-600">Includes daily lunch, tea/coffee breaks, and the gala dinner.</p>
//               </div>
//             </div>

//             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
//               <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 flex-shrink-0 mt-1">
//                 <CreditCard size={20} strokeWidth={3} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-800">Flexible Payment</h4>
//                 <p className="text-sm text-gray-600">Support for Credit Card, UPI, and Institutional Transfers.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;

// Option 02

import React from "react";
import { CheckCircle2, ArrowRight, Calendar, Info } from "lucide-react";

const RegistrationPage = () => {
  const handleRegister = () => {
    // Replace with actual link
    const formLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSflxe2G-R33lI0tDbeFB_dWUxsqtp_J0qeeD9eUnKQNwB9biQ/viewform?usp=publish-editor";
    window.open(formLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* LEFT SIDE: Visual & Context */}
      <div className="md:w-5/12 bg-blue-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-900 to-black"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-8">
            <Calendar size={14} />
            Registration Open
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Join the Global Conversation on Critical Computation.
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed">
            IIT Bombay & Goethe University Frankfurt invite you to explore the
            future of AI and systems science.
          </p>
        </div>

        <div className="relative z-10 mt-12">
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>© IGCCC 2026</span>
            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            <span>Mumbai, India</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Action & Details */}
      <div className="md:w-7/12 p-8 md:p-16 overflow-y-auto bg-gray-50 flex flex-col justify-center">
        <div className="max-w-lg mx-auto w-full">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Registration Portal
            </h2>
            <p className="text-gray-600">
              Complete the form below to secure your seat.
            </p>
          </div>

          {/* The Main Action Box */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg text-primary">
                <Info size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  One Form for All
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Regular, PhD, Industry, and International delegates use the
                  same portal.
                </p>
              </div>
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-primary text-white text-lg font-bold py-4 rounded-xl shadow-md hover:bg-blue-800 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              Fill Registration Form
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Takes approx. 2 minutes
            </p>
          </div>

          {/* Benefits List (Clean Vertical) */}
          {/* <div className="space-y-4">
            <h3 className="font-bold text-gray-900 mb-4">What's Included?</h3>
            {[
              "Access to all 4 days of sessions & panels",
              "Official Conference Kit & Materials",
              "Daily Lunch, High-Tea & Networking Dinner",
              "Certificate of Participation"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
