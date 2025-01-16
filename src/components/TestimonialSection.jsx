import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import './Testimonials.css';

function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section className="testimonials" id="testimonials">
      <h2>{t.title}</h2>
      <div className="testimonial-card">
        <p>{t.testimonial1}</p>
      </div>
      <div className="testimonial-card">
        <p>{t.testimonial2}</p>
      </div>
      <div className="testimonial-card">
        <p>{t.testimonial3}</p>
      </div>
    </section>
  );
}

export default TestimonialsSection;
