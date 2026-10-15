import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Seo from "../components/Seo.jsx";
import { PageHero } from "../components/Bits.jsx";
import { Stagger, Item } from "../components/Motion.jsx";
import { company } from "../data/site.js";

const types = [
  "Industrial Valves",
  "Pneumatic Products",
  "Instrumentation",
  "Spare Parts",
  "Maintenance",
  "Rotary Equipment",
  "Valve Re-manufacturing",
  "Export / Import",
  "Other",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const body = `Name: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPhone: ${d.phone}\nRequirement: ${d.type}\n\n${d.message}`;
    window.location.href = `mailto:${company.emails[0]}?subject=${encodeURIComponent("Enquiry: " + d.type)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Flow Dynamics, Kanjikode, Palakkad for valves, spare parts, instrumentation and maintenance enquiries."
      />
      <PageHero
        label="Contact"
        title="Let's discuss your engineering requirement."
      />
      <section className="section">
        <div className="container split contact">
          <Stagger tag="form" onSubmit={submit} gap={0.07}>
            {[
              ["name", "Name", "text"],
              ["company", "Company", "text"],
              ["email", "Email", "email"],
              ["phone", "Phone", "tel"],
            ].map(([id, l, t]) => (
              <Item tag="label" key={id} htmlFor={id}>
                {l}
                <input id={id} name={id} type={t} required={id !== "company"} />
              </Item>
            ))}
            <Item tag="label" htmlFor="type">
              Requirement type
              <select id="type" name="type">
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Item>
            <Item tag="label" htmlFor="message">
              Message
              <textarea id="message" name="message" rows="5" required />
            </Item>
            <Item tag="button" className="btn btn-accent" type="submit">
              Send enquiry
            </Item>
            <AnimatePresence>
              {sent && (
                <motion.p
                  role="status"
                  className="muted"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Your email app should open with the enquiry ready to send.
                </motion.p>
              )}
            </AnimatePresence>
          </Stagger>
          <Stagger tag="aside" className="info" gap={0.1} delay={0.2}>
            <Item tag="p" className="ic">
              <MapPin size={18} aria-hidden="true" />
              {company.address}
            </Item>
            {company.phones.map((p) => (
              <Item tag="p" key={p} className="ic">
                <Phone size={18} aria-hidden="true" />
                <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
              </Item>
            ))}
            {company.emails.map((m) => (
              <Item tag="p" key={m} className="ic">
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${m}`}>{m}</a>
              </Item>
            ))}
            <Item tag="p" className="muted">
              {company.ceo}. Critical services available on-site 24/7.
            </Item>
            {/* --- MAP IFRAME ADDED HERE --- */}
            <Item className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.237102871621!2d76.7593772!3d10.7995489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8697092e74353%3A0x7e3e1b2a0ecf35c4!2sFlow%20Dynamics!5e1!3m2!1sen!2sin!4v1791992924483!5m2!1sen!2sin"
                title="Flow Dynamics Location Map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </Item>
          </Stagger>
        </div>
      </section>
    </>
  );
}
