const image = (id) => `${import.meta.env.BASE_URL}plants/${id}.svg`;

export const categories = [
  { id: 'easy', name: 'Easy-care favorites', description: 'A little care. A whole lot of green.' },
  { id: 'statement', name: 'Statement plants', description: 'Make room for something extraordinary.' },
  { id: 'small', name: 'Small-space companions', description: 'Little plants with plenty of personality.' },
];

export const plants = [
  { id: 'snake-plant', name: 'Snake Plant', category: 'easy', price: 1800, description: 'Sculptural upright leaves for a quiet corner.', care: 'Low to bright indirect light' },
  { id: 'zz-plant', name: 'ZZ Plant', category: 'easy', price: 2400, description: 'Glossy green leaves and an easygoing nature.', care: 'Low to medium indirect light' },
  { id: 'golden-pothos', name: 'Golden Pothos', category: 'easy', price: 1600, description: 'Golden-flecked vines that trail beautifully.', care: 'Medium indirect light' },
  { id: 'spider-plant', name: 'Spider Plant', category: 'easy', price: 1400, description: 'Playful arching leaves with crisp cream stripes.', care: 'Bright indirect light' },
  { id: 'heartleaf', name: 'Heartleaf Philodendron', category: 'easy', price: 2000, description: 'Soft heart-shaped leaves on graceful vines.', care: 'Medium indirect light' },
  { id: 'cast-iron', name: 'Cast Iron Plant', category: 'easy', price: 2800, description: 'Deep green foliage with a resilient spirit.', care: 'Low indirect light' },
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'statement', price: 4200, description: 'Iconic split leaves with a tropical presence.', care: 'Bright indirect light' },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', category: 'statement', price: 5800, description: 'A leafy silhouette that anchors your room.', care: 'Bright indirect light' },
  { id: 'rubber-plant', name: 'Rubber Plant', category: 'statement', price: 3800, description: 'Rich, glossy leaves with a touch of drama.', care: 'Bright indirect light' },
  { id: 'bird-paradise', name: 'Bird of Paradise', category: 'statement', price: 6400, description: 'Broad, architectural leaves that reach for the sun.', care: 'Bright light' },
  { id: 'areca-palm', name: 'Areca Palm', category: 'statement', price: 4600, description: 'Feathery fronds that soften any space.', care: 'Bright indirect light' },
  { id: 'dragon-tree', name: 'Dragon Tree', category: 'statement', price: 3400, description: 'Slender stems topped with spiky green crowns.', care: 'Medium to bright indirect light' },
  { id: 'pilea', name: 'Chinese Money Plant', category: 'small', price: 2200, description: 'Round little leaves that bring a cheerful rhythm.', care: 'Bright indirect light' },
  { id: 'jade', name: 'Jade Plant', category: 'small', price: 1500, description: 'Plump oval leaves on a miniature tree.', care: 'Bright light' },
  { id: 'echeveria', name: 'Echeveria', category: 'small', price: 1200, description: 'A delicate rosette in soothing sage green.', care: 'Bright light' },
  { id: 'haworthia', name: 'Zebra Haworthia', category: 'small', price: 1000, description: 'Striped succulent leaves in a compact cluster.', care: 'Bright indirect light' },
  { id: 'peperomia', name: 'Baby Rubber Plant', category: 'small', price: 1800, description: 'A compact companion with rounded glossy leaves.', care: 'Medium to bright indirect light' },
  { id: 'string-pearls', name: 'String of Pearls', category: 'small', price: 2000, description: 'Beaded green strands for a sunny shelf.', care: 'Bright indirect light' },
].map((plant) => ({ ...plant, image: image(plant.id) }));

export const money = (cents) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD',
}).format(cents / 100);
