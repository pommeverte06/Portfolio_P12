import React from "react";
import "./notFound.css";
import notFoundImage from "../../assets/404.webp";

function NotFound() {
  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="Erreur 404" className="not-found-image" />
    </div>
  );
}

export default NotFound;
