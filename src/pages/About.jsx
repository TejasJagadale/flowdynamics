import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Img, PageHero, CTA } from "../components/Bits.jsx";
import {
  AnimHeading,
  Stagger,
  Item,
  ImageReveal,
} from "../components/Motion.jsx";

const blocks = [
  [
    "Engineering expertise",
    "Vast experience in engineering solutions and services: manufacturing spare parts, supply of all types of industrial valves and accessories, instrumentation, tubes and compression fittings, and process plant maintenance.",
  ],
  [
    "Product & service scope",
    "Mechanical, electrical and instrumentation engineering; site services; in-house valve re-manufacturing; TAM / shutdown jobs; machining and supply of spare parts; gaskets; imports and exports.",
  ],
  [
    "Industrial approach",
    "End to end: supply of spares, plant installation and commissioning, and annual maintenance services, delivered on-site or in our shop.",
  ],
  [
    "Quality & reliability",
    "Control valve overhaul is carried out under our Quality Assurance program, with assemblies tested to meet ANSI and FCI standards. Experience, quality and safety, competitive rates and customer satisfaction highlight our strength.",
  ],
  [
    "Global supply",
    "We handle exports and imports, and represent Vircap Sealingtech Pvt. Ltd., Chennai for their entire product range in India and the Middle East.",
  ],
];
export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Flow Dynamics is an engineering company in Palakkad, Kerala offering valves, spare parts, instrumentation and process plant maintenance."
      />
      <PageHero
        label="About"
        title="Experience, quality and safety."
        text="Flow Dynamics builds trust and confidence among its business partners by serving them with the solutions they are looking for."
        image="aboutImage"
      />

      <section className="section">
        <div className="container split">
          <div>
            <AnimHeading num="01" label="Overview" title="Company overview" />
            <Reveal delay={0.15}>
              <p>
                Flow Dynamics is well known for the supply of process valves,
                actuators, accessories and instrumentation products. As part of
                continuous development, we focused on process plant maintenance
                and services with quality engineered products and services.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                Metrisei Calibration Service and Maintenance Enterprise,
                Kanjikode West, is associated with Flow Dynamics as a business
                partner under one management for engineering and technical
                services.
              </p>
            </Reveal>
          </div>
          <ImageReveal from="right">
            <Img
              name="workshopImage"
              alt="Cylindrical grinding machine in our works"
              className="rounded-img"
            />
          </ImageReveal>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <AnimHeading num="02" label="Capabilities" title="How we work" />
          <Stagger className="rows" gap={0.1}>
            {blocks.map(([t, d], i) => (
              <Item key={t} className="row">
                <span className="n">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <ImageReveal from="left">
            <Img
              name="maintenanceImage"
              alt="Technicians handling an actuator with a hoist"
              className="rounded-img"
            />
          </ImageReveal>
          <div>
            <AnimHeading
              num="03"
              label="Philosophy"
              title="Engineering philosophy"
              light
            />
            <Reveal delay={0.2}>
              <p>
                Replacing valves is expensive. We believe valves are best
                entrusted to a company with expertise, comprehensive facilities
                and a proven track record in engineering services.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Talk to our engineers"
        text="Share your requirement and we will respond with the right solution."
      />
    </>
  );
}
