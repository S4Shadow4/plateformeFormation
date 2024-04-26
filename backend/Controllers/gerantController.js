const dataBase= require("../Config/mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUsers = (req, res) => {
  let selectUsersQuery = "SELECT id_user, nom_user, prenom_user, age_user, contact_user, email_user, sexe_user FROM users";
  
  dataBase.query(selectUsersQuery, (errorUsers, users) => {
      if (errorUsers) {
          return res.status(500).json({ error: errorUsers.message });
      }
      return res.status(200).json(users);
  });
};

exports.getFormations = (req, res) => {
    let selectFormationsQuery = "SELECT id_formation, titre_formation, debut_formation AS date_debut, fin_formation AS date_fin, description_formation, date_ajout_formation FROM formation";

    dataBase.query(selectFormationsQuery, (errorFormations, formations) => {
        if (errorFormations) {
            return res.status(500).json({ error: errorFormations.message });
        }
        return res.status(200).json(formations);
    });
};

exports.getInscription = (req, res) => {
  let selectInscriptionsQuery = "SELECT * FROM inscription";

  dataBase.query(selectInscriptionsQuery, (errorInscriptions, inscriptions) => {
      if (errorInscriptions) {
          return res.status(500).json({ error: errorInscriptions.message });
      }
      return res.status(200).json(inscriptions);
  });
};

exports.signup=(req,res)=>{
    let insertGerantQuery=
    "INSERT INTO `gerant` (nom_utilisateur_gerant,nom_gerant, prenom_gerant, age_gerant, mot_de_passe_gerant, contact_gerant,email_gerant, sexe_gerant) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
    bcrypt
    .hash(req.body.mdp, 10)
    .then((hash) => {
      dataBase.query(insertGerantQuery, [
        req.body.userName,
        req.body.nom,
        req.body.prenom,
        req.body.age,
        hash,
        req.body.contact,
        req.body.email,
        req.body.sexe,
      ], (error, result) => {
        if (error) {
          return res.status(401).json(error);
        }
        console.log("Gerant inscrit avec succès");
        return res.status(201).json({ hash, id: result.insertId });
      });
    })
    .catch((error) => { 
      return res.status(500).json({ error });
    });
};
  exports.login= (req,res)=>{
    console.log(req.body);
    let selectGerantQuery ="SELECT * FROM `gerant` WHERE nom_utilisateur_gerant =?"
    dataBase.query(selectGerantQuery,[req.body.userName],(error,result)=>{
      if(error){
        res.status(500).json(error)
      }
      if(result.length>0){
        bcrypt 
        .compare(req.body.mdp, result[0].mot_de_passe_gerant)
        .then((valid)=>{
          if(valid){
          let accessToken= jwt.sign(
            {gerant_id: result[0].id_gerant},
            "bRODJI04#",
            {expiresIn:"10h"}
          )
          res.status(200).json({accessToken});
        }else{
          res.status(401).json({error: "incorect password"})
        }
      })
      .catch((error)=>res.status(500).json(error));
      }else{
        res.status(401).json({error:"user not found"})
      }
    });
}  