import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './Translations';
import './CTA.css';

function CTASection() {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section className="cta" id="cta">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <a href="#contact" className="cta-button">{t.button}</a>
    </section>
  );
}

export default CTASection;
