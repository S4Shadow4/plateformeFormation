const jwt= require("jsonwebtoken");
//require("dotenv").config();
module.exports=(req,res,next)=>{
    try{
        let token =req.headers["authorization"].split(" ")[1];
       let verifiedToken= jwt.verify(token, "bRODJI04#");
       req.id_gerant=verifiedToken.geran_id
       next();
    }catch(error){
        res.status(403).json(error)
    }
} 