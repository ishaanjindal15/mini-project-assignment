
import { Link } from "react-router-dom";
import { products } from "./products";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">THE EVERYDAY EDIT</span>
          <h1>Good things.<br />Better prices.</h1>
          <p>
            Discover thoughtful essentials for your everyday life.
            Simple choices, great finds, all in one place.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="button">
              Explore Products →
            </Link>
            <Link to="/cart" className="button button-outline">
              View Cart
            </Link>
          </div>
        </div>

        <img
          className="hero-image"
          src={products[0].image}
          alt="Featured sneakers"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2>Popular picks</h2>
          </div>
          <Link to="/products" className="text-link">
            View all →
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
