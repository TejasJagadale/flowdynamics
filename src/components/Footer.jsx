import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { images } from '../assets/images/index.js';
import { company } from '../data/site.js';
import { products } from '../data/products.js';
import { services } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container foot-grid">
        <div>
          <img className="foot-logo" src={images.logo} alt="Flow Dynamics logo" loading="lazy" />
          <p>An engineering company supplying industrial valves and components and providing process plant and rotary equipment maintenance, with exports and imports.</p>
        </div>
        <div><h3>Products</h3>{products.map((p) => <Link key={p.slug} to={`/products/${p.slug}`}>{p.name}</Link>)}</div>
        <div><h3>Services</h3>{services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>)}</div>
        <div>
          <h3>Contact</h3>
          <p className="ic"><MapPin size={16} aria-hidden="true" />{company.address}</p>
          <p className="ic"><Phone size={16} aria-hidden="true" />{company.phones[0]}</p>
          <p className="ic"><Mail size={16} aria-hidden="true" />{company.emails[0]}</p>
          <Link to="/clients">Clients</Link><Link to="/industries">Industries</Link>
        </div>
      </div>
      <div className="container foot-base">© {new Date().getFullYear()} Flow Dynamics. All rights reserved.</div>
    </footer>
  );
}
