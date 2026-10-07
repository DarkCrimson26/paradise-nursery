# Paradise Nursery

A React shopping application for an online houseplant nursery. Browse 18 unique plants in three categories, add plants to a Redux shopping cart, adjust quantities, remove items, and see dynamically calculated item totals and the overall cost.

## Features

- Landing page with Paradise Nursery branding, a background image, company information, and a Get Started link.
- Three categories with six plants each: Easy-care favorites, Statement plants, and Small-space companions.
- Every plant has a local thumbnail, name, description, care note, price, and Add to Cart button.
- Add to Cart disables after a plant is added and becomes available again after deletion.
- Shared Home, Plants, and Cart navigation with a live total-quantity badge.
- Redux Toolkit cart with quantity controls, per-plant totals, cart total, deletion, and an empty state.
- Checkout displays Coming Soon. Continue Shopping returns to the catalog.
- Responsive layouts, keyboard focus states, accessible labels, and reduced-motion support.

## Run locally

Use Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

```bash
npm test
npm run build
npm run preview
```

## Assignment files

| Task | File |
| --- | --- |
| 1 | README.md |
| 2 | src/AboutUs.jsx |
| 3 | src/App.css |
| 4 | src/App.jsx |
| 5 | src/CartSlice.jsx |
| 6 | src/ProductList.jsx |
| 7 | src/CartItem.jsx |

## Design and behavior

Plant thumbnails and the greenhouse background are original local SVG illustrations, so plant images do not depend on third-party image services. Typography uses Google Fonts with system font fallbacks. Prices are in USD and stored as integer cents. Quantity cannot decrease below one; use Delete to remove a plant. Cart contents remain available while navigating and reset when the page reloads. This is a course demonstration with no payment processing or order fulfillment.
