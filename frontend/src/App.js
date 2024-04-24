import React from 'react';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Accueil from './Components/Pages/Accueil';
import Inscription from './Components/Pages/Inscription';
import Connexion from './Components/Pages/Connexion';
import Profil from './Components/Pages/Profil';
import ProtectedRoute from './Components/Pages/ProtectedRoute';
import  MenuLayout  from "../src/Components/Layout/Menulayout";
import AjoutFormation from './Components/Pages/AjoutFormation';
import Formation from './Components/Pages/Formations';
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/Protected" element={<ProtectedRoute/>}>
        <Route path="profil" element={<Profil/>}/>
       </Route> 
       <Route path="/" element={<MenuLayout/>}>
       <Route index element={<Accueil/>}/>
       
        <Route path="/signup" element={<Inscription/>}/> 
        <Route path="/login" element={<Connexion/>}/>

       </Route>
       <Route path="/AjoutFormation" element={<AjoutFormation/>}/>
       <Route path="/Formations" element={<Formation/>}/>
       
       
       </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default App;
