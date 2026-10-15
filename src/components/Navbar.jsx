import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { images } from '../assets/images/index.js';
import { nav, company } from '../data/site.js';
import { products, productGroups } from '../data/products.js';
import { services } from '../data/services.js';

const menus = { products, services };

function Dropdown({ menu }) {
  return (
    <motion.div
      className={menu === 'products' ? 'drop drop-mega' : 'drop'}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      {menu === 'products'
        ? productGroups.map((g) => (
            <div key={g.id} className="drop-col">
              <span className="drop-h">{g.label}</span>
              {g.slugs.map((slug) => {
                const p = products.find((x) => x.slug === slug);
                return p ? <Link key={slug} to={`/products/${slug}`}>{p.name}</Link> : null;
              })}
            </div>
          ))
        : services.map((m) => <Link key={m.slug} to={`/services/${m.slug}`}>{m.name}</Link>)}
    </motion.div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  const [mob, setMob] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); setDrop(null); setMob(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e) => { if (e.key === 'Escape') { setOpen(false); setDrop(null); } };
    window.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc); };
  }, [open]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-in">
          <div className="topbar-l">
            <a href={`tel:${company.phones[0].replace(/\s/g, '')}`}><Phone size={14} aria-hidden="true" />{company.phones[0]}</a>
            <a href={`mailto:${company.emails[0]}`}><Mail size={14} aria-hidden="true" />{company.emails[0]}</a>
          </div>
          <span className="topbar-r"><MapPin size={14} aria-hidden="true" />Kanjikode, Palakkad, Kerala</span>
        </div>
      </div>

      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-in">
          <Link to="/" className="brand" aria-label="Flow Dynamics home">
            <img src={images.logo} alt="" width="48" height="68" />
            <span><b>FLOW</b> <em>DYNAMICS</em></span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {nav.map((n) => n.menu ? (
              <div key={n.to} className="has-drop" onMouseEnter={() => setDrop(n.menu)} onMouseLeave={() => setDrop(null)}>
                <NavLink to={n.to}>{n.label}</NavLink>
                <button className="chev" aria-label={`${n.label} menu`} aria-expanded={drop === n.menu}
                  onClick={() => setDrop(drop === n.menu ? null : n.menu)}><ChevronDown size={14} /></button>
                <AnimatePresence>{drop === n.menu && <Dropdown menu={n.menu} />}</AnimatePresence>
              </div>
            ) : <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
          </nav>
          <Link to="/contact" className="btn btn-accent nav-cta">Request an Enquiry</Link>
          <button className="burger" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div className="drawer" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}>
              {nav.map((n) => n.menu ? (
                <div key={n.to} className="d-group">
                  <div className="d-row">
                    <NavLink to={n.to}>{n.label}</NavLink>
                    <button aria-label={`${n.label} menu`} aria-expanded={mob === n.menu}
                      className={mob === n.menu ? 'on' : ''}
                      onClick={() => setMob(mob === n.menu ? null : n.menu)}><ChevronDown size={20} /></button>
                  </div>
                  {mob === n.menu && (
                    <div className="d-sub">
                      {menus[n.menu].map((m) => <Link key={m.slug} to={`/${n.menu}/${m.slug}`}>{m.name}</Link>)}
                    </div>
                  )}
                </div>
              ) : <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
              <Link to="/contact" className="btn btn-accent">Request an Enquiry</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}