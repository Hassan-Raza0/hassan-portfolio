function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {currentYear} Hassan Raza</p>

      <p>Machine Learning and AI Portfolio</p>
    </footer>
  );
}

export default Footer;