// src/components/Reveal.jsx
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./Motion.jsx";

const DIRS = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: -44 },
  right: { x: 44 },
  scale: { scale: 0.94, y: 12 },
  fade: {},
};

/* Backwards compatible: <Reveal x={30} y={0}> still works.
   New: <Reveal dir="left|right|up|down|scale|fade" delay={0.2} duration={0.8}> */
export default function Reveal({
  children,
  delay = 0,
  x,
  y,
  dir = "up",
  duration = 0.75,
  className = "",
  once = true,
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const from = { ...(DIRS[dir] || DIRS.up) };
  if (x !== undefined) from.x = x;
  if (y !== undefined) from.y = y;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
