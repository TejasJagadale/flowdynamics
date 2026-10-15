import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { Img, PageHero, Btn, CTA } from '../components/Bits.jsx';

export default function Detail({ kind, item }) {
  const isProduct = kind === 'products';
  return (
    <>
      <Seo title={item.name} description={item.summary} />
      <PageHero label={isProduct ? 'Product' : 'Service'} title={item.name} text={item.summary} />
      <section className="section"><div className="container split">
        <Reveal>
          {isProduct ? (<>
            <h2>Specifications</h2>
            <dl className="specs">{item.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
            <h2>Applications</h2><ul className="ticks">{item.applications.map((a) => <li key={a}>{a}</li>)}</ul>
            <p className="muted">Contact our engineering team for detailed specifications.</p>
          </>) : (<>
            <h2>Scope</h2><ul className="ticks">{item.points.map((a) => <li key={a}>{a}</li>)}</ul>
          </>)}
          <Btn to="/contact" variant="accent">Enquire about this {isProduct ? 'product' : 'service'}</Btn>
        </Reveal>
        <Reveal x={30} y={0}><img src={item.image} alt={item.name} className="rounded-img" /></Reveal>
      </div></section>
      <p className="container back"><Link className="link" to={`/${kind}`}>All {kind}</Link></p>
      <CTA />
    </>
  );
}
