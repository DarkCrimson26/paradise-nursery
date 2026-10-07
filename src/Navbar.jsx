import { useSelector } from 'react-redux';
import { selectCartQuantity } from './CartSlice.jsx';
import { CartIcon, LeafIcon } from './Icons.jsx';

export default function Navbar({ page }) {
  const count = useSelector(selectCartQuantity);
  return <header className={`site-header ${page === 'home' ? 'on-home' : ''}`}>
    <a href="#home" className="brand" aria-label="Paradise Nursery home"><LeafIcon /><span>paradise<span className="brand-sub">NURSERY</span></span></a>
    <nav aria-label="Main navigation">
      <a href="#home" aria-current={page === 'home' ? 'page' : undefined}>Home</a>
      <a href="#plants" aria-current={page === 'plants' ? 'page' : undefined}>Plants</a>
      <a href="#cart" className="cart-link" aria-current={page === 'cart' ? 'page' : undefined} aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}><CartIcon /><span className="cart-label">Cart</span><span className="cart-count" aria-live="polite">{count}</span></a>
    </nav>
  </header>;
}
