const express= require("express");
const addFormationCtrl= require("../Controllers/addFormationController");
const verifys = require("../middleware/verifyjwts-gerant");

const router =  express.Router();

router.post("/insert",verifys,addFormationCtrl.addFormation);
router.post("/select",verifys,addFormationCtrl.getCours);

module.exports = router;