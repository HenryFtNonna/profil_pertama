import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';

export default function Header({ isDarkMode, setIsDarkMode, language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fungsi toggle untuk tema
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Fungsi untuk scroll ke section tertentu
  const scrollToSection = (id) => {
    setActiveSection(id);
  };
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Efek untuk menangani scroll dan menentukan section aktif
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const sosmedSection = document.getElementById('sosmed');

      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY < sosmedSection.offsetTop - 100) {
        setActiveSection('hero');
      } else {
        setActiveSection('sosmed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-neutral-900/80 text-white' : 'bg-white/80 text-black'
      } ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Navbar (dipindahkan ke kiri) */}
        <nav className="flex items-center gap-6">
  {/* Tombol Home */}
          <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`relative pb-2 cursor-pointer select-none ${
            activeSection === 'hero' 
              ? 'text-blue-500' 
              : 'text-[#6e6e6e] hover:text-blue-500'
          }`}
        >
          {language === 'en' ? 'Home' : 'Beranda'}
          
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 z-10 transition-all duration-300 ease-in-out ${
              activeSection === 'hero' ? 'w-full' : 'w-0'
            }`}
          ></span>
        </Link>

  {/* Tombol Contact */}
          <Link
            to="sosmed"
            spy={true}
            smooth={true}
            offset={-70} // Ubah offset menjadi -100
            duration={500} // Perpanjang durasi
            onSetActive={() => setActiveSection('sosmed')}
          className={`relative pb-2 cursor-pointer select-none ${
            activeSection === 'sosmed' 
              ? 'text-blue-500' 
              : 'text-[#6e6e6e] hover:text-blue-500'
          }`}
        >
          {language === 'en' ? 'Contact' : 'Kontak'}
          
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 z-10 transition-all duration-300 ease-in-out ${
              activeSection === 'sosmed' ? 'w-full' : 'w-0'
            }`}
          ></span>
        </Link>
        </nav>

        {/* Dropdown Pilihan Bahasa (Diubah menggunakan DaisyUI) */}
        <div className="flex items-center gap-2">
        <div className="dropdown dropdown-end" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`btn btn-ghost ${
              isDarkMode ? 'text-white hover:bg-neutral-700' : 'text-black hover:bg-neutral-100'
            }`}
          >
            {language === 'en' ? 'ENGLISH' : 'INDONESIA'}
          </button>
          
          <ul
            className={`dropdown-content z-[1] menu p-2 shadow rounded-box w-52 ${
              isDarkMode ? 'bg-neutral-800' : 'bg-white'
            } ${isDropdownOpen ? 'block' : 'hidden'}`}
          >
            {['en', 'id'].map((lang) => (
              <li key={lang}>
                <button
                  onClick={() => {
                    setLanguage(lang);
                    setIsDropdownOpen(false); // Tutup dropdown setelah memilih
                  }}
                  className={`flex justify-between items-center ${
                    isDarkMode
                      ? 'text-white hover:bg-neutral-700'
                      : 'text-black hover:bg-neutral-100'
                  }`}
                >

                    {/* sini */}
                    <span>{lang === 'en' ? 'ENGLISH' : 'INDONESIA'}</span>
                    {language === lang && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tombol Toggle Theme */}
          <label className="swap swap-rotate">
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />

            {/* Ikon matahari */}
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Ikon bulan */}
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}