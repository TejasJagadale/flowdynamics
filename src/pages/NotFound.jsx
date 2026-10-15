import Seo from '../components/Seo.jsx';
import { Btn } from '../components/Bits.jsx';
export default function NotFound() {
  return (
    <section className="section nf"><Seo title="Page not found" description="The page you requested could not be found." />
      <div className="container"><h1>404</h1><p>This page does not exist.</p><Btn to="/" variant="primary">Back to home</Btn></div></section>
  );
}
