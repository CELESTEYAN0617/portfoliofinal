import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    
    if (window.location.pathname !== '/') {
      navigate('/');
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={handleLogoClick}>CE!ESTE</Link>
      
      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        <a href="#about" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>ABOUT</a>
        <Link to="/all-projects" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>PROJECTS</Link>
        <Link to="/resume" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>RESUME</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>ABOUT</a>
        <Link to="/all-projects" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>PROJECTS</Link>
        <Link to="/resume" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>RESUME</Link>
        <Link to="/contact" className="contact-btn">CONTACT ME</Link>
      </nav>

      <Link to="/contact" className="contact-btn desktop-contact">CONTACT ME</Link>
    </header>
  );
};

export default Header;
