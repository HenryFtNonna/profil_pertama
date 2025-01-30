import React from 'react';
import Profil from '../../../assets/profil2.jpg';

export default function HeroSection({ isDarkMode, language }) {
  const handleClick = () => {
    window.location.href = 'mailto:mohan.henryk@gmail.com?subject=Your%20Message';
  };

  const texts = {
    en: {
      greeting: "Hello, I’m Henry ",
      description:
        "A Computer Engineering student specializing in the Internet of Things (IoT). I have programming skills in JavaScript, Python, and C++ for Arduino. Currently, I am deeply passionate about Front-End Development and committed to advancing my skills in this field.",
      button: "Email Me!",
    },
    id: {
      greeting: "Halo, saya Henry ",
      description:
        "Seorang mahasiswa Teknik Komputer yang berspesialisasi dalam Internet of Things (IoT). Saya memiliki keterampilan pemrograman dalam JavaScript, Python, dan C++ untuk Arduino. Saat ini, saya sangat tertarik dengan Pengembangan Front-End dan berkomitmen untuk meningkatkan keterampilan saya di bidang ini.",
      button: "Email Saya!",
    },
  };

  return (
    <div
      id="hero"
      className={`${isDarkMode ? 'bg-neutral-900 text-white' : 'bg-white text-black'} min-h-screen py-2 relative`}
    >
      <div className="container mx-auto px-12 flex flex-col md:flex-row items-center justify-center h-screen">
        {/* Kolom Kiri: Teks Perkenalan */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4" >
            {texts[language].greeting} <span className='wave text-[60px]'>👋</span>
          </h2>
          <p className="text-lg mb-6">{texts[language].description}</p>
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {texts[language].button}
          </button>
        </div>

        {/* Kolom Kanan: Foto Lingkaran */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 mr-12">
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