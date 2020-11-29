const json = require("../modulos/leerjson");

let controlador = {
    lista : (req,res)=>{
        res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
        json.forEach(element => {
            res.write(`Sucursal: ${element.sucursal},\n Direccion: ${element.direccion},\n Teléfono: ${element.telefono}\n\n`);
        });
        res.end()
    },
    sucursalCompleta : (req,res)=>{
        let sucursalId = req.params.sucursal;
        let sucursal = null;
        json.forEach(element => {
            if(element.sucursal.replace(/\s+/g, '') == sucursalId){
                sucursal = element;
            }
        });
       switch(true){
           case sucursal == null:
               res.send("No existe la sucursal");
               break;
            case sucursal !== null:
                res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"})
                res.write(`Sucursal: ${sucursal.sucursal},\n Direccion: ${sucursal.direccion},\n Telefono: ${sucursal.telefono}\n\n`);
                sucursal.autos.forEach(element => {
                    res.write(`Marca: ${element.marca},\n Modelo: ${element.modelo},\n Año: ${element.anio}\n Color: ${element.color}\n`)
                    res.write("\n\n")
                });
                res.end()
                break;
       }
     

    },
}

module.exports = controlador;