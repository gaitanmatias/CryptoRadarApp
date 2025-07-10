import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Desarrollado por <a
          href="https://github.com/gaitanmatias"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Matías Gaitán
        </a> – <span className="footer-brand">CryptoRadar</span> © 2025</p>
    </footer>

  )
}

export default Footer