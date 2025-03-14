import projet1 from "../assets/ohmyfood.webp";
import projet2 from "../assets/sophiebluel.webp";
import projet5 from "../assets/booki.webp";
import projet7 from "../assets/KASA-home.webp";
import projet11 from "../assets/argent-bank-home.webp";

const projectsData = [
  {
    image: projet11,
    title: "Argent Bank",
    shortDescription:
      "Développement d'une application bancaire avec React, Redux et une gestion sécurisée des utilisateurs. Mise en place de l'authentification et du tableau de bord et intégration des bonnes pratiques Green Code.",
    fullDescription: `
      <p>J’ai conçu une <strong>application bancaire</strong> en ligne avec <strong>React</strong> et <strong>Redux</strong>, garantissant une gestion optimisée de l’état global.</p>
      <ul>
        <li>✔ Se connecter/déconnecter en toute sécurité.</li>
        <li>✔ Accéder à un tableau de bord personnalisé.</li>
        <li>✔ Consulter leur profil avec une protection stricte des données.</li>
      </ul>
      <p>Optimisations Green Code :</p>
      <ul>
        <li>✔ <strong>Optimisation des images</strong> pour améliorer la performance.</li>
        <li>✔ <strong>Modularisation du code</strong> avec des composants réutilisables.</li>
      </ul>
    `,
    github: "https://github.com/pommeverte06/ArgentBank_P10",
    live: "https://argent-bank-p10.vercel.app/",
  },

  {
    image: projet7,
    title: "KASA",
    shortDescription:
      "Développement d’une application de location immobilière avec React et React Router. Mise en place des composants dynamiques, d'un carrousel interactif et gestion des routes.",
    fullDescription: `
      <p>J’ai conçu une <strong>application moderne et interactive</strong> dédiée à la location immobilière.</p>
      <ul>
        <li>✔ <strong>Carrousel interactif</strong> pour naviguer entre les photos des logements.</li>
        <li>✔ <strong>Collapsibles dynamiques</strong> pour afficher les détails des propriétés.</li>
        <li>✔ <strong>Animations CSS</strong> et transitions fluides.</li>
      </ul>
      <p>Optimisation du code :</p>
      <ul>
        <li>✔ Chargement dynamique des données JSON.</li>
        <li>✔ Architecture modulaire avec composants réutilisables.</li>
      </ul>
    `,
    github: "https://github.com/pommeverte06/KASA_P7",
    live: "https://kasa-location.vercel.app/",
  },

  {
    image: projet2,
    title: "Sophie Bluel",
    shortDescription:
      "Développement dynamique du portfolio d’une architecte d’intérieur en JavaScript. Manipulation du DOM, gestion des événements utilisateurs et intégration d’une API pour rendre le site interactif.",
    fullDescription: `
      <p>Transformation d'un site statique en <strong>interface dynamique</strong> avec <strong>JavaScript Vanilla</strong>.</p>
      <ul>
        <li>✔ <strong>Manipulation avancée du DOM</strong> pour affichage en temps réel.</li>
        <li>✔ <strong>Gestion des événements utilisateurs</strong> (clics, formulaires).</li>
        <li>✔ <strong>Développement d’une modale</strong> pour ajouter de nouveaux projets.</li>
      </ul>
    `,
    github: "https://github.com/pommeverte06/S0phieBluel_P6",
  },

  {
    image: projet1,
    title: "Oh my food",
    shortDescription:
      "Ce projet, conçu en mobile-first, a été réalisé en HTML et Sass, il intègre des animations CSS modernes pour une expérience utilisateur fluide et interactive.",
    fullDescription: `
      <p>Développement en approche <strong>mobile-first</strong> avec une structuration <strong>modulaire</strong> des styles.</p>
      <ul>
        <li>✔ <strong>Animations CSS avancées</strong> pour transitions fluides.</li>
        <li>✔ <strong>Effets dynamiques</strong> sur boutons et interactions.</li>
        <li>✔ <strong>Utilisation de Sass</strong> (variables, mixins, partials).</li>
      </ul>
    `,
    github: "https://github.com/pommeverte06/ohMyFood_P4",
    live: "https://pommeverte06.github.io/ohMyFood_P4/",
  },

  {
    image: projet5,
    title: "Booki",
    shortDescription:
      "Intégration responsive de la page d’accueil d’une agence de voyage avec HTML & CSS. Respect des maquettes Figma et implémentation des bonnes pratiques de mise en page.",
    fullDescription: `
      <p>Développement d’un site <strong>responsive</strong> en respectant les maquettes Figma.</p>
      <ul>
        <li>✔ <strong>Structuration optimisée</strong> du HTML & CSS.</li>
        <li>✔ <strong>Media Queries</strong> pour adaptation aux différents écrans.</li>
        <li>✔ <strong>Flexbox & Grid</strong> pour une mise en page harmonieuse.</li>
      </ul>
    `,
    github: "https://github.com/pommeverte06/Projet3_Booki",
    live: "https://pommeverte06.github.io/Projet3_Booki",
  },
];

export default projectsData;
