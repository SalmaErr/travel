
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/contact.css";

function Inscription() {
  const [valeurs, setValeurs] = useState({
    nom: "",
    email: "",
    motDePasse: "",
    confirmation: "",
  });

  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  function changer(e) {
    setValeurs({
      ...valeurs,
      [e.target.name]: e.target.value,
    });

    setErreurs({});
    setEnvoye(false);
  }

  function verifier() {
    const nouvelles = {};

    if (valeurs.nom.trim().length < 2) {
      nouvelles.nom = "Veuillez entrer votre nom complet.";
    }

    if (!/^\S+@\S+\.\S+$/.test(valeurs.email)) {
      nouvelles.email = "Veuillez entrer un e-mail valide.";
    }

    if (valeurs.motDePasse.length < 8) {
      nouvelles.motDePasse =
        "Le mot de passe doit contenir au moins 8 caractères.";
    }

    if (valeurs.confirmation !== valeurs.motDePasse) {
      nouvelles.confirmation =
        "Les mots de passe ne correspondent pas.";
    }

    return nouvelles;
  }

  function inscrire(e) {
    e.preventDefault();

    const nouvelles = verifier();
    setErreurs(nouvelles);

    if (Object.keys(nouvelles).length === 0) {
      setEnvoye(true);

      // L'inscription réelle nécessite un backend.
      console.log("Demande d'inscription :", {
        nom: valeurs.nom,
        email: valeurs.email,
      });
    }
  }

  return (
    <>
      <Header />

      {/* En-tête */}
      <section className="ct-entete">
        <span className="petit-titre">RIHLA VOYAGES</span>

        <h1>Créer votre compte</h1>

        <span className="trait-or"></span>
      </section>

      {/* Formulaire d'inscription */}
      <section className="ct-contenu">
        <form
          className="ct-formulaire"
          onSubmit={inscrire}
          noValidate
          style={{
            flex: "1 1 460px",
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <h2>Inscription</h2>

          {envoye && (
            <p className="ct-succes">
              Formulaire validé. La création du compte
              nécessite une connexion au serveur.
            </p>
          )}

          <div className="ct-champ">
            <label htmlFor="nom">Nom complet</label>

            <input
              id="nom"
              name="nom"
              type="text"
              placeholder="Votre nom complet"
              value={valeurs.nom}
              onChange={changer}
            />

            {erreurs.nom && (
              <span className="ct-erreur">
                {erreurs.nom}
              </span>
            )}
          </div>

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
              placeholder="Minimum 8 caractères"
              value={valeurs.motDePasse}
              onChange={changer}
            />

            {erreurs.motDePasse && (
              <span className="ct-erreur">
                {erreurs.motDePasse}
              </span>
            )}
          </div>

          <div className="ct-champ">
            <label htmlFor="confirmation">
              Confirmer le mot de passe
            </label>

            <input
              id="confirmation"
              name="confirmation"
              type="password"
              placeholder="Répétez votre mot de passe"
              value={valeurs.confirmation}
              onChange={changer}
            />

            {erreurs.confirmation && (
              <span className="ct-erreur">
                {erreurs.confirmation}
              </span>
            )}
          </div>

          <button type="submit">
            Créer mon compte
          </button>

          <small>
            Vous avez déjà un compte ?{" "}
            <a href="/contact">Connexion</a>
          </small>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Inscription;
