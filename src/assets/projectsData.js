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
    fullDescription:
      "Pour ce projet, j’ai développé une application bancaire en ligne en utilisant React et Redux, garantissant ainsi une gestion fluide et optimisée de l’état global de l’application. L’un des défis majeurs était la mise en place d’un système d’authentification sécurisé, permettant aux utilisateurs de ✔ Se connecter et se déconnecter en toute sécurité. ✔ Accéder à leur tableau de bord personnalisé. ✔ Consulter les informations de leur profil, avec un accès conditionné à une authentification réussie, assurant ainsi une protection stricte des données sensibles. L’application inclut également un système de gestion des transactions bancaires, offrant un affichage détaillé des opérations du mois en cours. Pour assurer une communication efficace entre le front-end et le back-end, j’ai conçu et documenté les endpoints API en suivant la norme Swagger, ce qui facilite la maintenance et l’évolution de l’architecture. Dans une démarche Green Code, j’ai appliqué des bonnes pratiques d’optimisation, notamment :✔ Optimisation des images pour réduire leur impact sur la performance. ✔  Structuration modulaire du projet avec des composants réutilisables pour limiter la redondance du code. Afin d’améliorer mon processus de développement et de déboguer efficacement l’état global de l’application, j’ai utilisé React Developer Tools, un outil indispensable pour analyser et optimiser l’arborescence des composants et l’état du store Redux. Ce projet m’a permis de renforcer mes compétences en gestion d’état avec Redux, en authentification sécurisée, ainsi qu’en modélisation d’API REST avec Swagger. J’ai également approfondi mon approche du développement efficace et durable grâce à des pratiques d’optimisation et de modularisation du code.",
    github: "https://github.com/monrepo/projet11",
    live: "https://argent-bank-p10.vercel.app/",
  },

  {
    image: projet7,
    title: "KASA",
    shortDescription:
      "Développement d’une application de location immobilière avec React et React Router. Mise en place des composants dynamiques, d'un carrousel interactif et gestion des routes.",
    fullDescription:
      "Ce projet m’a permis de concevoir une application moderne et dynamique dédiée à la location immobilière, en appliquant les bonnes pratiques du développement front-end. Développée avec React et React Router, l’application offre une navigation fluide et intuitive, mettant en avant des fonctionnalités interactives et une gestion optimisée des données. L’un des défis majeurs a été la mise en place du routage avec React Router, y compris la gestion des erreurs et des redirections (404) pour garantir une navigation cohérente et sécurisée. J’ai structuré l’application autour de composants réutilisables, assurant une meilleure maintenabilité et évolutivité du code. L’expérience utilisateur a été enrichie grâce à plusieurs fonctionnalités dynamiques : -Carrousel interactif permettant d'afficher plusieurs images par logement, avec une gestion fluide des transitions et des événements utilisateur. -Système de collapsibles pour afficher dynamiquement les détails des propriétés, offrant un affichage épuré et optimisé. -Animations CSS intégrées pour améliorer l’interactivité et rendre l’interface plus agréable. L’ensemble du projet a été structuré avec SASS, facilitant la gestion et l’organisation des styles CSS de manière modulaire. Par ailleurs, les données de l’application sont chargées dynamiquement à partir d’un fichier JSON simulant un backend, permettant ainsi de gérer l'affichage dynamique des logements.L’utilisation de Vite a été un atout pour optimiser les performances et accélérer le développement. J’ai également appliqué des principes de Green Code, en veillant à optimiser les images et à structurer le projet de façon efficiente. Ce projet m’a permis d’approfondir mes connaissances en React, en gestion des routes dynamiques et en structuration modulaire du code. J’ai pu améliorer mon approche du développement d’interfaces interactives, tout en optimisant les performances et l’accessibilité de l’application.",
    github: "https://github.com/pommeverte06/KASA_P7",
    live: "https://kasa-location-ib2ntuvrp-stephanie-paitre-s-projects.vercel.app/",
  },

  {
    image: projet2,
    title: "Sophie Bluel",
    shortDescription:
      "Développement dynamique du portfolio d’une architecte d’intérieur en JavaScript. Manipulation du DOM, gestion des événements utilisateurs et intégration d’une API pour rendre le site interactif.",
    fullDescription:
      "Dans ce projet, j’ai conçu et développé une page web dynamique pour le portfolio d’une architecte d’intérieur, en utilisant JavaScript Vanilla. L’objectif principal était de transformer un site statique en une application interactive, permettant à l’architecte de gérer ses réalisations via une interface administrable. L’un des enjeux majeurs a été la manipulation avancée du DOM, permettant d'afficher dynamiquement les projets et d'optimiser l'interactivité du site. J’ai mis en place une gestion efficace des événements utilisateur, facilitant les interactions telles que : ✔ Mise à jour dynamique du contenu grâce à la modification directe du DOM. ✔ Gestion des événements utilisateurs (clics, soumissions de formulaires). ✔ Développement d’une modale d’upload de médias, permettant l’ajout de nouvelles réalisations en toute simplicité. Le projet a nécessité l’intégration d’une API REST, permettant la récupération et l’envoi de données pour assurer la mise à jour en temps réel des projets affichés sur le site. De plus, une page de connexion sécurisée a été développée pour restreindre l’accès à l’administration du portfolio, assurant ainsi une gestion sécurisée des contenus. Ce projet m’a permis de renforcer mes compétences en JavaScript pur, en approfondissant ma maîtrise du DOM et des interactions dynamiques. J’ai également travaillé sur la communication avec une API, un élément essentiel pour développer des applications web interactives et réactives.",
    github: "https://github.com/pommeverte06/S0phieBluel_P6",
    // live: "https://monprojet2.com",
  },

  {
    image: projet1,
    title: "Oh my food",
    shortDescription:
      "Ce projet, conçu en mobile-first, a été réalisé en HTML et Sass, il intègre des animations CSS modernes pour une expérience utilisateur fluide et interactive.",
    fullDescription:
      "Dans ce projet, j’ai développé le site OhMyFood en adoptant une approche mobile-first, afin d’assurer une expérience fluide et optimisée sur tous les types d’écrans. Le design, fourni sous forme de maquettes Figma, a été intégré avec une grande précision en utilisant HTML et Sass, permettant une structuration efficace et modulaire des styles CSS. L’un des aspects clés de ce projet a été l’implémentation d’animations CSS modernes, visant à enrichir l’expérience utilisateur et à donner vie à l’interface avec des transitions fluides et engageantes. Pour cela, j’ai utilisé : ✔ Des animations CSS avancées pour les chargements progressifs des éléments. ✔ Des effets dynamiques sur les interactions (boutons, survols, transitions de menus). ✔ Une gestion optimisée des styles avec Sass, en utilisant des variables, mixins et partials pour assurer la réutilisabilité du code. En parallèle du développement, j’ai appliqué un workflow Git rigoureux avec un versionnement sur GitHub, ce qui m’a permis de renforcer mes compétences en gestion de projet, en collaboration sur un dépôt distant, et en suivi de l’évolution du code. Grâce à ce projet, j’ai approfondi ma maîtrise du CSS avancé, des préprocesseurs comme Sass et des bonnes pratiques du design responsive. J’ai également amélioré ma capacité à optimiser et structurer le code CSS pour offrir une expérience utilisateur fluide et intuitive.",
    github: "https://github.com/pommeverte06/ohMyFood_P4",
    live: "https://pommeverte06.github.io/ohMyFood_P4/",
  },

  {
    image: projet5,
    title: "Booki",
    shortDescription:
      "Intégration responsive de la page d’accueil d’une agence de voyage avec HTML & CSS. Respect des maquettes Figma et implémentation des bonnes pratiques de mise en page.",
    fullDescription:
      "Dans ce projet, j’ai réalisé l’intégration complète et responsive de la page d’accueil d’une agence de voyage en respectant avec précision les maquettes Figma fournies. L’objectif était d’assurer une mise en page moderne, fluide et accessible sur tous les types d’appareils (desktop, tablette et mobile). Pour cela, j’ai mis en œuvre les bonnes pratiques du développement front-end : ✔ Structuration optimisée du HTML et du CSS, garantissant un code propre et facilement maintenable. ✔ Utilisation des Media Queries pour adapter dynamiquement l’affichage aux différentes tailles d’écran. ✔ Application des techniques avancées de mise en page avec Flexbox et CSS Grid pour une organisation harmonieuse du contenu. ✔ Intégration des polices et icônes via Google Fonts et Font Awesome, améliorant l’esthétique et la cohérence visuelle du site. ✔ Respect des normes W3C pour assurer la conformité et la qualité du code. ✔ Utilisation des DevTools pour tester et optimiser l’affichage sur différents appareils et résolutions. Ce projet m’a permis de renforcer mes compétences en intégration web et en responsive design, tout en appliquant une approche rigoureuse du CSS. J’ai appris à créer des interfaces modernes et ergonomiques, offrant une navigation fluide et optimisée pour une expérience utilisateur de qualité.",
    github: "https://github.com/pommeverte06/Projet3_Booki",
    live: "https://pommeverte06.github.io/Projet3_Booki",
  },
];

export default projectsData;
