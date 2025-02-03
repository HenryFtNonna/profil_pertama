import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Footer from '../../footer/index';

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

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const ButtonSosmed = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.3
      }
    }
  };

  

  return (
        <div
          id="sosmed"
          className={`min-h-[calc(100vh-5rem)] py-12 z-10  ${
            isDarkMode
              ? 'bg-gradient-to-b from-neutral-900 to-neutral-600'
              : 'bg-gradient-to-b from-white to-blue-200'
          }`}
        >
      <div className="container mx-auto px-8 relative z-10">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-12 text-center`}>
          {texts[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[130px]">

          {/* Card LinkedIn */}
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{  amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}
>
          
          <FaLinkedin className={`text-4xl mb-4 transition-all duration-300 ease-in-out ${
                isDarkMode ? 'text-[#0A66C2]' : 'text-[#0A66C2]'  
              }`} />
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              LinkedIn
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {texts[language].linkedin}
            </p>
            <motion.a
            variants={ButtonSosmed}
            whileInView="onscreen"
            viewport={{amount: 0.2 }}
            whileHover={{ 
              scale: 1.15,
              transition: { 
                type: "spring", 
                bounce: 0.2,  
                duration: 0.2  
              } 
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { 
                type: "spring", 
                bounce: 0.4, 
                duration: 0.1 
              } 
            }}
              href="https://www.linkedin.com/in/mohan-henry-kusuma/"
              target="_blank"
              rel="noreferrer"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-[#428dd7] text-white' : 'bg-[#428dd7] text-white'
              } hover:bg-[#0A66C2] transition duration-300`}
            >
              {language === 'en' ? 'Connect' : 'Hubungi'}
            </motion.a>
            </motion.div>

          {/* Card GitHub */}
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{  amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}
          >
          <FaGithub className={`text-4xl mb-4 transition-all duration-300 ease-in-out ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`} />
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              GitHub
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {texts[language].github}
            </p>
            <motion.a
              variants={ButtonSosmed}
              whileInView="onscreen"
              viewport={{  amount: 0.2 }}
              whileHover={{ 
                scale: 1.15,
                transition: { 
                  type: "spring", 
                  bounce: 0.2,  
                  duration: 0.2  
                } 
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { 
                  type: "spring", 
                  bounce: 0.4, 
                  duration: 0.1 
                } 
              }}
              href="https://github.com/HenryFtNonna"
              target="_blank"
              rel="noreferrer"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-600 text-white'
              } hover:bg-gray-800 transition duration-300`}
            >
              {language === 'en' ? 'Visit GitHub' : 'Kunjungi GitHub'}
            </motion.a>
          </motion.div>

          {/* Card Instagram */}
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{  amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}
>
          <FaInstagram className={`text-4xl mb-4 transition-all duration-300 ease-in-out ${
                isDarkMode ? 'text-[#E4405F]' : 'text-[#E4405F]'
              }`} />
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              Instagram
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {texts[language].instagram}
            </p>
            <motion.a
            variants={ButtonSosmed}
            whileInView="onscreen"
            viewport={{amount: 0.2 }}
            whileHover={{ 
              scale: 1.15,
              transition: { 
                type: "spring", 
                bounce: 0.2,  
                duration: 0.2  
              } 
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { 
                type: "spring", 
                bounce: 0.4, 
                duration: 0.1 
              } 
            }}
              href="https://www.instagram.com/mohan.henryk/"
              target="_blank"
              rel="noreferrer"
              className={`inline-block px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-[#e17185] text-white' : 'bg-[#e17185] text-white'
              } hover:bg-[#E4405F] transition duration-300`}
            >
              {language === 'en' ? 'Follow' : 'Ikuti'}
            </motion.a>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
}