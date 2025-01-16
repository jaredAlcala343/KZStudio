import React from "react";
import { useLanguage } from "./LanguageContext";
import { Link } from "react-router-dom"; // Importar Link de react-router-dom
import "./Navbar.css";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">KZStudio</div>
        <ul className="navbar-links">
          <li>
            <a href="#features">
              {language === "en" ? "Features" : "Características"}
            </a>
          </li>
          <li>
            <a href="#testimonials">
              {language === "en" ? "Testimonials" : "Testimonios"}
            </a>
          </li>
          <li>
            <a href="#CTA"> 
              {language === "en" ? "Contact" : "Contacto"}
            </a>
          </li>
        </ul>
        <div className="language-switcher">
          <button
            onClick={toggleLanguage}
            className="language-icon"
            aria-label="Switch Language"
          >
            {language === "en" ? "ESP" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
