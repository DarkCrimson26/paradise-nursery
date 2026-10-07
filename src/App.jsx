import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import { LeafIcon } from './Icons.jsx';
import './App.css';

const readPage = () => ['plants', 'cart'].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'home';

export default function App() {
  const [page, setPage] = useState(readPage);
  useEffect(() => {
    const navigate = () => { setPage(readPage()); window.scrollTo?.(0, 0); };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar page={page} /><div id="main-content" tabIndex="-1">
    {page === 'home' ? <main><section className="landing-hero" aria-labelledby="hero-title"><div className="hero-content"><span className="eyebrow">WELCOME TO PARADISE NURSERY</span><h1 id="hero-title">Bring a little<br /><em>paradise</em><br />home.</h1><p>Beautiful plants. Happier spaces.<br />Find the green companion that feels like you.</p><a className="primary-button" href="#plants">Get Started <span aria-hidden="true">↗</span></a><div className="hero-footnote"><span className="little-line" />Thoughtfully selected, naturally beautiful.</div></div><div className="hero-image-label"><span>THE JOY OF GROWING</span><strong>It starts with one plant.</strong></div></section><div className="values-strip"><span><LeafIcon /> Selected with care</span><span>18 beautiful houseplants</span><span>A greener everyday</span></div><AboutUs /></main> : page === 'plants' ? <ProductList /> : <CartItem />}
  </div><footer><a className="footer-brand" href="#home">paradise nursery</a><p>A little greener. A little happier.</p><span>React course project · Demo store</span></footer></>;
}
