import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { CTA, PageHero } from "../components/Bits.jsx";
import { clients } from "../data/clients.js";

function Logo({ client }) {
  return client.logo ? (
    <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
  ) : (
    <span className="logo-slot" aria-hidden="true">
      {client.name.split(" ").slice(0, 2).map((word) => word[0]).join("")}
    </span>
  );
}

export default function Clients() {
  const groups = [
    ["Saudi Arabia", clients.filter((client) => client.country === "abroad")],
    ["India", clients.filter((client) => client.country === "india")],
  ];

  return (
    <>
      <Seo
        title="Clients"
        description="Meet Flow Dynamics clients and business partners across India and Saudi Arabia, including public-sector undertakings."
      />
      <PageHero
        label="Clients"
        title="Our clients"
        text="We support industrial organizations in India and Saudi Arabia with engineering products, repair and maintenance services."
      />
      <section className="section clients-page">
        <div className="container">
          <Reveal className="clients-intro">
            <p>
              FLOW DYNAMICS serves the industrial needs of its business
              partners with engineering products and services. Our work spans
              process industries, valve manufacturing, instrumentation and
              public utilities, including organizations in India and Saudi
              Arabia. Public-sector undertakings are identified with their
              respective cards.
            </p>
            <p>
              We build trust by helping partners find the solutions they need,
              from sourcing and supplying engineering materials and spare
              parts to installation, commissioning and ongoing maintenance.
              Our supply services also support imports and exports.
            </p>
          </Reveal>
          {groups.map(([group, list]) => (
            <div key={group} className="cl-group">
              <h2>{group}</h2>
              <div className="cl-grid">
                {list.map((client) => (
                  <Reveal key={client.name} className="cl">
                    <Logo client={client} />
                    <h3>{client.name}</h3>
                    <small>{client.region}</small>
                    {client.note && <p>{client.note}</p>}
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA
        title="Looking for an engineering partner?"
        text="Talk to us about your product, repair or plant-service requirements."
      />
    </>
  );
}
