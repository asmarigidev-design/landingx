import React, { useState, useEffect } from 'react';
import { SiAnaconda } from "react-icons/si";
import './Navbar.css';

const NewNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // افکت برای تشخیص اسکرول
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // جلوگیری از اسکرول بدنی وقتی منو باز است
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`glass-navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* لوگو */}
        <div className="glass-logo">
            <span className="glass-logo-text">
            social<span>X</span>
          </span>
          <SiAnaconda 
            color="#00ff88" 
            size={32} 
            style={{ 
              filter: 'drop-shadow(0 0 10px #00ff88)',
              animation: 'glow 2s ease-in-out infinite alternate'
            }} 
          />
        
        </div>

        {/* منوی دسکتاپ */}
        <ul className="glass-nav-links">
          <li><a href="#home" onClick={closeMenu}>خانه</a></li>
          <li><a href="#features" onClick={closeMenu}>امکانات</a></li>
          <li><a href="#products" onClick={closeMenu}>محصولات</a></li>
          <li><a href="#about" onClick={closeMenu}>درباره ما</a></li>
          <li><a href="#contact" onClick={closeMenu}>تماس با ما</a></li>
        </ul>

        {/* آیکون منوی موبایل */}
        <div 
          className={`glass-menu-icon ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="glass-menu-line"></div>
          <div className="glass-menu-line"></div>
          <div className="glass-menu-line"></div>
        </div>
      </nav>

      {/* منوی موبایل */}
      <div className={`glass-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="glass-mobile-links">
          <li><a href="#home" onClick={closeMenu}>خانه</a></li>
          <li><a href="#features" onClick={closeMenu}>امکانات</a></li>
          <li><a href="#products" onClick={closeMenu}>محصولات</a></li>
          <li><a href="#about" onClick={closeMenu}>درباره ما</a></li>
          <li><a href="#contact" onClick={closeMenu}>تماس با ما</a></li>
        </ul>
      </div>

      {/* فضای خالی برای نوبار فیکس شده */}
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default NewNavbar;