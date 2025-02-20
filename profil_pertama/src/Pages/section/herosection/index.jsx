import React from 'react';
import { motion } from "framer-motion";
import ParticlesComponent from "../../../Components/Particle"
import Profil from '../../../assets/profil2.jpg';

export default function HeroSection({ isDarkMode, language }) {
  const handleClick = () => {
    window.location.href = 'mailto:mohan.henryk@gmail.com?subject=Your%20Message';
  };

  const texts = {
    en: {
      greeting: "Hello, I’m Henry ",
      description:
        "A Computer Engineering student specializing in the Internet of Things (IoT). I have programming skills in ReactJS, Python, and C++ for Arduino. Currently, I am deeply passionate about Front-End Development and committed to advancing my skills in this field.",
      button: "Email Me!",
    },
    id: {
      greeting: "Halo, saya Henry ",
      description:
        "Seorang mahasiswa Teknik Komputer yang berfokus dalam Internet of Things (IoT). Saya memiliki keterampilan pemrograman dalam ReactJS, Python, dan C++ untuk Arduino. Saat ini, saya sangat tertarik dengan Pengembangan Front-End dan berkomitmen untuk meningkatkan keterampilan saya di bidang ini.",
      button: "Email Saya!",
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const ButtonEmail = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.4, 
        delay: 0.3    
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren"
      }
    }
  };

  return (
    
<div
  id="hero"
  className={`${isDarkMode ? 'bg-neutral-900 text-white' : 'bg-white text-black'} min-h-[calc(100vh-5rem)] py-2 relative`}
>
      <ParticlesComponent isDarkMode={isDarkMode} />
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-center h-screen relative z-10">

        {/* Kolom Kiri: Teks Perkenalan */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, margin: "100px" }} 
          className="md:w-1/2 text-center md:text-left"
>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {texts[language].greeting} <span className='wave text-[50px] md:text-[60px]'>👋</span>
          </h2>
          <p className="text-lg mb-6">{texts[language].description}</p>
          <motion.button
            variants={ButtonEmail}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{amount: 0.2, margin:"50px" }}
            whileHover={{ 
              scale: 1.15,
              transition: { 
                type: "spring", 
                bounce: 0.6,  
                duration: 0.3 
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
            onClick={handleClick}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            {texts[language].button}
          </motion.button>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ 
            scale: 1.10,
            transition: { 
              type: "spring", 
              bounce: 0.6,
              duration: 0.3
            } 
          }}
          whileTap={{ scale: 0.95 }}
          viewport={{ amount: 0.2, margin: "100px" }}
          className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 "
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 
                          relative hover:shadow-[0_0_50px_15px_rgba(59,130,246,0.7)] 
                          transition-shadow duration-300">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full pointer-events-none 
                            shadow-[0_0_80px_25px_rgba(59,130,246,0.6)] 
                            opacity-80 hover:opacity-100 transition-opacity duration-300" />
            
            <img
              src={Profil}
              alt="Mohan Henry Kusuma"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}