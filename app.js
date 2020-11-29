const express = require("express");
const app = express();
const routerHome = require("./routes/home");
const routerSucursales = require("./routes/sucursales");
const routerMarcas = require("./routes/marcas");
const routerAutos = require("./routes/autos");

app.listen(3030,()=>{
    console.log("Servidor corriendo re zarpado por aqui")
});

app.use("/", routerHome);
app.use("/sucursales",routerSucursales);
app.use("/marcas",routerMarcas);
app.use("/autos",routerAutos);