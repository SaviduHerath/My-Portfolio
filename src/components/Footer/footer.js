import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    {/* Navigation Links */}
    <div className="footer-links">
      <a href="intro">Home</a>
      <a href="Skills">About</a>
      <a href="#projects">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>

    {/* Contact Info */}
    <div className="footer-contact">
      <p>Email: saviduherath2003@gmail.com</p>
      <p>Phone: +94 710675594</p>
    </div>

    {/* Copyright */}
    <p className="footer-copy">© 2026 Savidu Herath. All Rights Reserved.</p>
  </div>
</footer>

  )
}

export default Footer