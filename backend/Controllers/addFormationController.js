const database = require('../Config/mysql');

exports.addFormation = (req,res)=>{
    const insertRoomQuery = "INSERT INTO `formation` (id_user,titre_formation, image_formation,debut_formation,fin_formation,description_formation,date_ajout_formation,) VALUES ( ?, ?)";

    dataBase.query(insertRoomQuery, [
        req.body.type_chambre,
        req.body.prix_chambre
    ], (error, result) => {
        if (error) {
            return res.status(401).json(error);
        }
        console.log("Chambre insérée avec succès");
    });
};

exports.getCours = (req,res)=>{
    res.json("You are the GOAT");

};
