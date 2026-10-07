import { LeafIcon } from './Icons.jsx';

export default function AboutUs() {
  return <section className="about-section" aria-labelledby="about-title">
    <div><span className="eyebrow">ROOTED IN A LOVE OF GREEN</span><h2 id="about-title">Good things<br />grow here.</h2></div>
    <div className="about-copy"><p>At Paradise Nursery, we believe every home deserves a little more life. We bring together thoughtfully selected houseplants, from easy-care favorites to beautiful statement plants, so you can find the right green companion for your space.</p><p>Our goal is simple: make the joy of growing accessible. Explore our collection, discover what makes each plant special, and start your own little paradise.</p><span className="about-signature"><LeafIcon /> A little greener. A little happier.</span></div>
  </section>;
}
