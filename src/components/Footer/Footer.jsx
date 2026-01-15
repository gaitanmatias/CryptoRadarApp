import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Desarrollado por{" "}
        <a
          href="https://github.com/gaitanmatias"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Matías Gaitán
        </a>{" "}
        – <span className="footer__brand">CryptoRadar</span> © 2025
      </p>
    </footer>
  );
}

export default Footer;
