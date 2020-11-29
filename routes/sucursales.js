const express = require("express");
const router = express.Router();
const sucursalesController = require("../controller/sucursalesController");

router.get("/",sucursalesController.lista);

router.get("/:sucursal",sucursalesController.sucursalCompleta);
module.exports = router;