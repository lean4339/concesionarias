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
            for(let i = 0; i < json.length; i++){
                autos.push(json[i].autos)
                
            }
            for(let i = 0; i < autos.length; i++){
                for(let j = 0; j < autos[i].length; j++){
                    autosMarcas.push(autos[i][j].marca)
                    if(marca == autos[i][j].marca){
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
                    res.write(`Marca: ${element.marca}\nModelo: ${element.modelo}\nAño: ${element.anio}\nColor: ${element.color}\n\n`)
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
                                    res.write(`el auto tiene Marca: ${element.marca}\nModelo: ${element.modelo}\nAño: ${element.anio}\ncolor: ${element.color}\n\n`)
                                }
                            });
                        }
                        else{
                            res.write("no manejamos el dato precisado")
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
                                    res.write(`el auto tiene Marca: ${element.marca}\nModelo: ${element.modelo}\nAño: ${element.anio}\ncolor: ${element.color}\n\n`)
                                }
                            });
                        }
                        else{
                            res.write("no manejamos el dato precisado")
                        }
                        break;
                }
                res.end()
            }
        },

}

module.exports = controlador;