// src/data/clients.js
//
// HOW TO ADD A LOGO
// 1. Put the file in src/assets/clients/ (PNG / SVG / WEBP, transparent background is best)
// 2. Import it below, e.g.:  import tigLogo from "../assets/clients/tig.png";
// 3. Set `logo: tigLogo` on that client.
// Clients with `logo: null` automatically show a clean monogram tile instead.

// import tigLogo from "../assets/clients/tig.png";
// import acvLogo from "../assets/clients/arabian-control-valve.png";
// import ilLogo from "../assets/clients/instrumentation-limited.png";
// import ksbLogo from "../assets/clients/ksb-mil.png";
// import keltronLogo from "../assets/clients/keltron.png";
// import vircapLogo from "../assets/clients/vircap.png";
// import ksebLogo from "../assets/clients/kseb.png";

export const clients = [
  {
    name: "Tig Manufacturing Arabia Limited",
    region: "Saudi Arabia",
    country: "abroad",
    logo: "/assets/cl1.png", // tigLogo
  },
  {
    name: "Arabian Control Valve Company",
    region: "Saudi Arabia",
    country: "abroad",
    logo: "/assets/cl2.png", // acvLogo
  },
  {
    name: "Instrumentation Limited",
    region: "India",
    note: "A Government of India Undertaking under Ministry of Heavy Industries",
    country: "india",
    logo: "/assets/cl3.png", // ilLogo
  },
  {
    name: "KSB MIL Controls Limited",
    region: "Kerala",
    country: "india",
    logo: "/assets/cl4.png", // ksbLogo
  },
  {
    name: "Kerala State Electronics Development Corporation Limited",
    region: "Kerala",
    note: "A Government of Kerala Undertaking",
    country: "india",
    logo: "/assets/cl5.png", // keltronLogo
  },
  {
    name: "Vircap Sealing Tech Pvt. Limited",
    region: "Chennai",
    country: "india",
    logo: "/assets/cl6.png", // vircapLogo
  },
  {
    name: "Kerala State Electricity Board",
    region: "Kerala",
    country: "india",
    logo: "/assets/cl7.png", // ksebLogo
  },
];

export const industries = [
  {
    name: "Process Industries",
    text: "Valves, actuators, instrumentation and plant maintenance for process operations.",
    image: "/assets/in1.png",
  },
  {
    name: "Oil & Petrochemical",
    text: "Gaskets and valve components for oil, petrochemical and refinery service.",
    image: "/assets/in2.png",
  },
  {
    name: "Valve Manufacturing",
    text: "Machined valve components and gaskets for valve manufacturers.",
    image: "/assets/in3.png",
  },
  {
    name: "Power & Electricity",
    text: "Engineering support for utilities such as the Kerala State Electricity Board.",
    image: "/assets/in4.png",
  },
  {
    name: "Instrumentation & Control",
    text: "Calibration, loop checking and PLC / DCS / SCADA commissioning.",
    image: "/assets/in5.png",
  },
];
