import React from 'react';

export default function SosmedSection({ isDarkMode }) {
  return (
    <div
      className={`min-h-screen py-12 ${
        isDarkMode
          ? 'bg-gradient-to-b from-[#171717] to-[#58A3DC]' // Dark mode gradient
          : 'bg-gradient-to-b from-[#ffffff] to-[#58A3DC]' // Light mode gradient
      }`}
    >
      <div className="text-center">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
          Connect with Me
        </h2>
        <div className="flex gap-4 justify-center">
          <a href="#" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-300`}>
            Twitter
          </a>
          <a href="#" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-300`}>
            LinkedIn
          </a>
          <a href="#" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-300`}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}