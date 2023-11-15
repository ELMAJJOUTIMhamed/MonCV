import React from 'react';
import Navigateur from '../Com/Navigation';
import '../Pages/Navigateur.css';

const CompetencePage = () => {
    return (
        <div className="Competence-page">
            <Navigateur />
            <div className="content">
                <h1>Compétences</h1>
                <div className="competence-container">
                    <div className="competence-column">
                        <div className="competence-item">
                            <p><strong>Python</strong></p>
                            <div className="bar-container">
                                <div className="bar" style={{ width: '90%' }}></div>
                            </div>
                            <div className="competence-details">
                                <p className="details-text">NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, Beautiful Soup, Re</p><br></br>
                            </div>

                            <p><strong>SQL</strong></p>
                            <div className="bar-container">
                                <div className="bar" style={{ width: '80%' }}></div>
                            </div>
                            <div className="competence-details">
                                <p className="details-text">Modélisation de données relationnelles, Conception de bases de données, Langage SQL (SELECT, INSERT, UPDATE, DELETE), Optimisation des requêtes SQL, Création des triggers</p><br></br>
                            </div>

                            <p><strong>R</strong></p>
                            <div className="bar-container">
                                <div className="bar" style={{ width: '60%' }}></div>
                            </div>
                            <div className="competence-details">
                                <p className="details-text">Visualisation de données avec ggplot2, Statistiques descriptives, Modélisation statistique, Analyse de séries temporelles</p><br></br>
                            </div>


                            <p><strong>JavaScript</strong></p>
                            <div className="bar-container">
                                <div className="bar" style={{ width: '75%' }}></div>
                            </div>
                            <div className="competence-details">
                                <p className="details-text">Utilisation de bibliothèques et de frameworks JavaScript, Développement de pages web interactives, Utilisation avancée de React.js, Utilisation d'Ajax pour les requêtes asynchrones</p><br></br>
                            </div>
                        </div>
                        {/* Ajoutez d'autres compétences pour la première colonne */}
                    </div>

                    <br></br>
                    <div className="competence-column">
                        <div className="competence-item">
                            <p><strong>Power BI</strong></p>
                            <div className="bar-container">
                                <div className="bar" style={{ width: '97%' }}></div>
                            </div>
                            <div className="competence-details">
                                <p className="details-text">Création de tableaux de bord interactifs, Transformation et nettoyage de données avec Power Query, Modélisation de données avec Power BI Desktop, Utilisation de DAX (Data Analysis Expressions), Création de visualisations percutantes, Intégration de données provenant de différentes sources, Partage de rapports et de tableaux de bord</p>
                            </div>
                            <br></br>
                            <br></br>
                            <p><strong>Power Automate</strong></p>
                            <div className="bar-container">
                                <div className="bar" style={{ width: '90%' }}></div>
                            </div>
                            <div className="competence-details">
                                <p className="details-text">Création de flux automatisés, Intégration de différentes applications et services, Automatisation de tâches répétitives et chronophages, Gestion des déclencheurs et des conditions dans les flux, Collect de données</p>
                            </div>
                        </div>
                        {/* Ajoutez d'autres compétences pour la deuxième colonne */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetencePage;
