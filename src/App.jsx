import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import Detail from "./pages/Detail.jsx";
import Industries from "./pages/Industries.jsx";
import Clients from "./pages/Clients.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { PageTransition } from "./components/Motion.jsx";
import { products } from "./data/products.js";
import { services } from "./data/services.js";

// every page fades/rises in on navigation
const page = (el, key) => <PageTransition key={key}>{el}</PageTransition>;

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={page(<Home />, "home")} />
        <Route path="about" element={page(<About />, "about")} />
        <Route path="products" element={page(<Products />, "products")} />
        {products.map((p) => (
          <Route
            key={p.slug}
            path={`products/${p.slug}`}
            element={page(<Detail kind="products" item={p} />, `p-${p.slug}`)}
          />
        ))}
        <Route path="services" element={page(<Services />, "services")} />
        {services.map((s) => (
          <Route
            key={s.slug}
            path={`services/${s.slug}`}
            element={page(<Detail kind="services" item={s} />, `s-${s.slug}`)}
          />
        ))}
        <Route path="industries" element={page(<Industries />, "industries")} />
        <Route path="clients" element={page(<Clients />, "clients")} />
        <Route path="contact" element={page(<Contact />, "contact")} />
        <Route path="*" element={page(<NotFound />, "nf")} />
      </Route>
    </Routes>
  );
}
