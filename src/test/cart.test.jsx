import { describe, it, expect } from 'vitest';
import reducer, { addItem, removeItem, incrementQuantity, decrementQuantity, selectCartQuantity, selectCartTotal } from '../CartSlice.jsx';
import { plants, categories } from '../plants.js';

describe('Cart state transitions', () => {
  it('adds a plant once and prevents duplicate listing additions', () => {
    const first = reducer(undefined, addItem(plants[0]));
    const second = reducer(first, addItem(plants[0]));
    expect(second.items).toHaveLength(1);
    expect(second.items[0].quantity).toBe(1);
  });
  it('updates combined quantities and prices across multiple plants', () => {
    let cart = reducer(undefined, addItem(plants[0]));
    cart = reducer(cart, addItem(plants[1]));
    cart = reducer(cart, incrementQuantity(plants[0].id));
    expect(selectCartQuantity({ cart })).toBe(3);
    expect(selectCartTotal({ cart })).toBe(6000);
    cart = reducer(cart, decrementQuantity(plants[0].id));
    expect(selectCartQuantity({ cart })).toBe(2);
    expect(selectCartTotal({ cart })).toBe(4200);
  });
  it('keeps quantity at one until explicit deletion', () => {
    const first = reducer(undefined, addItem(plants[0]));
    const cart = reducer(first, decrementQuantity(plants[0].id));
    expect(cart.items[0].quantity).toBe(1);
    expect(reducer(cart, removeItem(plants[0].id)).items).toEqual([]);
  });
  it('ignores quantity changes for removed plants', () => {
    const cart = reducer(undefined, incrementQuantity('unknown'));
    expect(reducer(cart, decrementQuantity('unknown')).items).toEqual([]);
  });
  it('provides six unique plants in each of three categories', () => {
    expect(categories).toHaveLength(3);
    expect(new Set(plants.map((plant) => plant.id)).size).toBe(18);
    for (const category of categories) expect(plants.filter((plant) => plant.category === category.id)).toHaveLength(6);
  });
});
