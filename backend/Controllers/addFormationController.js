const dataBase = require("../Config/mysql");

exports.addFormation = (req, res) => {
  let insertFormationQuery =
    'INSERT INTO `formation` (titre_formation, image_formation, debut_formation, fin_formation,description_formation) VALUES(?,?,?,?,?) ';
  dataBase.query(
    insertFormationQuery,
    [
      req.body.titre,
      `${req.protocol}://${req.get('host')}/files/${req.file.filename}`,
      req.body.debut,
      req.body.fin,
      req.body.description,
    ],
    (error, result) => { 
      if (error) throw error; 
      res.status(201).json('save'); // Utilisez res.status(201) pour indiquer que la ressource a été créée
    } 
  );
};
