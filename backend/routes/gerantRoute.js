const express= require("express");
const gerantCtrl= require("../Controllers/gerantController");
/* const verifys = require("../middleware/verifyjwts-gerant"); */

const router =  express.Router();

router.post("/signup",gerantCtrl.signup);
router.post("/login", gerantCtrl.login);
router.get("/select", gerantCtrl.getUsers);

module.exports = router;