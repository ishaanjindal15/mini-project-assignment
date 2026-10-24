
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import { formatPrice } from "./products";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setAdded(true);

    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>{formatPrice(product.price)}</strong>
          <button className="button button-small" onClick={handleAdd}>
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
