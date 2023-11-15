// HomePage.js
import React from 'react';
import Navigateur from '../Com/Navigation';
import '../Pages/Navigateur.css'; // Assurez-vous d'importer le fichier CSS

const HomePage = () => {
    return (
        <div className="home-page">
            <Navigateur />
            <div className="content">
                <h1>Bienvenue sur mon CV interactif, développé avec React !!</h1>
                <div className='Pres-item'>
                <p>
                Bienvenue sur mon CV interactif, développé avec React. Je suis un passionné de développement web, et cette page est mon espace pour partager mes expériences, formations et compétences. Utilisez la barre latérale pour explorer différentes sections de mon CV. 🚀
                </p>
                </div>
                <h2>À propos de moi</h2>
                <div className='Pres-item'>
                <p>
Je m'appelle EL MAJJOUTI M'Hamed, j'ai 22 ans. Mon parcours académique
  m'a permis d'acquérir une solide compréhension des concepts fondamentaux de
  l'analyse de données, de la collecte à la visualisation des données. J'ai également
  développé une expertise pratique en utilisant des langages informatiques tels que SQL<i class="fas fa-database"></i>, SAS<i class="fas fa-code"></i> et Python<i class="fab fa-python"></i>, ainsi que des outils de Business Intelligence tels que Microsoft Excel<i class="fab fa-microsoft"></i> , Power BI<i class="fab fa-battle-net"></i> et Looker Studio <i class="fab fa-looker"></i>. Ces compétences sont cruciales pour le processus
  de prise de décision, c'est pourquoi j'ai décidé de poursuivre mes études en master MIASHS,
  afin d'approfondir mes connaissances et de réaliser mes objectifs académiques et
  professionnels.
</p>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
