// Formation.js
import React from 'react';
import Navigateur from '../Com/Navigation';
import '../Pages/Navigateur.css';

const FormationPage = () => {
  return (
    <div className="Formation-page">
      <Navigateur />
      <div className="content">
        <h1>Mes Formations</h1>

        <div className="formation-item" data-tip="Cliquez pour plus de détails">
          <h2>Université de Lille</h2>
          <p>Master MIASHS parcours WA</p>
          <p>Année: 2022 - 2024</p>
        </div>

        <div className="formation-item" data-tip="Cliquez pour plus de détails">
          <h2>Université de Lille</h2>
          <p>Licence MIASHS</p>
          <p>Année: 2021 - 2022</p>
        </div>

        <div className="formation-item" data-tip="Cliquez pour plus de détails">
          <h2>Université Hassan 2 - Mohammédia</h2>
          <p>Licence informatique</p>
          <p>Année: 2018 - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;

