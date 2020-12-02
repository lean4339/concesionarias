const json = require("../modulos/leerjson");

let controlador = {
        listar : (req,res)=>{
            let autos = [];
            let marcas = [];
            for(let i = 0; i < json.length; i++){
                autos.push(json[i].autos)
                
            }
            for(let i = 0; i < autos.length; i++){
                for(let j = 0; j < autos[i].length; j++){
                    marcas.push(autos[i][j])
                }
            }
            res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
            marcas.forEach(element => {
              
                res.write(`Marca: ${element.marca}\n\nModelo: ${element.modelo}\n\nAño: ${element.anio}\n\nColor: ${element.color}`)
            });
            res.end()
        },
        autosPorMarca : (req,res)=>{
            let autos = [];
            let marcas = [];
            let marca = req.params.marca 
            let autosMarcas = [];
            let autosPorMarca = 0;
            for(let i = 0; i < json.length; i++){
                autos.push(json[i].autos)
                
            }
            for(let i = 0; i < autos.length; i++){
                for(let j = 0; j < autos[i].length; j++){
                    autosMarcas.push(autos[i][j].marca)
                    if(marca == autos[i][j].marca){
                        autosPorMarca ++;
                        marcas.push(autos[i][j])
                    }
                }
            }
            if(!autosMarcas.includes(marca)){
                res.send("No manejamos la marca")
            }
            else{
                res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
                marcas.forEach(element => {
                    res.write(`Marca: ${element.marca}\nModelo: ${element.modelo}\nAño: ${element.anio}\nColor: ${element.color}\n\n`);
                    res.write(`Manejamos ${autosPorMarca} de esta marca`)
                });
                res.end()
            }
            
        },
        buscarPorDato : (req,res)=>{
            let dato = req.params.dato;
            let marca = req.params.marca;
            let autos = [];
            let marcas = [];
            let autosMarcas = [];
            let autosAño = [];
            let autosColor = [];
            let centinela = false;
            let autosAñoMarca = 0;
            let autosColorMarca = 0;
            res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
            for(let i = 0; i < json.length; i++){
                autos.push(json[i].autos)
                
            }
            for(let i = 0; i < autos.length; i++){
                for(let j = 0; j < autos[i].length; j++){
                    autosMarcas.push(autos[i][j].marca);
                    autosAño.push(autos[i][j].anio);
                    autosColor.push(autos[i][j].color);
                    if(marca == autos[i][j].marca){
                        marcas.push(autos[i][j])
                    }
                    
                }
            }
            if(!autosMarcas.includes(marca) && dato !== undefined){
                res.write("No manejamos la marca")
                res.end()
            }
            else{
                
                switch (true){
                    case autosAño.includes(Number(dato)):
                        marcas.forEach(element => {
                            if(element.anio == Number(dato) && element.marca == marca){
                                centinela = true;
                            }
                           
                           
                        });
                        if(centinela == true){
                            marcas.forEach(element => {
                                if(element.anio == Number(dato) && element.marca == marca){
                                    autosAñoMarca ++
                                    res.write(`el auto tiene Marca: ${element.marca}\nModelo: ${element.modelo}\nAño: ${element.anio}\ncolor: ${element.color}\n\n`)
                                    res.write(`\nManejamos ${autosAñoMarca} autos de la marca ${marca} y el año ${dato}`);
                                }
                            });
                        }
                        
                        break;
                    case autosColor.includes(dato):
                        marcas.forEach(element => {
                            if(element.color == dato && element.marca == marca){
                                centinela = true;
                            }
                        });
                        if(centinela == true){
                            marcas.forEach(element => {
                                if(element.color == dato && element.marca == marca){
                                    autosColorMarca ++;
                                    res.write(`el auto tiene Marca: ${element.marca}\nModelo: ${element.modelo}\nAño: ${element.anio}\ncolor: ${element.color}\n\n`)
                                    res.write(`\nManejamos ${autosColorMarca} autos de la marca ${marca} y color ${dato}`);
                                }
                            });
                        }
                        
                        break;
                    case !autosAño.includes(Number(dato)):
                        res.write("Todavia no vendemos un modelo de esas caracteristicas");
                        break;
                    case !autosColor.includes(dato) && (typeof dato) == "string":
                        res.write("no hay una verga de eso cabeza");
                        break;
                }
                res.end()
            }
        },

}

module.exports = controlador;