import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addItem, selectCartItems } from './CartSlice.jsx';
import { categories, plants, money } from './plants.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const [filter, setFilter] = useState('all');
  const [announcement, setAnnouncement] = useState('');
  return <main className="catalog page-container">
    <div className="catalog-intro"><div><span className="eyebrow">FIND YOUR GREEN COMPANION</span><h1>A plant for every corner.</h1><p>Thoughtfully chosen. Ready to make themselves at home.</p></div><span className="collection-note">18 plants<br /><strong>Endless possibilities</strong></span></div>
    <div className="category-filters" aria-label="Filter plants by category"><button onClick={() => setFilter('all')} aria-pressed={filter === 'all'}>All plants</button>{categories.map((category) => <button key={category.id} onClick={() => setFilter(category.id)} aria-pressed={filter === category.id}>{category.name}</button>)}</div>
    <p className="sr-only" role="status">{announcement}</p>
    {categories.filter((category) => filter === 'all' || filter === category.id).map((category, index) => <section className="plant-section" key={category.id} aria-labelledby={`category-${category.id}`}>
      <div className="section-heading"><div><span className="section-number">0{index + 1}</span><h2 id={`category-${category.id}`}>{category.name}</h2><p>{category.description}</p></div><span>6 plants</span></div>
      <div className="plant-grid">{plants.filter((plant) => plant.category === category.id).map((plant) => {
        const added = items.some((item) => item.id === plant.id);
        return <article className="plant-card" key={plant.id} aria-label={plant.name}>
          <div className="plant-image-wrap"><span className="plant-tag">{category.id === 'easy' ? 'EASY TO LOVE' : category.id === 'small' ? 'SMALL & LOVELY' : 'ROOM TO GROW'}</span><img src={plant.image} alt={plant.name} loading="lazy" width="480" height="480" /></div>
          <div className="plant-card-content"><div className="plant-title-row"><h3>{plant.name}</h3><span className="plant-price">{money(plant.price)}</span></div><p>{plant.description}</p><span className="care-note"><span aria-hidden="true">☀</span> {plant.care}</span><button className={`add-button ${added ? 'added' : ''}`} disabled={added} aria-label={added ? `${plant.name} added to cart` : `Add ${plant.name} to cart`} onClick={() => { dispatch(addItem(plant)); setAnnouncement(`${plant.name} added to cart`); }}><span>{added ? 'Added to cart' : 'Add to Cart'}</span><span aria-hidden="true">{added ? '✓' : '+'}</span></button></div>
        </article>;
      })}</div>
    </section>)}
  </main>;
}
