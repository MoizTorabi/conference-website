import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Indo-German Conference on Critical Computation
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xl mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              <span>March 16-19, 2026</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>IIT Bombay, Mumbai</span>
            </div>
          </div>

          <p className="text-lg md:text-xl mb-4 opacity-90 max-w-3xl mx-auto">
            A joint initiative of{" "}
            <span className="font-semibold">IIT Bombay</span> and{" "}
            <span className="font-semibold">Goethe Universität Frankfurt</span>
          </p>

          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
            Fostering global collaboration in critical computation, AI, and
            interdisciplinary systems science
          </p>

          <Link
            // to="/register"
            to="/"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          About the Conference
        </h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The Indo-German Conference on Critical Computation brings together
          leading researchers from India, Germany, the US, and Europe to explore
          the transformative role of computing technologies in society. This
          4-day event aims to foster deeper cooperation between IIT Bombay and
          Goethe University Frankfurt, expanding the scope of Indo-German
          academic partnership.
        </p>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Topics include critical data analytics, scalable algorithms,
          sustainability, AI in science and society, computational modeling of
          social and biological systems, understanding critical points and
          tipping points, network science, and climate systems.
        </p>

        {/* Key Topics & Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Topics */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-2xl mb-5 text-blue-900">
              Key Topics
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Critical Data Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Scalable Algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Sustainability & Energy-Efficient Computing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>AI in Science, Society, and Culture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Computational Modeling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Network Science & Climate Systems</span>
              </li>
            </ul>
          </div>

          {/* Conference Highlights */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-2xl mb-5 text-indigo-900">
              Conference Highlights
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>4 days of high-impact research discussions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>20+ plenary speakers from Germany, India, USA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Cross-disciplinary sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Young researcher and PhD networking sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Panel discussions with industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Strategic Indo-German research partnership</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call for Participation Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Call for Participation</h2>

          <p className="text-xl mb-8">
            Open to researchers, industry professionals, and students working
            in:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition">
              <p className="font-semibold">Computer Science</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition">
              <p className="font-semibold">Mathematics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition">
              <p className="font-semibold">AI/ML</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition">
              <p className="font-semibold">Climate Science</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition">
              <p className="font-semibold">Social Sciences</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition">
              <p className="font-semibold">Computational Humanities</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 max-w-3xl mx-auto text-left">
            <p className="font-bold text-2xl mb-4 text-center">
              Types of Participation:
            </p>
            <div className="space-y-3 text-lg">
              <p className="flex items-start gap-3">
                <span className="text-yellow-300">→</span>
                <span>Plenary Talks (invited speakers)</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-yellow-300">→</span>
                <span>Young Researcher Presentations</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-yellow-300">→</span>
                <span>Poster Sessions</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-yellow-300">→</span>
                <span>Panel Discussions</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
          Featured Speakers
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          World-leading researchers from Germany, India, and USA
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Speaker Card 1 */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-5 flex items-center justify-center">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">
              Prof. Hannah Bast
            </h3>
            <p className="text-sm text-blue-600 font-semibold mb-3">
              University of Freiburg
            </p>
            <p className="text-sm text-gray-600">
              Applied algorithmics, route planning, information retrieval, NLP
            </p>
          </div>

          {/* Speaker Card 2 */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full mb-5 flex items-center justify-center">
              <Users className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">
              Prof. Kristian Kersting
            </h3>
            <p className="text-sm text-indigo-600 font-semibold mb-3">
              TU Darmstadt
            </p>
            <p className="text-sm text-gray-600">
              Statistical relational AI, deep probabilistic learning
            </p>
          </div>

          {/* Speaker Card 3 */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full mb-5 flex items-center justify-center">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">
              Prof. Madhav Marathe
            </h3>
            <p className="text-sm text-blue-600 font-semibold mb-3">
              University of Virginia
            </p>
            <p className="text-sm text-gray-600">
              Network science, biocomplexity, computational epidemiology
            </p>
          </div>
        </div>

        {/* View All Speakers Button */}
        <div className="text-center">
          <Link
            to="/speakers"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg"
          >
            View All Speakers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Quick Stats/Info Bar */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">4</p>
              <p className="text-gray-700 font-semibold">Days</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">20+</p>
              <p className="text-gray-700 font-semibold">Speakers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">3</p>
              <p className="text-gray-700 font-semibold">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">100+</p>
              <p className="text-gray-700 font-semibold">Participants</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
