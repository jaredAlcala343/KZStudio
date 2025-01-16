import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './Translations';
import './Hero.css';

function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="hero" id="hero">
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <a href="#cta" className="cta-button">{t.button}</a>
    </section>
  );
}

export default HeroSection;

