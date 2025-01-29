import React from 'react';

export default function SosmedSection({ isDarkMode }) {
  return (
    <div
      id="sosmed"
      className={`min-h-screen py-12 pt-20 ${
        isDarkMode
          ? 'bg-gradient-to-b from-[#171717] to-[#58A3DC]' // Dark mode gradient
          : 'bg-gradient-to-b from-[#ffffff] to-[#58A3DC]' // Light mode gradient
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-12 text-center`}>
          Connect with Me
        </h2>
        {/* Grid untuk Sosial Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card LinkedIn */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              LinkedIn
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Connect on LinkedIn
            </p>
            <a
              href="#"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-[#486ae9] text-white' : 'bg-blue-600 text-white'
              } hover:bg-blue-800 transition duration-300`}
            >
              Connect
            </a>
          </div>

          {/* Card GitHub */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              GitHub
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Follow me on GitHub
            </p>
            <a
              href="#"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-600 text-white'
              } hover:bg-gray-800 transition duration-300`}
            >
              Visit GitHub
            </a>
          </div>

          {/* Card Twitter */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              Instagram
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Follow me on Instagram
            </p>
            <a
              href="#"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-blue-400 text-white' : 'bg-blue-400 text-white'
              } hover:bg-blue-500 transition duration-300`}
            >
              Follow
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}