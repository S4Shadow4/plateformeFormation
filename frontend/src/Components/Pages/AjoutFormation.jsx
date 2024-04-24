import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import style from "../styles/AjoutFormation.module.css"




const AjoutFormation =({FormationList, setFormationList})=>{
    let [FormationForm, setFormationForm]= useState(false);
    let [idformInput, setidformInput]= useState("");
    let [nomformInput, setNomformInput]= useState("");
    let [prixformInput, setPrixformInput]= useState("");
    let [duréformInput, setDuréformInput]= useState("");
    let [descformInput, setDescformInput]= useState("");
    let handleFormationForm = ()=>{
        setFormationForm((prevState)=> !prevState)
    }
    let FormationsForm = FormationForm &&(
        <form className={style.formation} onSubmit={(e)=>{
            e.preventDefault();
            let formation = {
                nom:nomformInput,
                durée: duréformInput,
                prix: Number(prixformInput),
                description: descformInput
            };
            console.log(formation);
            let newList = [...FormationList];
            newList.push(formation);
            setFormationList(newList);

            
        }}>                            
<table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="nom">Nom :</label>
                                        </td>
                                        <td>
                                            <input type="text" name="" id="nom" onInput={(e)=>setNomformInput(e.target.value)}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="prix">Prix:</label>
                                        </td>
                                        <td>
                                            <input type="number" name="" id="prix" onInput={(e)=>setPrixformInput(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="description">Description:</label>
                                        </td>
                                        <td>
                                            <input type="text" name="" id="description" onInput={(e)=>setDescformInput(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="durée">Durée:</label>
                                        </td>
                                        <td>
                                            <input type="text" id="durée" onInput={(e)=>setDuréformInput(e.target.value)}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <button>ENREGISTRER</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
    )

    return(
        <>
        <section>
            <article>
                <button onClick={handleFormationForm}>Ajouter Formation</button>
                <p><NavLink to={"Formation"}> Formation</NavLink></p>
            </article>
            <section className={style.formation}>
            {FormationsForm}
            </section>
        </section>
       
       
        </>
    )

}
export default AjoutFormation