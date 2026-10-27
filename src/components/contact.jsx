
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/contact.css";

function Contact() {
  const [valeurs, setValeurs] = useState({
    email: "",
    motDePasse: "",
  });

  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  function changer(e) {
    setValeurs({
      ...valeurs,
      [e.target.name]: e.target.value,
    });

    setEnvoye(false);
    setErreurs({});
  }

  function verifier() {
    const nouvelles = {};

    if (!/^\S+@\S+\.\S+$/.test(valeurs.email)) {
      nouvelles.email = "Veuillez entrer un e-mail valide.";
    }

    if (valeurs.motDePasse.trim() === "") {
      nouvelles.motDePasse = "Veuillez entrer votre mot de passe.";
    }

    return nouvelles;
  }

  function connecter(e) {
    e.preventDefault();

    const nouvelles = verifier();
    setErreurs(nouvelles);

    if (Object.keys(nouvelles).length === 0) {
      console.log("Demande de connexion :", {
        email: valeurs.email,
      });

      setEnvoye(true);
    }
  }

  return (
    <>
      <Header />

      {/* En-tête */}
      <section className="ct-entete">
        <span className="petit-titre">RIHLA VOYAGES</span>

        <h1>Connexion à votre compte</h1>

        <span className="trait-or"></span>
      </section>

      {/* Coordonnées et formulaire */}
      <section className="ct-contenu">
        <div className="ct-infos">
          <div>
            <span className="ct-label">Adresse</span>
            <p>
              Avenue Hassan II, Centre-ville
              <br />
              Agadir 80000, Maroc
            </p>
          </div>

          <div>
            <span className="ct-label">Téléphone</span>
            <a href="tel:+212528840000">
              +212 528-84-00-00
            </a>
          </div>

          <div>
            <span className="ct-label">WhatsApp</span>
            <a
              href="https://wa.me/212600123456"
              target="_blank"
              rel="noreferrer"
            >
              +212 600-123-456
            </a>
          </div>

          <div>
            <span className="ct-label">E-mail</span>
            <a href="mailto:contact@rihla-voyages.example">
              contact@rihla-voyages.example
            </a>
          </div>

          <div>
            <span className="ct-label">Horaires d'ouverture</span>
            <p>
              Lundi – Vendredi : 09h00 – 18h00
              <br />
              Samedi : 09h00 – 13h00
              <br />
              Dimanche : fermé
            </p>
          </div>
        </div>

        {/* Formulaire de connexion */}
        <form
          className="ct-formulaire"
          onSubmit={connecter}
          noValidate
        >
          <h2>Connexion</h2>

          {envoye && (
            <p className="ct-succes">
              Formulaire validé. La connexion nécessite
              un compte enregistré sur le serveur.
            </p>
          )}

          <div className="ct-champ">
            <label htmlFor="email">Adresse e-mail</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              value={valeurs.email}
              onChange={changer}
            />

            {erreurs.email && (
              <span className="ct-erreur">
                {erreurs.email}
              </span>
            )}
          </div>

          <div className="ct-champ">
            <label htmlFor="motDePasse">Mot de passe</label>

            <input
              id="motDePasse"
              name="motDePasse"
              type="password"
              placeholder="Votre mot de passe"
              value={valeurs.motDePasse}
              onChange={changer}
            />

            {erreurs.motDePasse && (
              <span className="ct-erreur">
                {erreurs.motDePasse}
              </span>
            )}
          </div>

          <button type="submit">
            Connexion
          </button>

          <small>
            Vous n'avez pas de compte ?{" "}
            <a href="/inscription">Créer un compte</a>
          </small>
        </form>
      </section>

      {/* Google Maps */}
      <section className="ct-carte">
        <div className="ct-carte-titre">
          <span className="petit-titre">NOUS TROUVER</span>
          <h2>Notre agence à Agadir</h2>
          <p>
            Retrouvez notre emplacement sur Google Maps.
          </p>
        </div>

        <iframe
          title="Carte Google Maps - Agadir Maroc"
          src="https://maps.google.com/maps?q=Avenue%20Hassan%20II%2C%20Agadir%2C%20Maroc&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <a
          className="ct-lien-carte"
          href="https://www.google.com/maps/search/?api=1&query=Avenue+Hassan+II+Agadir+Maroc"
          target="_blank"
          rel="noreferrer"
        >
          Ouvrir dans Google Maps ↗
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
