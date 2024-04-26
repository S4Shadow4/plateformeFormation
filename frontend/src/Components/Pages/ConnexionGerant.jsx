import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Connexion = () => {
    let [userNameInput, setuserNameInput]= useState("");
    let [mdpInput,setMdpInput]= useState("");
    let navigate=useNavigate();
  return (
    <div>
      <h1>Connexion</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            let gerant={userName:userNameInput,mdp:mdpInput};
            console.log(gerant);
             axios.post ("http://localhost:5000/gerant/login", gerant)
            .then((res)=>{
              console.log(res.data)
              localStorage.setItem("token", res.data.accessToken);
              localStorage.setItem("userName", `${userNameInput}`);
              navigate("/protected/admin"); 
            })
            .catch((error)=>{
              console.log (error);
            })
             
        }}
        >
            <label htmlFor="userName">userName:</label>
            <input type="text" id='userName' onInput={(e)=>{setuserNameInput(e.target.value)}} />
            <br />
            
            <label htmlFor="mdp">Mot de passe </label>
            <input type="password"  autoComplete='off'id='mdp'onInput={(e)=>{setMdpInput(e.target.value)}}/>
            <br/>
            <button type='submit'>Connection</button>
        </form>
    </div>
  )
}
export default Connexion;
