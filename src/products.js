
export const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 2499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Everyday sneakers with a bold, comfortable design.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 3999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Immersive audio for music, study, and travel.",
  },
  {
    id: 3,
    name: "Minimal Watch",
    price: 2999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "A clean, timeless watch for everyday wear.",
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: 1899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "A versatile backpack for college and weekends.",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 1299,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Modern shades with a classic silhouette.",
  },
  {
    id: 6,
    name: "Smart Speaker",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80",
    description: "Bring music into your room with compact audio.",
  },
  {
    id: 7,
    name: "Everyday Hoodie",
    price: 1599,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    description: "A relaxed layer for cool evenings.",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 999,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "A simple lamp for your study or workspace.",
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
