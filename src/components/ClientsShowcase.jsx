// src/components/ClientsShowcase.jsx
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Landmark, Globe2, Building2 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { Btn } from "./Bits.jsx";
import { AnimHeading, Counter, Stagger, Item } from "./Motion.jsx";
import { clients } from "../data/clients.js";
import "../styles/clientshow.css";

const SKIP = /^(of|and|the|&|limited|ltd\.?|pvt\.?|company)$/i;

const initials = (name) =>
  name
    .split(/\s+/)
    .filter((w) => !SKIP.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function Logo({ client, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (client.logo && !failed) {
    return (
      <span className={`cl-logo ${className}`}>
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }
  return (
    <span className={`cl-logo cl-mono ${className}`} aria-hidden="true">
      {initials(client.name)}
    </span>
  );
}

const FILTERS = [
  { id: "all", label: "All clients" },
  { id: "india", label: "India" },
  { id: "abroad", label: "International" },
];

export default function ClientsShowcase() {
  const [filter, setFilter] = useState("all");

  const stats = useMemo(() => {
    const abroadRegions = new Set(
      clients.filter((c) => c.country === "abroad").map((c) => c.region),
    ).size;
    return [
      { icon: Building2, n: clients.length, l: "Clients served" },
      { icon: Globe2, n: 1 + abroadRegions, l: "Countries" },
      {
        icon: Landmark,
        n: clients.filter((c) => /government/i.test(c.note || "")).length,
        l: "Government undertakings",
      },
    ];
  }, []);

  const visible = clients.filter(
    (c) => filter === "all" || c.country === filter,
  );
  const count = (id) =>
    id === "all"
      ? clients.length
      : clients.filter((c) => c.country === id).length;

  const base = [...clients, ...clients];
  const loop = [...base, ...base];

  return (
    <section className="section clients-sec">
      <div className="container clients-in">
        <div className="center-head">
          <AnimHeading
            num="05"
            label="Clients"
            title="Trusted by industry and public-sector undertakings"
            light
          />
        </div>

        {/* STATS: count up when scrolled into view */}
        <Stagger tag="ul" className="cl-stats" gap={0.12}>
          {stats.map((s) => (
            <Item tag="li" key={s.l}>
              <s.icon size={22} aria-hidden="true" />
              <b>
                <Counter to={s.n} />
              </b>
              <span>{s.l}</span>
            </Item>
          ))}
        </Stagger>
      </div>

      {/* LOGO MARQUEE */}
      <Reveal dir="fade" duration={1}>
        <div className="cl-marquee" aria-label="Our clients">
          <div className="cl-track">
            {loop.map((c, i) => (
              <div
                className="cl-tile"
                key={`${c.name}-${i}`}
                aria-hidden={i >= clients.length}
              >
                <Logo client={c} />
                <span className="cl-tile-name">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container clients-in">
        <div className="cl-tabs" role="tablist" aria-label="Filter clients">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "on" : ""}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <small>{String(count(f.id)).padStart(2, "0")}</small>
            </button>
          ))}
        </div>

        <motion.div className="cl-cards" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((c, i) => (
              <motion.article
                key={c.name}
                layout
                className="cl-card"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="cl-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Logo client={c} className="cl-card-logo" />
                <h3>{c.name}</h3>
                <p className="cl-loc">
                  <MapPin size={15} aria-hidden="true" />
                  {c.region}
                  <em>{c.country === "abroad" ? "International" : "India"}</em>
                </p>
                {c.note && (
                  <p className="cl-note">
                    <Landmark size={15} aria-hidden="true" />
                    {c.note}
                  </p>
                )}
                <span className="cl-bar" aria-hidden="true" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="center-actions">
          <Btn to="/clients" variant="accent">
            View all clients
          </Btn>
        </Reveal>
      </div>
    </section>
  );
}
