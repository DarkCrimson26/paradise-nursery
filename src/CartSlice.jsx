import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const item = state.items.find((plant) => plant.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity(state, action) {
      const item = state.items.find((plant) => plant.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartQuantity = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
// Prices are stored in cents so quantity changes do not introduce rounding errors.
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default cartSlice.reducer;
