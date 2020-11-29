const express = require("express");
const router = express.Router()
let controladorHome = require("../controller/homeController")

router.get("/",controladorHome.saludar);

module.exports = router;