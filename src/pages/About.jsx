import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { CTA, Img, PageHero } from "../components/Bits.jsx";
import { AnimHeading, ImageReveal } from "../components/Motion.jsx";
import { company } from "../data/site.js";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      <Seo
        title="About"
        description="Learn about Flow Dynamics, an engineering company in Palakkad providing industrial valves, instrumentation, repair, maintenance and engineering services."
      />
      <PageHero
        label="About"
        title="Engineering experience, built around your needs."
        text="Flow Dynamics delivers practical engineering solutions, industrial products and maintenance services for process and manufacturing operations."
        image="aboutImage"
      />

      <section className="section about-overview">
        <div className="container split">
          <div>
            <AnimHeading num="01" label="Who we are" title="A complete engineering partner" />
            <Reveal delay={0.15}>
              <p>
                FLOW DYNAMICS is an engineering company with vast experience in
                manufacturing spare parts and supplying industrial valves,
                accessories, instrumentation, tubes and compression fittings.
                We serve the industrial needs of our business partners with
                engineered products and dependable technical services.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                From sourcing and supplying spares through plant installation
                and commissioning to annual maintenance, our work is shaped
                around the challenge at hand. We aim to earn lasting trust by
                providing the solution our partners need, with quality, safety,
                competitive rates and customer satisfaction at the centre of
                every engagement.
              </p>
            </Reveal>
            <Reveal delay={0.35} className="experience-note">
              <strong>Vast engineering experience</strong>
              <span>Supporting industrial operations with end-to-end solutions.</span>
            </Reveal>
          </div>
          <ImageReveal from="right">
            <Img
              name="workshopImage"
              alt="Machining equipment at Flow Dynamics"
              className="rounded-img"
            />
          </ImageReveal>
        </div>
      </section>

      <section className="section about-services">
        <div className="container">
          <AnimHeading num="02" label="Engineering services" title="From the workshop to the plant" />
          <div className="about-prose">
            <Reveal>
              <p>
                Our mechanical, electrical and instrumentation services cover
                process plant maintenance, instrument solutions, site removal,
                overhaul and installation, in-house valve re-manufacturing,
                machining and spare-parts supply. We also undertake turnaround
                and shutdown work under contract agreements, and source and
                supply engineering materials and technical services for plant
                requirements.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                For instrumentation projects, our work includes process
                parameter and valve calibration, field-instrument installation
                and commissioning, PLC, DCS and SCADA erection and
                commissioning, loop drawings and P&amp;ID development, and
                special test setups. We also carry out instrument loop
                checking, control-panel wiring, tubing, cable scheduling, tray
                work and termination.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Our rotary-equipment team inspects, dismantles, overhauls and
                reinstalls pumps, blowers and compressors. In-house machining
                supports spare-part requirements, while our supply scope also
                includes metallic and non-metallic gaskets and spiral-wound
                gaskets with Grafoil or Teflon filler for valve, oil and
                petrochemical applications, alongside import and export
                services.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-valves">
        <div className="container">
          <AnimHeading num="03" label="Valve services" title="Repair, testing and diagnostics" />
          <div className="about-prose">
            <Reveal>
              <p>
                Repairing a malfunctioning valve can help avoid the cost of
                replacement and reduce disruption to plant operations. We
                provide in-service valve testing, routine repairs during
                outages and turnarounds, on-site repair and testing, and
                workshop repair and testing. For on-site work, our technicians
                travel with support vehicles and equipment, with critical
                services available 24/7.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                We also specialize in control-valve repair, diagnostics and
                calibration. Under our quality-assurance process, the valve,
                actuator and instrumentation are completely overhauled: each
                assembly is disassembled, inspected, cleaned, fitted with
                replacement soft goods, reassembled, painted and tested to meet
                ANSI and FCI standards.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-partners">
        <div className="container">
          <AnimHeading num="04" label="Our partnerships" title="Specialist capability, working together" />
          <div className="about-prose">
            <Reveal>
              <p>
                FLOW DYNAMICS represents VIRCAP SEALINGTECH Pvt. Ltd. (VSPL),
                Chennai, for its entire product range in India and the Middle
                East. Established in 1996 and AS9100D certified, VSPL serves
                core-sector industries, valve manufacturers, oil and
                petrochemical companies, refineries and other process plants.
                Its Chennai manufacturing facility specializes in industrial
                gaskets, seals and valve components, and the company has since
                diversified into the aerospace sector.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Metrisei Calibration Service and Maintenance Enterprise is
                associated with FLOW DYNAMICS as a business partner under one
                management for engineering and technical services. Based at
                2/645, CL Complex, Nethaji Nagar, Kanjikode West, Palakkad,
                Kerala 678623, Metrisei is registered as KL10D0003120 and holds
                GSTIN 32CGMPR3313K1ZA.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                FLOW DYNAMICS is registered at {company.address}. Our GSTIN is
                {` ${company.gstin}`} and our IEC/PAN is {company.iecPan}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <AnimHeading num="05" label="What guides us" title="Vision, mission and philosophy" />
          <div className="about-values-grid">
            <article>
              <h3>Vision</h3>
              <p>
                To be a trusted engineering partner for industry, known for
                reliable solutions that help plants operate safely and
                efficiently.
              </p>
            </article>
            <article>
              <h3>Mission</h3>
              <p>
                To bring products, technical expertise and responsive
                maintenance together, supporting our partners from the supply
                of spares through installation, commissioning and ongoing
                service.
              </p>
            </article>
            <article>
              <h3>Philosophy</h3>
              <p>
                We listen to the operating need, apply sound engineering
                practice and deliver practical work with quality, safety and
                customer satisfaction in mind.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTA
        title="Talk to our engineers"
        text="Tell us about your valve, instrumentation or plant-maintenance requirement."
      />
    </div>
  );
}
