import React from "react";
import { Target, Users, Globe, Lightbulb, ChevronRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About the Conference
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Exploring computing as a transformative global technology—its
            capabilities, risks, and societal implications.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Introduction */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Globe className="text-secondary" />
              Strategic Initiative
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The{" "}
              <strong>Indo–German Conference on Critical Computation</strong> is
              a collaborative initiative between{" "}
              <span className="text-primary font-semibold">IIT Bombay</span> and{" "}
              <span className="text-primary font-semibold">
                Goethe University Frankfurt
              </span>
              .
            </p>
            <p className="text-gray-700 leading-relaxed">
              With AI advancing at unprecedented speed, researchers must
              collaboratively analyze and predict critical points, transitions,
              and long-term consequences. This conference serves as a platform
              for interdisciplinary research exchange, strategic Indo–German
              cooperation, and future joint programs.
            </p>
          </section>

          {/* Why Critical Computation? */}
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
                "Climate tipping points & earth systems",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Organizers Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Users className="text-secondary" />
              Conference Co-Chairs
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-bold text-lg text-gray-900">
                  Prof. Ganesh Ramakrishnan
                </p>
                <p className="text-primary text-sm font-medium">IIT Bombay</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-lg text-gray-900">
                  Prof. Ulrich Meyer
                </p>
                <p className="text-primary text-sm font-medium">
                  Goethe Universität Frankfurt
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Organizing Committee (India)
            </h3>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700">
                  Prof. Sudhir R. Ghorpade
                </span>
                <span className="text-xs text-gray-500">IIT Bombay</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700">
                  Prof. Sachin B. Patkar
                </span>
                <span className="text-xs text-gray-500">IIT Bombay</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Organizing Committee (Germany)
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700">
                  Dr. Maneesh K. Singh
                </span>
                <span className="text-xs text-gray-500">BharatGen</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700">
                  Prof. Christoph Burchard
                </span>
                <span className="text-xs text-gray-500">Goethe University</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700">
                  Prof. Anand Srivastav
                </span>
                <span className="text-xs text-gray-500">Goethe University</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
