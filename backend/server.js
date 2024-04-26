const userRoute= require("./routes/userRoute");
const gerantRoute = require("./routes/gerantRoute");
const addFormation = require("./routes/addFormationRoute")

const express = require("express");
const cors= require("cors");
const app = express();

app.use(cors()); 
app.use(express.json()); 

app.use("/user",userRoute);
app.use("/gerant",gerantRoute);
app.use("/addFormation",addFormation);

app.listen( 5000 || process.env.PORT );



