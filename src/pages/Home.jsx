import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Cog,
  Gauge,
  Package,
  Wrench,
  Fan,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import ClientsShowcase from "../components/ClientsShowcase.jsx";
import { Img, Btn, CTA } from "../components/Bits.jsx";
import {
  AnimHeading,
  Words,
  Stagger,
  Item,
  ImageReveal,
  fadeUp,
  spot,
  EASE,
} from "../components/Motion.jsx";
import { products, productGroups } from "../data/products.js";
import { industries } from "../data/clients.js";

const strip = [
  "Spare Parts",
  "Valves",
  "Instrumentation",
  "Maintenance",
  "Rotary Equipment",
  "Exports & Imports",
];
const solutions = [
  {
    n: "01",
    icon: Cog,
    t: "Industrial Valves & Accessories",
    d: "Supply of industrial valves and accessories, with in-house valve re-manufacturing.",
    to: "/products",
  },
  {
    n: "02",
    icon: Gauge,
    t: "Instrumentation",
    d: "Calibration, field instrument commissioning, PLC / DCS / SCADA and loop engineering.",
    to: "/services/instrumentation",
  },
  {
    n: "03",
    icon: Package,
    t: "Spare Parts & Components",
    d: "Machining and supply of spare parts; valve components made to customer requirements.",
    to: "/products/valve-components",
  },
  {
    n: "04",
    icon: Wrench,
    t: "Process Plant Maintenance",
    d: "Site services, TAM / shutdown jobs under contract and annual maintenance.",
    to: "/services/process-maintenance",
  },
  {
    n: "05",
    icon: Fan,
    t: "Rotary Equipment Maintenance",
    d: "Pumps, blowers and compressors inspected, dismantled and re-installed after overhauling.",
    to: "/services/rotary-equipment",
  },
  {
    n: "06",
    icon: Globe,
    t: "Exports & Imports",
    d: "Sourcing and supply of engineering materials, with import and export support.",
    to: "/contact",
  },
];

export default function Home() {
  const hero = useRef(null);
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });
  // background drifts + slowly zooms; copy lifts and fades as you scroll away
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const inY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const inOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const [tab, setTab] = useState(productGroups[0].id);
  const group = productGroups.find((g) => g.id === tab);

  return (
    <>
      <Seo
        title="Industrial Valves, Instrumentation & Plant Maintenance"
        description="Flow Dynamics, Palakkad: industrial valves and accessories, spare parts, instrumentation, process plant and rotary equipment maintenance, exports and imports."
      />

      {/* HERO */}
      <section className="hero" ref={hero}>
        <motion.div
          className="hero-bg"
          style={{ y: bgY, scale: bgScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/assets/facility.png"
            alt="Machine shop at Flow Dynamics"
            className="hero-img"
            loading="eager"
            fetchpriority="high"
          />
        </motion.div>
        <div className="grid-bg moving" aria-hidden="true" />
        <div className="ring ring-hero" aria-hidden="true" />
        <motion.div
          className="container hero-in"
          style={{ y: inY, opacity: inOpacity }}
        >
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <i />
            Palakkad, Kerala · Process Valves & Engineering
          </motion.span>
          <h1>
            <Words text="Engineered for performance." delay={0.2} />
            <br />
            <Words className="acc" text="Built for industry." delay={0.6} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
          >
            Engineering solutions, industrial components and maintenance
            services designed for demanding process and manufacturing
            environments.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
          >
            <Btn to="/products" variant="accent">
              Explore Our Solutions
            </Btn>
            <Btn to="/contact" variant="ghost">
              Request an Enquiry
            </Btn>
          </motion.div>
        </motion.div>
      </section>

      {/* CAPABILITY BAR */}
      <div className="cap-wrap">
        <div className="container">
          <Stagger
            tag="ul"
            className="cap-bar"
            aria-label="Capabilities"
            gap={0.07}
            delay={0.1}
          >
            {strip.map((s) => (
              <Item tag="li" key={s}>
                <i aria-hidden="true" />
                {s}
              </Item>
            ))}
          </Stagger>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section about-prev">
        <div className="container about-grid">
          <div>
            <Reveal>
              <span className="eyebrow">
                <b>00</b>
                <i />
                Who we are
              </span>
            </Reveal>
            <h2 className="big">
              <Words
                inView
                delay={0.1}
                step={0.04}
                text="An engineering company serving the industrial needs of its business partners."
              />
            </h2>
            <Reveal delay={0.25}>
              <p>
                From supply of spares to plant installation and commissioning to
                annual maintenance, we provide end-to-end solutions to
                engineering challenges, built on trust and confidence.
              </p>
            </Reveal>
            <Stagger tag="ul" className="tags" gap={0.07} delay={0.3}>
              {[
                "Industrial Engineering",
                "Process Maintenance",
                "Valve Solutions",
                "Global Supply",
              ].map((t) => (
                <Item tag="li" key={t}>
                  {t}
                </Item>
              ))}
            </Stagger>
            <Reveal delay={0.45}>
              <Btn to="/about">About Flow Dynamics</Btn>
            </Reveal>
          </div>
          <Reveal x={40} y={0} className="about-img" duration={0.9}>
            <ImageReveal from="right">
              <Img
                name="aboutImage"
                alt="Flow Dynamics works at Kanjikode, Palakkad"
              />
            </ImageReveal>
            <span className="mark">N 10.77° · E 76.74°</span>
          </Reveal>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section className="section light">
        <div className="container">
          <div className="center-head">
            <AnimHeading
              num="01"
              label="Core solutions"
              title="What we supply and service"
            />
          </div>
          <Stagger className="sol-grid" gap={0.09}>
            {solutions.map((s) => (
              <Item key={s.n}>
                <Link to={s.to} className="sol-card" onMouseMove={spot}>
                  <span className="sol-n" aria-hidden="true">
                    {s.n}
                  </span>
                  <span className="sol-ic">
                    <s.icon size={28} aria-hidden="true" />
                  </span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="go-btn" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PRODUCTS: tabbed, re-animates on every tab switch */}
      <section className="section">
        <div className="container">
          <div className="center-head">
            <AnimHeading
              num="02"
              label="Product showcase"
              title="Components built around the valve"
            />
          </div>
          <Reveal dir="fade">
            <div className="tabs center" role="tablist">
              {productGroups.map((g) => (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={tab === g.id}
                  className={tab === g.id ? "on" : ""}
                  onClick={() => setTab(g.id)}
                >
                  {tab === g.id && (
                    <motion.span
                      layoutId="tab-pill"
                      className="tab-pill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 36,
                      }}
                    />
                  )}
                  <span className="tab-txt">{g.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              className="pgrid"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {group.slugs.map((slug) => {
                const p = products.find((x) => x.slug === slug);
                return (
                  <motion.div key={slug} className="pitem" variants={fadeUp}>
                    <Link
                      to={`/products/${slug}`}
                      className="pcard"
                      onMouseMove={spot}
                    >
                      <div className="pcard-img">
                        <img src={p.image} alt={p.name} />
                      </div>
                      <div className="pcard-body">
                        <h3>{p.name}</h3>
                        <p>{p.summary}</p>
                        <span className="go-btn" aria-hidden="true">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ROTARY */}
      <section className="section rotary">
        <div className="ring ring-a" aria-hidden="true" />
        <div className="ring ring-b" aria-hidden="true" />
        <div className="container rotary-in">
          <AnimHeading
            num="03"
            label="Rotary equipment"
            title="Pumps. Blowers. Compressors."
            light
          />
          <Reveal dir="scale" delay={0.2}>
            <p>
              All types of blowers, compressors and pumps are inspected,
              dismantled and re-installed after overhauling.
            </p>
            <Btn to="/services/rotary-equipment" variant="accent">
              Rotary equipment services
            </Btn>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="center-head">
            <AnimHeading
              num="04"
              label="Industries"
              title="Industries we support"
            />
          </div>
          <Stagger className="ind-grid" gap={0.1}>
            {industries.map((x, i) => (
              <Item key={x.name} className="ind">
                <div className="ind-img">
                  <img src={x.image} alt={x.name} />
                </div>
                <div>
                  <span className="n">0{i + 1}</span>
                  <h2>{x.name}</h2>
                  <p>{x.text}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CLIENTS */}
      <ClientsShowcase />

      <CTA />
    </>
  );
}
