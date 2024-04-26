import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './Components/Pages/Accueil';
import Inscription from './Components/Pages/Inscription';
import Connexion from './Components/Pages/Connexion';
import Profil from './Components/Pages/Profil';
import ProtectedRoute from './Components/Pages/ProtectedRoute';
import MenuLayout from "../src/Components/Layout/Menulayout";
import AjoutFormation from './Components/Pages/AjoutFormation';
import Formation from './Components/Pages/Formations';
import AdminDashboard from './Components/Pages/AdminDashboard';
import ConnexionGerant from './Components/Pages/ConnexionGerant'
import InscriptionGerant from './Components/Pages/InscriptionGerant'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuLayout/>}>
            <Route index element={<Accueil/>}/>
            <Route path="/signup" element={<Inscription/>}/> 
            <Route path="/login" element={<Connexion/>}/>
            <Route path="/Formations" element={<Formation/>}/>
          </Route>

          <Route path="/ajoutFormation" element={<AjoutFormation/>}/>
          <Route path='/inscription' element={<InscriptionGerant/>}/>
          <Route path='/admin' element={<ConnexionGerant/>}/>

          <Route path="/protected" element={<ProtectedRoute/>}>
            <Route path="profil" element={<Profil/>}/>
            <Route path="admin" element={<AdminDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
