
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products.jsx";
import Cart from "./Cart";
import About from "./About";
import Checkout from "./Checkout";
import NotFound from "./NotFound";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <p>mini<span>store.</span> — Made for everyday living.</p>
        <p>Student project · React + Redux Toolkit</p>
      </footer>
    </div>
  );
}
