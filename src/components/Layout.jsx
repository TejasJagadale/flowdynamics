import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FloatingContact from "./FloatingContact.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
