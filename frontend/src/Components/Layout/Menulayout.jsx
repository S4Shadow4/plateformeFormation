import React from "react"
import style from "./MenuLayout.module.css"
import logo from "../Assets/second_avatar.jpg"
import { NavLink } from "react-router-dom";
import {Outlet} from "react-router-dom"

const MenuLayout=()=>{
    return(
        <div>
          <header className= {style.header} >
        <section className= {style.logo} >
          {<img src= {logo} alt="" /> }
          <h1>Etudier +</h1>
        </section>
        <menu>
          <ul>
            <li>
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to={"/Formations"}>Formations</NavLink>
            </li>
            <li>
              <NavLink to={"/A Propos"}>A Propos</NavLink>
            </li>
            <li>
              <NavLink to={"/Contacts"}>Contacts</NavLink>
            </li>
          </ul>
        </menu>

        <section className= {style.section2} >
          <NavLink to={"/signup"} > <button className={style.button}>Inscription</button> </NavLink>
          <NavLink to={"/login"} > <button className={style.button} >Connexion</button> </NavLink> 
        </section>
        
      </header>
      <Outlet />
        </div>
         
      

    )

}
export default MenuLayout;