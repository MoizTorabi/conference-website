import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 border-b border-gray-700 pb-8">
          
          {/* Column 1: Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IGCCC 2026</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Indo-German Conference on Critical Computation.<br/>
              Fostering global collaboration in AI and systems science.
            </p>
          </div>

          {/* Column 2: Institutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Organized By</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>IIT Bombay</li>
              <li>Goethe Universität Frankfurt</li>
              <li>BharatGen</li>
              <li>C3S - Center for Critical Computational Studies</li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              Department of Computer Science and Engineering<br />
              IIT Bombay, Powai, Mumbai – 400076
            </p>
            <a href="mailto:criticalcomputation2026@iitb.ac.in" className="text-secondary hover:text-blue-400 text-sm">
              criticalcomputation2026@iitb.ac.in
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          © 2026 Indo–German Conference on Critical Computation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;