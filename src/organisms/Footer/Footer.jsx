import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} MyApp. Všechna práva vyhrazena.
    </footer>
  );
}

export default Footer;
