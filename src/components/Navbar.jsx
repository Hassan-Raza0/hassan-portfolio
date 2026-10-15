import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-nav-link" : "nav-link";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hassansoomroraza@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-top">
          <NavLink className="brand" to="/" onClick={closeMenu}>
            <span className="brand-logo">HR</span>
            <span>Hassan Raza</span>
          </NavLink>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <div className="nav-links">
            <NavLink className={navLinkClass} to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink className={navLinkClass} to="/about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink className={navLinkClass} to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink className={navLinkClass} to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className={`nav-action-btn secondary ${copied ? "copied" : ""}`}
              onClick={handleCopyEmail}
              title="Copy Hassan Raza's Email Address"
            >
              {copied ? "Copied! ✓" : "Copy Email"}
            </button>

            <NavLink
              className="nav-action-btn primary"
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;