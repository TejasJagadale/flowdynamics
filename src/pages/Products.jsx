import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { PageHero, Btn, CTA } from "../components/Bits.jsx";
import { ImageReveal, Stagger, Item } from "../components/Motion.jsx";
import { products, productGroups } from "../data/products.js";

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Pneumatic cylinders and actuators, transfer relays, quick exhaust valves, non return valves, gaskets and valve components from Flow Dynamics."
      />
      <PageHero
        label="Products"
        title="Industrial products and components"
        text="Detailed specifications are available on request."
        image="productImage"
      />
      {productGroups.map((g, gi) => (
        <section key={g.id} className={`section ${gi % 2 ? "light" : ""}`}>
          <div className="container">
            <Reveal dir="left">
              <h2 className="group-title">
                <b>0{gi + 1}</b>
                {g.label}
              </h2>
            </Reveal>
            {g.slugs.map((slug, i) => {
              const p = products.find((x) => x.slug === slug);
              return (
                <div key={slug} className={`prod ${i % 2 ? "flip" : ""}`}>
                  <ImageReveal from={i % 2 ? "right" : "left"}>
                    <img src={p.image} alt={p.name} className="prod-img" />
                  </ImageReveal>
                  <Stagger gap={0.08} delay={0.15}>
                    <Item tag="h3">{p.name}</Item>
                    <Item tag="p">{p.summary}</Item>
                    <Item tag="dl">
                      {p.specs.map(([k, v]) => (
                        <div key={k}>
                          <dt>{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </Item>
                    <Item className="row-btns">
                      <Btn to={`/products/${slug}`} variant="primary">
                        Details
                      </Btn>
                      <Link className="link" to="/contact">
                        Enquire
                      </Link>
                    </Item>
                  </Stagger>
                </div>
              );
            })}
          </div>
        </section>
      ))}
      <CTA />
    </>
  );
}
