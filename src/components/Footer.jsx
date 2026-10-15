function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {currentYear} Hassan Raza</p>

      <nav className="footer-links" aria-label="Profile links">
        <a
          href="https://github.com/Hassan-Raza0"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-raza-soomro-a11496192/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>

      <p>Machine Learning and AI Portfolio</p>
    </footer>
  );
}

export default Footer;