import logo from './logo.svg';
import './App.css';

import HomePage from './Pages/Home';
import ContactPage from './Pages/Contact';
import ExperiencePage from './Pages/Experience';
import FormationPage from './Pages/Formation';
import CompPage from './Pages/Competence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/MesFormations' element={<FormationPage />} />
          <Route path='/MesExperiences' element={<ExperiencePage />} />
          <Route path='/Contact' element={<ContactPage />} />
          <Route path='/Compétence' element={<CompPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
