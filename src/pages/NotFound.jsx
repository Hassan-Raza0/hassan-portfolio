import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-section">
      <p className="eyebrow">404 Error</p>

      <h1>Page Not Found</h1>

      <p className="page-introduction">
        The page you requested does not exist or may have been moved.
      </p>

      <Link className="primary-button" to="/">
        Return Home
      </Link>
    </section>
  );
}

export default NotFound;