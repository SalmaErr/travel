import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="header-contenu">
        <a href="#" className="logo">Rihla</a>

        <nav>
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Voyages</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;