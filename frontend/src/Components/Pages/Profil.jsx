import React from 'react'
import style from "../styles/Accueil.module.css"
import logo from "../Assets/second_avatar.jpg"
/* import{NavLink} from "react-router-dom" */

const Profil = () => {
    const userName = localStorage.getItem("userName");
    return (
        <div >
    
           <header className= {style.header} >
            <section className= {style.logo} >
              {<img src= {logo} alt="" /> }
              <h1>Etudier +</h1>
            </section>
    
            <section className= {style.section2} >
                <h2>{userName}</h2>
            </section>
            
          </header>
         
          <div className={style.presentation}>
          <section className={style.cadre} >
            <article>
              <h2>Bienvenue dans votre futur </h2>
              <h3>Etoile ++😍</h3>
              
            </article>
          </section>
            </div>  
    
            
        </div>
      )
}

export default Profil
