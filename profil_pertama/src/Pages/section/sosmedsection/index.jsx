import React from 'react';

export default function SosmedSection({ isDarkMode, language }) {
  const texts = {
    en: {
      title: "Connect with Me",
      linkedin: "Connect on LinkedIn",
      github: "Follow me on GitHub",
      instagram: "Follow me on Instagram",
    },
    id: {
      title: "Hubungi Saya",
      linkedin: "Hubungi di LinkedIn",
      github: "Ikuti saya di GitHub",
      instagram: "Ikuti saya di Instagram",
    },
  };

  return (
    <div
      id="sosmed"
      className={`min-h-screen py-12 pt-20 ${
        isDarkMode
          ? 'bg-gradient-to-b from-[#171717] to-[#58A3DC]'
          : 'bg-gradient-to-b from-[#ffffff] to-[#58A3DC]'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-12 text-center`}>
          {texts[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card LinkedIn */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              LinkedIn
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {texts[language].linkedin}
            </p>
            <a
              href="https://www.linkedin.com/in/mohan-henry-kusuma/"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-[#486ae9] text-white' : 'bg-blue-600 text-white'
              } hover:bg-blue-800 transition duration-300`}
            >
              {language === 'en' ? 'Connect' : 'Hubungi'}
            </a>
          </div>

          {/* Card GitHub */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              GitHub
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {texts[language].github}
            </p>
            <a
              href="https://github.com/HenryFtNonna"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-600 text-white'
              } hover:bg-gray-800 transition duration-300`}
            >
              {language === 'en' ? 'Visit GitHub' : 'Kunjungi GitHub'}
            </a>
          </div>

          {/* Card Instagram */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              Instagram
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {texts[language].instagram}
            </p>
            <a
              href="https://www.instagram.com/mohan.henryk/"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-blue-400 text-white' : 'bg-blue-400 text-white'
              } hover:bg-blue-500 transition duration-300`}
            >
              {language === 'en' ? 'Follow' : 'Ikuti'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}