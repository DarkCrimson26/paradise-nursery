import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../App.jsx';
import { createAppStore } from '../store.js';

function navigate(page) {
  window.location.hash = page;
  fireEvent(window, new HashChangeEvent('hashchange'));
}

beforeEach(() => { window.location.hash = ''; });

describe('Shopping experience', () => {
  it('shows the company and a working Get Started link', async () => {
    render(<Provider store={createAppStore()}><App /></Provider>);
    expect(screen.getByText('WELCOME TO PARADISE NURSERY')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Get Started/ })).toHaveAttribute('href', '#plants');
    navigate('plants');
    expect(await screen.findByRole('heading', { name: 'A plant for every corner.' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Add .* to cart$/ })).toHaveLength(18);
  });
  it('adds, adjusts, deletes, and re-adds a plant through the pages', async () => {
    window.location.hash = 'plants';
    const user = userEvent.setup();
    render(<Provider store={createAppStore()}><App /></Provider>);
    await user.click(screen.getByRole('button', { name: 'Add Snake Plant to cart' }));
    expect(screen.getByRole('button', { name: 'Snake Plant added to cart' })).toBeDisabled();
    expect(screen.getByRole('link', { name: 'Cart, 1 item' })).toBeInTheDocument();
    navigate('cart');
    const item = await screen.findByRole('article', { name: 'Snake Plant cart item' });
    expect(within(item).getByText('Unit price: $18.00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decrease Snake Plant quantity' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Increase Snake Plant quantity' }));
    expect(screen.getByLabelText('Snake Plant total')).toHaveTextContent('$36.00');
    expect(screen.getByLabelText('Total cart amount')).toHaveTextContent('$36.00');
    expect(screen.getByRole('link', { name: 'Cart, 2 items' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Decrease Snake Plant quantity' }));
    expect(screen.getByLabelText('Total cart amount')).toHaveTextContent('$18.00');
    await user.click(screen.getByRole('button', { name: /Checkout/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Coming Soon');
    expect(screen.getByRole('link', { name: /Continue Shopping/ })).toHaveAttribute('href', '#plants');
    await user.click(screen.getByRole('button', { name: 'Delete Snake Plant' }));
    expect(screen.getByText('Your cart is empty. Let’s find your first plant.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Cart, 0 items' })).toBeInTheDocument();
    navigate('plants');
    expect(await screen.findByRole('button', { name: 'Add Snake Plant to cart' })).toBeEnabled();
  });
  it('filters by category while preserving cart contents', async () => {
    window.location.hash = 'plants';
    const user = userEvent.setup();
    render(<Provider store={createAppStore()}><App /></Provider>);
    await user.click(screen.getByRole('button', { name: 'Add Snake Plant to cart' }));
    await user.click(screen.getByRole('button', { name: 'Small-space companions' }));
    expect(screen.getAllByRole('button', { name: /^Add .* to cart$/ })).toHaveLength(6);
    expect(screen.queryByRole('heading', { name: 'Easy-care favorites' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Cart, 1 item' })).toBeInTheDocument();
  });
});
