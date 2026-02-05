import React from 'react';
import { Target, Users, Globe, ExternalLink, Sparkles, BookOpen } from 'lucide-react';
import { coChairs, committeeIndia, committeeGermany } from '../../data/organizers';

const AboutPage = () => {

  // --- COMPONENT: Small Pill Button ---
  const ProfileButton = ({ link }) => {
    if (!link) return null;
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
      >
        View Profile
        <ExternalLink size={10} />
      </a>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Conference</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Exploring computing as a transformative global technology—its capabilities, risks, and societal implications.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Left Column: Text Content (Takes up 2/3 of space) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Section 1: Strategic Initiative (Expanded) */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Globe className="text-secondary" />
              A Strategic Indo-German Initiative
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                The <strong>Indo–German Conference on Critical Computation</strong> marks the launch of a long-term cooperation between <span className="text-primary font-semibold">IIT Bombay</span> and <span className="text-primary font-semibold">Goethe University Frankfurt</span>. This event builds upon the successful legacy of Indo-German Spring Schools held between 2015 and 2020 at premier Indian institutions, expanding that foundation into a broader, interdisciplinary contex.
              </p>
              
              <p>
                This partnership unites two cutting-edge research centers: Goethe University's newly founded <strong>Center for Critical Computational Studies (C3S)</strong>, which integrates diverse disciplines ranging from computer science to the humanities, and IIT Bombay's <strong>Center for Machine Intelligence and Data Science (C-MInDS)</strong>, a cross-disciplinary hub addressing real-world problems through AI.
              </p>

              <p>
                By bringing together over 20 plenary speakers from Germany, India, and the USA, the conference aims to move beyond theoretical discourse. It serves as a launchpad for a formal <strong>Memorandum of Understanding (MoU)</strong> in 2026, facilitating future faculty exchanges, joint PhD programs, and collaborative workshops.
              </p>
            </div>
          </section>

          {/* Section 2: Critical Computation (Converted to Narrative) */}
          <section>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-lg space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Target className="text-secondary" />
              Defining "Critical Computation"
            </h2>
              <p>
                Algorithms and computing systems have become key technologies shaping all areas of modern society. However, this global technology bears a "dual use" nature—it is immensely beneficial to mankind but also carries risks and threats that are often unpredictable. The conference addresses this by framing <strong>"Critical Computation"</strong> through two distinct but interconnected lenses.
              </p>

              <p>
                First, we view computation as a tool to identify and model <strong>critical points</strong>—the precise transitions or "tipping points" where a system undergoes a significant shift in behavior. Whether analyzing financial contagion in complex networks or modeling climate tipping points in ocean and earth systems, we aim to develop rigorous algorithmic techniques to predict and manage these transformative moments.
              </p>

              <p>
                Second, the term demands a <strong>critical inquiry</strong> into the technology itself. As AI advances at unprecedented speeds, we must look beyond technical performance to assess the ethical, legal, and socio-technical frameworks that govern it. This involves challenging mainstream "ethics washing" and exploring how AI transforms normative orders like the administration of justice.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-blue-900 text-base font-medium">
                    The conference unites these threads, seeking to understand how we can harness the power of AI and network science while remaining vigilant about the critical boundaries that sustain our environment and society.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Organizers Sidebar (Unchanged) */}
        <div className="space-y-8">
          
          {/* Co-Chairs */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Users className="text-secondary" />
              Conference Co-Chairs
            </h3>
            <div className="space-y-6">
              {coChairs.map((person, index) => (
                <div key={index} className={index !== 0 ? "border-t border-gray-100 pt-4" : ""}>
                  <p className="font-bold text-lg text-gray-900">{person.name}</p>
                  <p className="text-primary text-sm font-medium mb-1">{person.org}</p>
                  <ProfileButton link={person.link} />
                </div>
              ))}
            </div>
          </div>

          {/* India Committee */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Organizing Committee (India)</h3>
            <ul className="space-y-5">
              {committeeIndia.map((person, index) => (
                <li key={index} className="flex flex-col items-start">
                  <span className="font-semibold text-gray-700">{person.name}</span>
                  <span className="text-xs text-gray-500 mb-1">{person.org}</span>
                  <ProfileButton link={person.link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Germany Committee */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Organizing Committee (Germany)</h3>
            <ul className="space-y-5">
              {committeeGermany.map((person, index) => (
                <li key={index} className="flex flex-col items-start">
                  <span className="font-semibold text-gray-700">{person.name}</span>
                  <span className="text-xs text-gray-500 mb-1">{person.org}</span>
                  <ProfileButton link={person.link} />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;




// import React from 'react';
// import { Target, Users, Globe, ExternalLink, BookOpen, History } from 'lucide-react';
// import { coChairs, committeeIndia, committeeGermany } from '../../data/organizers';

// const AboutPage = () => {

//   // --- COMPONENT: Small Pill Button ---
//   const ProfileButton = ({ link }) => {
//     if (!link) return null;
//     return (
//       <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200">
//         View Profile <ExternalLink size={10} />
//       </a>
//     );
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="bg-primary text-white py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Conference</h1>
//           <p className="text-xl text-blue-100 max-w-2xl">
//             Exploring computing as a transformative global technology—its capabilities, risks, and societal implications.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
//         {/* LEFT COLUMN: Main Content */}
//         <div className="lg:col-span-2 space-y-12">
          
//           {/* Section 1: Strategic Initiative */}
//           <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//               <Globe className="text-secondary" />
//               A Strategic Indo-German Alliance
//             </h2>
//             <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
//               <p>
//                 The <strong>Indo–German Conference on Critical Computation</strong> represents the culmination of a decade of academic exchange. It extends the successful series of Indo-German Spring Schools held between 2015 and 2020 at institutions like ISI Kolkata, IIT Madras, and IIT Bombay. This 2026 conference aims to formalize these efforts into a long-term Memorandum of Understanding (MoU).
//               </p>
//               <p>
//                 This initiative bridges two powerhouse research centers. On the German side, <strong>Goethe University’s Center for Critical Computational Studies (C3S)</strong> brings together over 60 researchers ranging from computer science to law and life sciences. On the Indian side, <strong>IIT Bombay’s Centre for Machine Intelligence and Data Science (C-MInDS)</strong> contributes its deep expertise in AI systems and real-world deployment.
//               </p>
//               <p>
//                 By uniting these ecosystems, we aim to create a permanent platform for faculty exchange, joint PhD supervision, and cross-border research projects that address the grand challenges of the digital age.
//               </p>
//             </div>
//           </section>

//           {/* Section 2: Critical Computation */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//               <Target className="text-secondary" />
//               Defining "Critical Computation"
//             </h2>
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-lg space-y-6">
//               <p>
//                 The term "Critical Computation" is not just a title; it is a scientific directive. It refers to the use of advanced computational methods to identify, analyze, and model <strong>critical points</strong>—those specific transitions where a system undergoes a fundamental shift in behavior.
//               </p>
//               <p>
//                 In complex networks—whether they are biological ecosystems, financial markets, or climate systems—small changes can lead to irreversible consequences, often called "tipping points." Understanding these dynamics requires more than standard algorithms; it demands a rigorous, interdisciplinary approach that combines mathematical optimization with domain-specific insights from climate science and economics.
//               </p>
//               <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-2">
//                 <div className="flex items-start gap-3">
//                   <History className="text-blue-600 flex-shrink-0 mt-1" size={24} />
//                   <p className="text-blue-900 text-base font-medium">
//                     "Our goal is to understand how we can mathematically model these transitions before they occur, providing society with the tools to predict and manage critical systemic changes."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* RIGHT COLUMN: Organizers (Unchanged) */}
//         <div className="space-y-8">
//            {/* ... (Keep the Organizer code exactly as it is) ... */}
//            {/* I am omitting the Right Sidebar code here to save space, but you should keep it exactly as in your previous file */}
//            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
//             <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//               <Users className="text-secondary" />
//               Conference Co-Chairs
//             </h3>
//             <div className="space-y-6">
//               {coChairs.map((person, index) => (
//                 <div key={index} className={index !== 0 ? "border-t border-gray-100 pt-4" : ""}>
//                   <p className="font-bold text-lg text-gray-900">{person.name}</p>
//                   <p className="text-primary text-sm font-medium mb-1">{person.org}</p>
//                   <ProfileButton link={person.link} />
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* ... Add the other committees here ... */}
//            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Organizing Committee (India)</h3>
//             <ul className="space-y-5">
//               {committeeIndia.map((person, index) => (
//                 <li key={index} className="flex flex-col items-start">
//                   <span className="font-semibold text-gray-700">{person.name}</span>
//                   <span className="text-xs text-gray-500 mb-1">{person.org}</span>
//                   <ProfileButton link={person.link} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Organizing Committee (Germany)</h3>
//             <ul className="space-y-5">
//               {committeeGermany.map((person, index) => (
//                 <li key={index} className="flex flex-col items-start">
//                   <span className="font-semibold text-gray-700">{person.name}</span>
//                   <span className="text-xs text-gray-500 mb-1">{person.org}</span>
//                   <ProfileButton link={person.link} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AboutPage;
