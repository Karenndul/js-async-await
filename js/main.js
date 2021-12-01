let registrosHTML = document.getElementById('registrosHTML');
let arrayRegistros= [];
//función
async function leeRegistros(){
//conectar de forma asíncrona por el método fetch
    //const respuesta = await fetch("data/registro.json");
    const respuesta = await fetch("data/registro.json");
    //el valor se convierte a json
    const registros = await respuesta.json();
    return registros;
}
//conectar al servidor de forma asíncrona
async function muestraRegistros(){
    try {
        arrayRegistros = await leeRegistros();
        
    } catch (e) {
      console.log("Error generado:" + e);  
    }  
    console.log(arrayRegistros);

    arrayRegistros.forEach( function (item, index){
        registrosHTML.innerHTML = registrosHTML.innerHTML + "*" + item.nombre + "  " + item.apellido + "  ->  " + item.telefono + "<br>";
    
        });
    
}
//mandar llamar a la función
muestraRegistros();