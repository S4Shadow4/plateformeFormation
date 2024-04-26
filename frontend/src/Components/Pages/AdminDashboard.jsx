import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Admin.module.css';
import logo from "../Assets/3eme-icone.jpg"
import axios from 'axios'
import { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [showUserList, setShowUserList] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/gerant/select')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const toggleUserList = () => {
        setShowUserList(!showUserList);
    };

    return (
        <div className={style.container}>
            <aside>
                <div className={style.toggle}>
                    <div className={style.logo}>
                        <NavLink to="/admin"> <h2>Etudier + </h2> </NavLink>
                    </div>
                    <div className={style.close} id="close-btn">
                        <span className="material-icons-sharp">close</span>
                    </div>
                </div>

                <div className={style.sidebar}>
                    <NavLink to="/ajoutFormation">
                        <i className="fas fa-chart-bar">Ajouter Formation</i>
                    </NavLink>
                    <NavLink to="#" onClick={toggleUserList}>
                        <i className="fas fa-chart-bar">Voir Utilisateur</i>
                    </NavLink>
                    <NavLink to="#">
                        <i className="fas fa-chart-bar">Voir Formations</i>
                    </NavLink>
                    <NavLink to="#">
                        <i className="fas fa-chart-bar">Voir Inscription</i>
                    </NavLink>
                    <NavLink to="/admin">
                        <i className="fas fa-chart-bar">Se deconnecter</i>
                    </NavLink>
                </div>
            </aside>

            <main>
                <h1>Dashboard</h1> <br /> 

                <div className={style.analyse}>
                    

                </div>

                <div id="commandesContent">
                    
                <h2>Liste des Utilisateurs</h2>
                    <table id={style.utilisateurs}>
                        <thead>
                            <tr>
                                <th>id</th> <th>Nom</th> <th>Prenom</th> <th>age</th> <th>Contact</th> <th>email</th> <th>sexe</th> 
                            </tr>
                        </thead>
                        <tbody id={style.list_user} style={{ display: showUserList ? 'table-row-group' : 'none' }}>
                        {users.map(user => (
                                <tr key={user.id_user}>
                                    <td>{user.id_user}</td>
                                    <td>{user.nom_user}</td>
                                    <td>{user.prenom_user}</td>
                                    <td>{user.age_user}</td>
                                    <td>{user.contact_user}</td>
                                    <td>{user.email_user}</td>
                                    <td>{user.sexe_user}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> <br />

                    <h2>Liste des formations</h2>
                <table id={style.formations}>
                    <thead>
                        <tr>
                            <th>id</th> <th>titre</th> <th>date_debut</th> <th>date_fin</th> <th>description</th> <th>date_ajout</th>
                        </tr>
                    </thead>
                    <tbody id={style.list_form}></tbody>
                </table> 

                <h2>Liste des inscriptions</h2>
                <table id={style.formations}>
                    <thead>
                        <tr>
                            <th>id_inscription</th> <th>id_user</th> <th>id_formation</th> <th>date_inscription</th>
                        </tr>
                    </thead>
                    <tbody id={style.list_form}></tbody>
                </table> 
                </div>

            </main>

            <div className={style['right-section']}>
                <div className={style['user-profile']}>
                    {<img src= {logo} alt="" /> }
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
