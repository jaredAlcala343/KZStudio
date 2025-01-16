// Footer.jsx
import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import './Footer.css';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="footer" id="footer">
      <p>{t.text}</p>
    </footer>
  );
}

export default Footer;

