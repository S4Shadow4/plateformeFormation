import React from "react"
import { NavLink } from "react-router-dom"
import style from "../styles/Formation.module.css"



const Formation= ()=>{
    return(
        <>
        <div className={style.container}>
            <div className={style.slideBar}>
                <h3><NavLink to="">Ajouter formation</NavLink></h3>
            </div>
            <div className={style.content}>
                <section className={style.entete}>
                    <article className={style.entete__article}></article>
                    <article className={style.entete__article}></article>
                    <article className={style.entete__article}></article>
                    
                </section>
                
                <section className={style.table}>
                    <table>
                        <thead>
                            <tr>
                                <td>button</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>button</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            
        </div>
        </>
    )

}
export default Formation