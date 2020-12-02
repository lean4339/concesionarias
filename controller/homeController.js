const json = require("../modulos/leerjson")
let controlador = {
    saludar : (req,res)=>{
        let autos = 0;
        res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
        res.write("Bienvenidos al sitio\n\n");
        json.forEach(element => {
            res.write(`sucursal ${element.sucursal}\n Cantidad de autos: ${element.autos.length}\n\n`);
            autos = autos + element.autos.length
            
        });
        res.write(`Nuestro stock de autos es de un total de ${autos}\n`)
        res.end()
    }
}
module.exports = controlador;