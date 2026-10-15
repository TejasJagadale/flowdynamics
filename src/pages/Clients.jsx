import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTA } from '../components/Bits.jsx';
import { clients } from '../data/clients.js';

function Logo({ c }) {
  return c.logo ? <img src={c.logo} alt={`${c.name} logo`} loading="lazy" /> : <span className="logo-slot" aria-hidden="true">{c.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}</span>;
}
export default function Clients() {
  const groups = [['Saudi Arabia', clients.filter((c) => c.country === 'abroad')], ['India', clients.filter((c) => c.country === 'india')]];
  return (
    <>
      <Seo title="Clients" description="Clients of Flow Dynamics across Saudi Arabia and India, including public-sector undertakings." />
      <PageHero label="Clients" title="Our clients" />
      <section className="section"><div className="container">
        {groups.map(([g, list]) => (
          <div key={g} className="cl-group"><h2>{g}</h2>
            <div className="cl-grid">{list.map((c) => (
              <Reveal key={c.name} className="cl"><Logo c={c} /><h3>{c.name}</h3><small>{c.region}</small>{c.note && <p>{c.note}</p>}</Reveal>))}</div>
          </div>))}
      </div></section>
      <CTA />
    </>
  );
}
