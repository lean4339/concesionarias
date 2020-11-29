const json = require("../modulos/leerjson")
let controlador = {
    saludar : (req,res)=>{
        res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
        res.write("Bienvenidos al sitio\n\n");
        json.forEach(element => {
            res.write(`sucursal ${element.sucursal}\n`)
        });
        res.end()
    }
}
module.exports = controlador;