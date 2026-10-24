
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "./cartSlice";
import { formatPrice } from "./products";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (items.length === 0) return;

    dispatch(clearCart());
    window.alert("Your demo order has been placed successfully!");
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <main className="page-container section empty-state">
        <h1>Nothing to check out.</h1>
        <p className="muted">Your cart is currently empty.</p>
        <Link to="/products" className="button">
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="page-container section checkout-page">
      <span className="eyebrow">ALMOST YOURS</span>
      <h1>Checkout.</h1>
      <p className="muted">
        Review your order before placing your demo order.
      </p>

      <section className="order-summary checkout-summary">
        {items.map((item) => (
          <div className="summary-row" key={item.id}>
            <span>{item.name} × {item.quantity}</span>
            <span>
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}

        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="summary-row summary-total">
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </div>

        <button
          className="button button-full"
          onClick={placeOrder}
        >
          Place Demo Order
        </button>
      </section>
    </main>
  );
}
