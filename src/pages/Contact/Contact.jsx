


import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Message envoyé avec succès !");
          setMessageType("success-message");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setMessage("Erreur lors de l'envoi. Vérifiez votre adresse email.");
          setMessageType("error-message");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title" id="contact-title">
        Discutons de votre projet
      </h2>

      <p className="contact-subtitle">
        Transformons vos idées en un projet concret<br />
        De la conception au développement, je vous aide à créer une expérience
        utilisateur fluide et engageante. <br />
        <br />
        <strong>Parlons-en dès maintenant !</strong>
        <br />
      </p>

      <form
        onSubmit={sendEmail}
        className="contact-form"
        aria-labelledby="contact-title"
      >
        <div className="input-group">
          <label htmlFor="from_name">
            <i className="fa-solid fa-user"></i> Nom et prénom
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Nom et prénom"
            required
            aria-required="true"
            aria-describedby="name-description"
          />
          <span id="name-description" className="sr-only">
            Veuillez entrer votre nom et prénom.
          </span>
        </div>

        <div className="input-group">
          <label htmlFor="from_email">
            <i className="fa-solid fa-at"></i> Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Saisissez votre email"
            required
            aria-required="true"
            aria-describedby="email-description"
          />
          <span id="email-description" className="sr-only">
            Veuillez entrer une adresse email valide.
          </span>
        </div>

        <div className="input-group full-width">
          <label htmlFor="message">
            <i className="fa-solid fa-comment-dots"></i> Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Saisissez votre message"
            required
            aria-required="true"
            aria-describedby="message-description"
          ></textarea>
          <span id="message-description" className="sr-only">
            Veuillez saisir votre message.
          </span>
        </div>

        <button
          type="submit"
          className="contact-button"
          aria-label="Envoyer le message"
        >
          Envoyer
        </button>

        {message && (
          <p
            className={messageType}
            role="alert"
            aria-live="polite"
            id="form-message"
          >
            {message}
          </p>
        )}
      </form>

      <div className="social-links">
        <p>Retrouvez-moi aussi sur </p>
        <div className="social-icons">
          <a
            href="https://github.com/pommeverte06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon profil GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/stephanie-paitre/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon profil LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
