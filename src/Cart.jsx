
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "./cartSlice";
import { formatPrice } from "./products";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="page-container section empty-state">
        <span className="empty-icon">🛍️</span>
        <h1>Your cart is waiting.</h1>
        <p className="muted">
          Looks like you haven't added anything yet.
        </p>
        <Link to="/products" className="button">
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="page-container section">
      <span className="eyebrow">YOUR SELECTION</span>
      <h1>Shopping cart.</h1>
      <p className="muted">{totalItems} item(s) in your cart</p>

      <div className="cart-layout">
        <section className="cart-items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="muted">{formatPrice(item.price)} each</p>

                <div className="quantity-control">
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>

              <strong className="line-total">
                {formatPrice(item.price * item.quantity)}
              </strong>
            </article>
          ))}

          <button
            className="text-link"
            onClick={() => dispatch(clearCart())}
          >
            Clear entire cart
          </button>
        </section>

        <aside className="order-summary">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Items ({totalItems})</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>
          <Link to="/checkout" className="button button-full">
            Proceed to Checkout →
          </Link>
          <Link to="/products" className="back-link">
            Continue shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
