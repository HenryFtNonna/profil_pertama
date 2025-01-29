import React, { useEffect } from 'react';
import Profil from '../../../assets/profil.jpg';

export default function HeroSection({ isDarkMode }) {
  return (
    <div
      id="hero"
      className={`${isDarkMode ? 'bg-neutral-900 text-white' : 'bg-white text-black'} min-h-screen py-2 relative`}
    >
      {/* Konten HeroSection */}
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-center h-screen">
        {/* Kolom Kiri: Teks Perkenalan */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Mohan Henry Kusuma</h1>
          <h2 className="text-3xl font-semibold mb-4">Hello, I’m Henry</h2>
          <p className="text-lg mb-6">
            A Computer Engineering student specializing in the Internet of Things (IoT). I have programming skills in JavaScript, Python, and C++ for Arduino. Currently, I am deeply passionate about Front-End Development and committed to advancing my skills in this field.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Email Me!
          </button>
        </div>

        {/* Kolom Kanan: Foto Lingkaran */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src={Profil}
              alt="Mohan Henry Kusuma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}