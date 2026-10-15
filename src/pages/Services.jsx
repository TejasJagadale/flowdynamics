import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PageHero, CTA } from "../components/Bits.jsx";
import {
  AnimHeading,
  ImageReveal,
  Stagger,
  Item,
} from "../components/Motion.jsx";
import { services, workflow } from "../data/services.js";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Process plant maintenance, TAM and shutdown jobs, valve re-manufacturing, instrumentation and rotary equipment maintenance by Flow Dynamics."
      />
      <PageHero
        label="Services"
        title="Maintenance and engineering services"
        text="On-site or in our shop: we meet your needs anywhere, at any time."
        image="maintenanceImage"
      />

      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <div key={s.slug} className={`svc ${i % 2 ? "flip" : ""}`}>
              <ImageReveal from={i % 2 ? "right" : "left"}>
                <img src={s.image} alt={s.name} className="svc-img" />
              </ImageReveal>
              <Stagger gap={0.09} delay={0.15}>
                <Item tag="span" className="n">
                  0{i + 1}
                </Item>
                <Item tag="h2">{s.name}</Item>
                <Item tag="p">{s.summary}</Item>
                <Item>
                  <Link className="link" to={`/services/${s.slug}`}>
                    View service
                  </Link>
                </Item>
              </Stagger>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <AnimHeading
            num="07"
            label="Workflow"
            title="Maintenance workflow"
            light
          />
          <Stagger tag="ol" className="flow" gap={0.1}>
            {workflow.map((w, i) => (
              <Item tag="li" key={w}>
                <b>0{i + 1}</b>
                {w}
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
