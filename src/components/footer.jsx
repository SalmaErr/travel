import "../css/footer.css";


function Footer() {
  return (
    <footer>
      <div className="footer-contenu">

        <div className="footer-colonne">
          <span className="footer-logo">Rihla</span>
          <p>Des voyages pensés avec soin.</p>
        </div>

        <div className="footer-colonne">
          <h3>Navigation</h3>
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Voyages</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-colonne">
          <h3>Contact</h3>
          <p>+212 000 000 000</p>
          <p>contact@rihla.com</p>
          <p>Agadir, Maroc</p>
        </div>

        <div className="footer-colonne">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="votre@email.com" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>

      </div>

      <div className="copyright">
        © 2026 Rihla. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;