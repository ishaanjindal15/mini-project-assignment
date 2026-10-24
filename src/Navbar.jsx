
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);

  const itemCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        mini<span>store.</span>
      </NavLink>

      <nav>
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={linkClass}>
          Products
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/cart" className={linkClass}>
          Cart <span className="cart-badge">{itemCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

