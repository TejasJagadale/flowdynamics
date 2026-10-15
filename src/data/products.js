const ask = "Technical specifications available on request.";
export const productGroups = [
  {
    id: "pneumatic",
    label: "Pneumatic Systems",
    slugs: [
      "pneumatic-cylinders",
      "pneumatic-actuators",
      "transfer-relays",
      "quick-exhaust-valves",
    ],
  },
  {
    id: "valve",
    label: "Valve Components",
    slugs: ["non-return-valves", "gaskets", "valve-components"],
  },
];
export const products = [
  {
    slug: "pneumatic-cylinders",
    name: "Pneumatic Cylinders",
    image: "/assets/pc.png",
    summary: "Pneumatic cylinders supplied across a wide bore range.",
    specs: [["Bore diameter", '2.5" – 20"']],
    applications: ["Application details available on request."],
  },
  {
    slug: "pneumatic-actuators",
    name: "Pneumatic Actuators",
    image: "/assets/pa.png",
    summary:
      "Piston-cylinder actuators for valve operation, in double acting and spring return types.",
    specs: [
      ["Construction", "Piston cylinder"],
      ["Types", "Double acting; spring return"],
    ],
    applications: [
      "Valve actuation. Further application details available on request.",
    ],
  },
  {
    slug: "transfer-relays",
    name: "3 Way & 6 Way Transfer Relay Assemblies",
    image: "/assets/36way.png",
    summary: "Transfer relay assemblies in 3 way and 6 way configurations.",
    specs: [["Configurations", "3 way and 6 way"]],
    applications: [ask],
  },
  {
    slug: "quick-exhaust-valves",
    name: "Quick Exhaust Valves",
    image: "/assets/qev.png",
    summary: "Quick exhaust valves in three NPT connection sizes.",
    specs: [["Connection sizes", '1/4" NPT, 1/2" NPT, 3/4" NPT']],
    applications: [ask],
  },
  {
    slug: "non-return-valves",
    name: "Non Return Valves",
    image: "/assets/nrv.png",
    summary:
      "Non return valves supplied as part of our industrial valve range.",
    specs: [["Specifications", ask]],
    applications: [ask],
  },
  {
    slug: "gaskets",
    name: "Metallic & Non Metallic Gaskets",
    image: "/assets/mnmg.png",
    summary:
      "Gaskets for industrial valves, including spiral wound (SWG) with Grafoil and Teflon filler material.",
    specs: [
      ["Types", "Metallic; non-metallic; SWG with Grafoil & Teflon filler"],
    ],
    applications: ["Valves, and oil & petrochemical industries."],
  },
  {
    slug: "valve-components",
    name: "Valve Components",
    image: "/assets/comp.png",
    summary: "Valve components machined and supplied to customer requirements.",
    specs: [["Manufacture", "According to customer requirements"]],
    applications: ["Machining and supply of spare parts for valves."],
  },
];
