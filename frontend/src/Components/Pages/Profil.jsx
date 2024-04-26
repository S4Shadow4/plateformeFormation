import React from 'react'
import styles from "../Layout/MenuLayout.module.css"
import style from "../styles/Accueil.module.css"
import logo from "../Assets/second_avatar.jpg"
import{NavLink, useNavigate} from "react-router-dom" 
import { useEffect} from "react";
import axios from "axios";

const Profil = () => {
  let navigate = useNavigate();
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    useEffect(() => {
      axios
        .get("http://localhost:5000/user/select", {
          headers: { authorization: `BEARER ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 403) {
            navigate("/login");
        } else {
            console.log(error);
        }
        });
    });
  

    return (
        <div >
    
           <header className= {styles.header} >
            <section className= {styles.logo} >
              {<img src= {logo} alt="" /> }
              <h1>Etudier +</h1>
            </section>
    
            <section className= {styles.section2} >
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
        <section className={style.Propos}>
          <h1>A Propos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim ipsa molestias, repudiandae 
            sint odit non quasi dolores ipsum eos, facere dicta? Deserunt blanditiis accusamus dignissimos 
            eveniet voluptatem quibusdam libero unde quaerat qui earum. Dolore maiores, quibusdam veniam illum 
            perspiciatis quas itaque numquam libero officia necessitatibus ad vero, sint eius fugit vitae et 
            commodi tempore aspernatur est distinctio. Voluptatibus accusantium velit nihil eaque quod odio impedit 
            ea inventore illo odit quis a, repellendus aspernatur magnam neque dolor fugit corporis incidunt facilis 
            recusandae maiores, exercitationem eos molestiae. Architecto, 
            natus sed dolorem soluta autem, provident repudiandae ducimus ex officiis et iste doloremque.
          </p>
          </section> 
          <section className={style.Formation}>
            <h1>Les Formations</h1>
            <section className={style.formation_box}>
              <article className={style.formation_box_img}></article>
              <aside className={style.formation_box_text}>
                  <h2>SVT</h2>
                  <button type='submit' className={style.button}>S'inscrire</button>
              </aside>
            </section>
            <section className={style.formation_box}>
              <article className={style.formation_box_img}></article>
              <aside className={style.formation_box_text}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolores expedita 
                  laboriosam consequatur et assumenda odit, 
                  repellendus quaerat tempore doloremque!</p>
                  <NavLink to={"/Inscription"}><button className={style.button}>S'inscrire</button></NavLink>
              </aside>
            </section>
            <section className={style.formation_box}>
              <article className={style.formation_box_img}></article>
              <aside className={style.formation_box_text}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolores expedita 
                  laboriosam consequatur et assumenda odit, 
                  repellendus quaerat tempore doloremque!</p>
                  <NavLink to={"/Inscription"}><button className={style.button}>S'inscrire</button></NavLink>
              </aside>
            </section>
            </section> 
            <section className={style.Formation}>
              <h1>Profitez de toutes nos formations</h1>
              <NavLink to={"/Formations"}><button>Plus de Formations</button></NavLink>
            </section>
            <section className={style.comments}>
              <article className={style.comments_card}></article>
              <button>Envoyer</button>
            </section>
    
            
        </div>
      )
}

export default Profil
