
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="page-container section about-page">
      <span className="eyebrow">OUR STORY</span>
      <h1>Small joys. Everyday essentials.</h1>

      <p>
        Mini Store is a student-built e-commerce demonstration
        designed to make online shopping simple, clear, and enjoyable.
        We bring together fashion, accessories, electronics, and
        home essentials in one easy-to-browse catalogue.
      </p>

      <p>
        This project demonstrates React components, routing,
        shared cart state with Redux Toolkit, and persistent data
        using localStorage.
      </p>

      <Link to="/" className="button">
        ← Back to Home
      </Link>
    </main>
  );
}
