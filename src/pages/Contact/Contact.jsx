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
    <div className="container">
    <div className="contact-container ">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">N’hésitez pas à me contacter.</p>

      <form onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <label>
            <i className="fa-solid fa-user"></i> Nom et prénom 
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Nom et prénom"
            required
          />
        </div>

        <div className="input-group">
          <label>
            <i className="fa-solid fa-at"></i> Email 
          </label>
          <input
            type="email"
            name="from_email"
            placeholder="Saisissez votre email"
            required
          />
        </div>

        <div className="input-group full-width">
          <label>
            <i className="fa-solid fa-comment-dots"></i> Message 
          </label>
          <textarea
            name="message"
            placeholder="Saisissez votre message"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-button">
          Envoyer
        </button>

        {message && <p className={messageType}>{message}</p>}
      </form>
    </div>
    </div>
  );
}

export default Contact;
