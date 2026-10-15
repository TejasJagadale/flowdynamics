// src/components/Motion.jsx
// Shared animation toolkit: word-by-word headings, staggered groups, image wipes,
// count-up numbers, page transition and card spotlight.
// Everything respects "prefers-reduced-motion".
import { Fragment, useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];
const VP = { once: true, margin: "-60px" };

/* shared item variant used by Stagger/Item and tab grids */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/* ---------- WORDS: masked word-by-word slide-up (for headings) ---------- */
const wordV = {
  hidden: { y: "112%" },
  show: { y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Words({
  text,
  delay = 0,
  step = 0.055,
  inView = false,
  className = "",
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;
  const trigger = inView
    ? { whileInView: "show", viewport: VP }
    : { animate: "show" };
  return (
    <motion.span
      className={`words ${className}`}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {text.split(" ").map((word, i) => (
        <Fragment key={i}>
          <span className="w">
            <motion.span className="wi" variants={wordV}>
              {word}
            </motion.span>
          </span>{" "}
        </Fragment>
      ))}
    </motion.span>
  );
}

/* ---------- ANIMATED SECTION HEADING (same markup as <Heading />) ---------- */
export function AnimHeading({ num, label, title, light = false }) {
  const reduce = useReducedMotion();
  return (
    <div className={`heading ${light ? "light" : ""}`}>
      <motion.span
        className="eyebrow"
        initial={reduce ? false : { opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VP}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {num && <b>{num}</b>}
        <motion.i
          style={{ originX: 0 }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VP}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        />
        {label}
      </motion.span>
      <h2>
        <Words text={title} inView delay={0.1} />
      </h2>
    </div>
  );
}

/* ---------- STAGGER GROUP + ITEM ---------- */
export function Stagger({
  children,
  gap = 0.08,
  delay = 0,
  tag = "div",
  ...rest
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = tag;
    return <Plain {...rest}>{children}</Plain>;
  }
  const Tag = motion[tag];
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={VP}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Item({ children, tag = "div", ...rest }) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = tag;
    return <Plain {...rest}>{children}</Plain>;
  }
  const Tag = motion[tag];
  return (
    <Tag variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- IMAGE REVEAL: clip-path wipe + slow settle zoom ---------- */
const CLIPS = {
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
  bottom: "inset(100% 0 0 0)",
  top: "inset(0 0 100% 0)",
};

export function ImageReveal({
  children,
  from = "left",
  delay = 0,
  className = "",
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={`img-reveal ${className}`}
      initial={{ clipPath: CLIPS[from] }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.05, delay, ease: EASE }}
    >
      <motion.div
        className="img-reveal-in"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.5, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---------- COUNT-UP NUMBER ---------- */
export function Counter({ to, pad = 2, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (x) => setV(Math.round(x)),
    });
    return () => c.stop();
  }, [inView, reduce, to, duration]);
  return (
    <span ref={ref}>
      {String(v).padStart(pad, "0")}
      {suffix}
    </span>
  );
}

/* ---------- PAGE TRANSITION ---------- */
export function PageTransition({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- CARD SPOTLIGHT: onMouseMove={spot} ---------- */
export const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};
