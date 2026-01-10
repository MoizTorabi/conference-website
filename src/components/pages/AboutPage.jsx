import React from 'react';
import { Target, Users, Globe, ChevronRight, ExternalLink } from 'lucide-react';
// Import the data from the new file
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
          
          {/* Section 1: Strategic Initiative */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Globe className="text-secondary" />
              Strategic Initiative
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The <strong>Indo–German Conference on Critical Computation</strong> is a collaborative initiative between <span className="text-primary font-semibold">IIT Bombay</span> and <span className="text-primary font-semibold">Goethe University Frankfurt</span>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The conference explores computing as a transformative global technology. Computing impacts all fields: science, engineering, law, economics, culture, the environment, and social systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With AI advancing at unprecedented speed, researchers must collaboratively analyze and predict critical points, transitions, and long-term consequences. This conference serves as a platform for interdisciplinary research exchange, strategic Indo–German cooperation, and future joint programs.
            </p>
          </section>

          {/* Section 2: Why Critical Computation? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Target className="text-secondary" />
              Why "Critical Computation"?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Computing systems at scale",
                "Predictive modeling of critical transitions",
                "Ethical, legal, and socio-technical frameworks",
                "Sustainable & energy-efficient algorithms",
                "AI’s transformative role in society",
                "Climate tipping points & earth systems"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Organizers Sidebar (Takes up 1/3 of space) */}
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