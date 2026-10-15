import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { AnimHeading } from "./Motion.jsx";
import { clients } from "../data/clients.js";
import "../styles/clientshow.css";

const logoLoop = [...clients, ...clients];

export default function ClientsShowcase() {
  return (
    <section className="section clients-sec">
      <div className="container clients-in">
        <div className="clients-show-head">
          <AnimHeading
            num="05"
            label="Clients"
            title="Trusted by industry and public-sector undertakings"
            light
          />
          <Link className="clients-all" to="/clients">
            View our clients
          </Link>
        </div>
      </div>

      <Reveal dir="fade" duration={1}>
        <div className="cl-marquee" aria-hidden="true">
          <div className="cl-track">
            {logoLoop.map((client, index) => (
              <div className="cl-tile" key={`${client.name}-${index}`}>
                <img src={client.logo} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <ul className="sr-only" aria-label="Flow Dynamics clients">
        {clients.map((client) => (
          <li key={client.name}>{client.name}</li>
        ))}
      </ul>
    </section>
  );
}
