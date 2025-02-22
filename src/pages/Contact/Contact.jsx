import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";


function Contact() {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id", // Remplace par ton Service ID
        "template_id", // Remplace par ton Template ID
        e.target,
        "user_public_key" // Remplace par ta Clé Publique
      )
      .then(
        (result) => {
          setMessage("Message envoyé avec succès !");
        },
        (error) => {
          setMessage("Erreur lors de l'envoi. Vérifie ta configuration.");
        }
      );

    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Nom" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Votre message" required></textarea>
      <button type="submit">Envoyer</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Contact;
