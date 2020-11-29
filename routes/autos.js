const express = require("express");
const router = express.Router();
const autosController = require("../controller/autosController");

router.get("/",autosController.listar);

router.get("/:marca",autosController.autosPorMarca);

router.get("/:marca/:dato?",autosController.buscarPorDato);

module.exports = router;