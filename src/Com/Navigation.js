import React from "react";
import '../Pages/Navigateur.css'; // Assurez-vous d'importer le fichier CSS
import { NavLink } from "react-router-dom";


const Navigateur = () => {
  return (
    <div className="sidebar">
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <img
        src= "IMG.png"
        alt="Votre photo"
        className="profile-picture"
      />
      <h2>EL MAJJOUTI M'hamed</h2>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/MesFormations" activeClassName="navActive">
              <i className="fas fa-graduation-cap"></i>
              <span>Mes Formations</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Compétence" activeClassName="navActive">
              <i className="fas fa-cogs"></i>
              <span>Competence</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/MesExperiences" activeClassName="navActive">
              <i className="fas fa-briefcase"></i>
              <span>Expérience</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact" activeClassName="navActive">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigateur;

