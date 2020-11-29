const fs = require("fs");

const json = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))

module.exports = json;