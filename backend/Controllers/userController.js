const dataBase= require("../Config/mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUsers = (req,res)=>{
    const {nom, plat, dateCommande } = req.body;

    //const nomClient = "NomDuClient";
    const getClientIdQuery = "SELECT id_client FROM `clients` WHERE nom_client = ?";

    dataBase.query(getClientIdQuery, [nom], (getClientError, clientResult) => {
        console.log("voici le nom du client:",nom);
        console.log("voici le nom du plat:",plat);
        console.log("voici la date de commande:",dateCommande);
        if (getClientError) {
            return res.status(500).json({ error: "Erreur interne du serveur lors de la recherche du client" });
        }

        if (clientResult.length === 0) {
            return res.status(400).json({ error: "Client non trouvé" });
        }

        const idClient = clientResult[0].id_client;

        const insertCommandeQuery = "INSERT INTO plats_commandes (id_client, plat_commande, date_commande) VALUES (?, ?, ?)";
        dataBase.query(insertCommandeQuery, [idClient, plat, dateCommande], (insertError) => {
            if (insertError) {
                return res.status(500).json({ error: "Erreur interne du serveur lors de l'insertion de la commande" });
            }

            return res.status(201).json({ message: "Commande effectuée avec succès" });
        });
    });
};

exports.signup=(req,res)=>{
    let insertUserQuery=
    "INSERT INTO `users` (nom_utilisateur_user,nom_user, prenom_user, age_user, mot_de_passe_user, contact_user,email_user, sexe_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    bcrypt
    .hash(req.body.mdp, 10)
    .then((hash) => {
      dataBase.query(insertUserQuery, [
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
        console.log("Utilisateur inscrit avec succès");
        return res.status(201).json({ hash, id: result.insertId });
      });
    })
    .catch((error) => { 
      return res.status(500).json({ error });
    });
};
  exports.login= (req,res)=>{
    console.log(req.body);
    let selectUserQuery ="SELECT * FROM `users` WHERE nom_utilisateur_user =?"
    dataBase.query(selectUserQuery,[req.body.userName],(error,result)=>{
      if(error){
        res.status(500).json(error)
      }
      if(result.length>0){
        bcrypt 
        .compare(req.body.mdp, result[0].mot_de_passe_user)
        .then((valid)=>{
          if(valid){
          let accessToken= jwt.sign(
            {user_id: result[0].id_user},
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