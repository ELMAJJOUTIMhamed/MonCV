// ExperiencePage.js
import React from 'react';
import Navigateur from '../Com/Navigation';
import '../Pages/Navigateur.css';

const ExperiencePage = () => {
    return (
        <div className="Experience-page">
            <Navigateur />
            <div className="content">
                <h1>Expériences Professionnelles</h1>

                <div className="experience-item">
                    <img src="kingfisher.png" alt="Logo Entreprise 1" className="company-logo" />
                    <div className='Pres-item'>
                        <p className="company-name">Kingfisher</p>
                        <p className="position">Alternant Analyste Achat</p>
                        <p className="dates">D'août 2023 à août 2024</p>
                        <div className="missions">
                            <p>Missions :</p>
                            <ul>
                                <li>
                                    - Analyse, traitement et transformation de données pour optimiser les processus d'achat.
                                </li>
                                <li>
                                    - Création de mesures avec DAX pour évaluer les performances et la rentabilité.
                                </li>
                                <li>
                                    - Définition des KPI sur des tableaux de bord afin d'assister les acheteurs dans leurs négociations.
                                </li>
                                <li>
                                    - Collecte automatisée et organisation de données pour une meilleure gestion des ressources.
                                </li>
                                <li>
                                    - <strong>Outils et technologies :</strong> Power BI, Power Query, DAX, Power Automate.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience-item">
                    <img src="Bredlak.png" alt="Logo Entreprise 2" className="company-logo" />
                    <div className='Pres-item'>
                        <p className="company-name">BREDLAK</p>
                        <p className="position">Stage Data Analyst / Engineer</p>
                        <p className="dates">D'Avril 2023 à août 2023</p>
                        <div className="missions">
                            <p>Missions :</p>
                            <ul>
                                <li>
                                    - Analyse approfondie des données CRM pour identifier des opportunités d'amélioration.
                                </li>
                                <li>
                                    - Automatisation de la collecte de données avec création de flux automatisés pour une gestion efficace.
                                </li>
                                <li>
                                    - Intégration, transformation et analyse des données de vente pour des insights stratégiques.
                                </li>
                                <li>
                                    - Définition des KPI pertinents pour évaluer les performances et la croissance.
                                </li>
                                <li>
                                    - Conception des modèles de données et développement de tableaux de bord interactifs.
                                </li>
                                <li>
                                    - Création de triggers pour assurer l'intégrité et la cohérence de la base de données.
                                </li>
                                <li>
                                    - <strong>Outils et technologies :</strong> Power BI, Power Query, Power Automate, SQL.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ajoutez d'autres expériences avec des informations similaires */}
            </div>
        </div>
    );
};

export default ExperiencePage;
