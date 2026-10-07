import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartQuantity, selectCartTotal, incrementQuantity, decrementQuantity, removeItem } from './CartSlice.jsx';
import { money } from './plants.js';
import { LeafIcon } from './Icons.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const quantity = useSelector(selectCartQuantity);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  return <main className="cart-page page-container">
    <span className="eyebrow">A LITTLE PARADISE, IN THE MAKING</span><h1>Your shopping cart.</h1><p className="cart-intro">{quantity} {quantity === 1 ? 'plant' : 'plants'} ready for a new home.</p>
    {!items.length ? <section className="empty-cart"><LeafIcon /><h2>Room for something green.</h2><p>Your cart is empty. Let’s find your first plant.</p><a className="primary-button" href="#plants">Continue Shopping <span aria-hidden="true">↗</span></a></section> : <div className="cart-layout"><section className="cart-items" aria-label="Plants in your cart">{items.map((item) => <article className="cart-item" key={item.id} aria-label={`${item.name} cart item`}>
      <img src={item.image} alt={item.name} width="120" height="120" /><div className="cart-item-details"><h2>{item.name}</h2><p>Unit price: {money(item.price)}</p><div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity === 1} onClick={() => dispatch(decrementQuantity(item.id))}>−</button><span aria-label={`${item.name} quantity`}>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(incrementQuantity(item.id))}>+</button></div></div><div className="item-total"><strong aria-label={`${item.name} total`}>{money(item.price * item.quantity)}</strong><button className="delete-button" aria-label={`Delete ${item.name}`} onClick={() => { dispatch(removeItem(item.id)); setCheckoutMessage(''); }}>Delete</button></div>
    </article>)}<a className="continue-link" href="#plants">← Continue Shopping</a></section><aside className="order-summary"><span className="eyebrow">YOUR GREEN COLLECTION</span><h2>Order summary</h2><div className="summary-line"><span>Plants ({quantity})</span><span>{money(total)}</span></div><div className="summary-total"><span>Total</span><strong aria-label="Total cart amount">{money(total)}</strong></div><p>Prices in USD. This is a demonstration store.</p><button className="primary-button" onClick={() => setCheckoutMessage('Coming Soon — checkout is not available yet.')}>Checkout <span aria-hidden="true">↗</span></button>{checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}<div className="summary-note"><LeafIcon /><span>One small plant.<br />A happier little corner.</span></div></aside></div>}
  </main>;
}
