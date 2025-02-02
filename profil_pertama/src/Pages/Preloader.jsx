import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ setLoading, isDarkMode }) {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        document.body.style.overflow = 'visible';
      }
    });

    // Animasi awal
    tl.fromTo(textRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power4.out' }
    )
    .to(progressRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power4.out'
    })
    .to(textRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: 'power4.out'
    }, '-=0.5')
    .to(preloaderRef.current, {
      y: '-100%',
      duration: 1,
      ease: 'power4.inOut'
    }, '-=0.5');

    // Fallback jika ada masalah
    const timeout = setTimeout(() => setLoading(false), 5000);
    window.addEventListener('load', () => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', () => {});
    };
  }, [setLoading]);

  return (
    <div
      ref={preloaderRef}
      loading="lazy"
      className={`fixed top-0 left-0 w-full h-screen bg-neutral-900 text-white flex flex-col items-center justify-center z-[9999] ${
        isDarkMode 
        ? 'bg-neutral-900' : 'bg-white'
    }`}
        
    >
      <h1 ref={textRef} 
      loading="lazy"
      className={`text-4xl font-bold mb-4 ${
        isDarkMode 
        ? 'text-white' :'text-neutral-900' 
        }`}
      >
        Welcome <span className='wave text-[50px] md:text-[40px]'>👋</span>
      </h1>
      <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-blue-500 w-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}