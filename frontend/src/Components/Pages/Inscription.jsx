import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Inscription = () => {
    let [userNameInput, setUserNameInput]= useState("");
    let [nomInput, setNomInput]= useState("");
    let [prenomInput, setPrenomInput]= useState("");
    let [ageInput,setAgeInput]= useState("");
    let [mdpInput,setMdpInput]= useState("");
    let [contactInput,setContactInput]= useState("");
    let [emailInput,setEmailInput]= useState("");
    let [sexeInput,setSexeInput]= useState("");
    let navigate= useNavigate();
  return (
    <div>
       <h1>Inscription</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            let user={userName: userNameInput,nom:nomInput,prenom:prenomInput,age:ageInput,mdp:mdpInput,contact:contactInput,email:emailInput,sexe:sexeInput};
            console.log(user);
            axios
            .post("http://localhost:5000/user/signup", user)
            .then((res)=>{
              console.log(res.data);
              localStorage.setItem("userFullName", `${nomInput} ${prenomInput}`);
              navigate("/login");
            })
            .catch((error)=>{
              console.log (error.response);
            })
             
        }}
        >
            <label htmlFor="userName">Nom Utilisateur:</label>
            <input type="text" id='userName' required onInput={(e)=>{setUserNameInput(e.target.value)}} />
            <br />

            <label htmlFor="nom">Nom:</label>
            <input type="text" id='nom' required onInput={(e)=>{setNomInput(e.target.value)}} />
            <br />
            
            <label htmlFor="prenom">Prenom:</label>
            <input type="text" id='prenom' required onInput={(e)=>{setPrenomInput(e.target.value)}} />
            <br />

            <label htmlFor="age">Age:</label>
            <input type="number" id='age'required onInput={(e)=>{setAgeInput(e.target.value)}} />
            <br />

            <label htmlFor="mdp">Mot de passe</label>
            <input type="password" id='mdp' autoComplete='off' required onInput={(e)=>{setMdpInput(e.target.value)}} />
            <br />
            
            <label htmlFor="contact"> Contact </label>
            <input type="text" id='contact' required onInput={(e)=>{setContactInput(e.target.value)}} />
            <br />

            <label htmlFor="email"> Email </label>
            <input type="email" id='email' required onInput={(e)=>{setEmailInput(e.target.value)}} />
            <br />

            <label htmlFor="sexe">Sexe</label>
              <select id="sexe" required onChange={(e) => { setSexeInput(e.target.value) }}>
                
              <option value="" disabled selected>Selectionnez</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
              <br />
            <button type='submit'>S'inscrire</button>
        </form>
    </div>
  )
}

export default Inscription;
