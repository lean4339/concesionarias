const json = require("../modulos/leerjson");

let controlador = {
    listarMarcas : (req,res)=>{
        let autos = [];
        let marcas = []; 
        let fiat = 0; 
        for(let i = 0; i < json.length; i++){
            autos.push(json[i].autos)
            
        }
        for(let i = 0; i < autos.length; i++){
            for(let j = 0; j < autos[i].length; j++){
                marcas.push(autos[i][j].marca)
                
            }
        }
        
        const marcasArr = new Set(marcas);
        let filtradas = [...marcasArr] 
        res.write("Vendemos las siguientes marcas \n\n")
        filtradas.forEach(element => {
            res.write(` ${element}\n`);   
        });
        res.write(`\nTenemos un stock ${marcas.length} de autos:`)
        res.end();
    },
    autosPorMarca : (req,res)=>{
        let marca = req.params.marca;
        let autos = [];
        let marcas = [];
        let autosPorMarca = [];
        for(let i = 0; i < json.length; i++){
            autos.push(json[i].autos);   
        }
        for(let i = 0; i < autos.length; i++){
            for(let j = 0; j < autos[i].length; j++){
                marcas.push(autos[i][j].marca);
                if (autos[i][j].marca == marca){
                    autosPorMarca.push(autos[i][j])
                }
            }
        }
        if(!marcas.includes(marca)){
            res.send("No manejamos la marca");
        }
        else{
            res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
            res.write("Los autos que tenemos de esta marca son los siguientes: \n\n")
            autosPorMarca.forEach(element => {
                res.write(`Marca : ${element.marca}\n\nModelo: ${element.modelo}\n\nAño: ${element.anio}\n\n`)
            });
            res.write(`Tenemos un total de ${autosPorMarca.length} ${marca}`);
            res.end()
        }
    },
}

module.exports = controlador;