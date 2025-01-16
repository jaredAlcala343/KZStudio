import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './Translations';
import './Features.css';

function FeaturesSection() {
  const { language } = useLanguage();
  const t = translations[language].features;

  return (
    <section className="features" id="features">
      <h2>{t.title}</h2>
      <div className="feature-card">
        <h3>{t.feature1}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="feature-card">
        <h3>{t.feature2}</h3>
        <p>Phasellus viverra orci ut felis elementum, eget dictum ligula fringilla.</p>
      </div>
      <div className="feature-card">
        <h3>{t.feature3}</h3>
        <p>Donec malesuada urna ac orci bibendum, in venenatis metus sollicitudin.</p>
      </div>
    </section>
  );
}

export default FeaturesSection;
