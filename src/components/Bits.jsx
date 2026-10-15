import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { images } from '../assets/images/index.js';
import Reveal from './Reveal.jsx';

export function Img({ name, alt, className = '', eager = false }) {
  const src = images[name];
  if (!src) return <div className={`blueprint ${className}`} role="img" aria-label={alt || 'Technical pattern'} />;
  return <img className={className} src={src} alt={alt || ''} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}
export function Btn({ to, children, variant = 'primary' }) {
  return <Link to={to} className={`btn btn-${variant}`}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>;
}
export function Heading({ num, label, title, light }) {
  return (
    <Reveal className={`heading ${light ? 'light' : ''}`}>
      <span className="eyebrow"><b>{num}</b><i />{label}</span>
      <h2>{title}</h2>
    </Reveal>
  );
}
export function PageHero({ label, title, text, image }) {
  return (
    <section className="page-hero">
      {image && <Img name={image} className="page-hero-bg" eager />}
      <div className="grid-bg" aria-hidden="true" />
      <div className="container">
        <span className="eyebrow"><i />{label}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
export function CTA({ title = 'Have an Engineering Requirement?', text = 'Tell us what you need supplied, repaired or maintained.' }) {
  return (
    <section className="cta">
      <div className="container cta-in">
        <div><h2>{title}</h2><p>{text}</p></div>
        <Btn to="/contact" variant="accent">Let&apos;s Discuss</Btn>
      </div>
    </section>
  );
}
