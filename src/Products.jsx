
import { useState } from "react";
import { products } from "./products";
import ProductCard from "./ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="page-container section">
      <span className="eyebrow">THE COLLECTION</span>
      <h1>Shop all products.</h1>
      <p className="muted">
        Find your next favourite from our everyday essentials.
      </p>

      <div className="filters">
        <input
          className="search-input"
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          className="search-input"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "All" ? "All categories" : item}
            </option>
          ))}
        </select>
      </div>

      <p className="muted">
        Showing {filteredProducts.length} product(s)
      </p>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </main>
  );
}
