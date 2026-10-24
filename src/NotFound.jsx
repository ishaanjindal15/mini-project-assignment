
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-container section empty-state">
      <span className="eyebrow">ERROR 404</span>
      <h1>Looks like a wrong turn.</h1>
      <p className="muted">
        This page doesn't exist in our store.
      </p>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </main>
  );
}
