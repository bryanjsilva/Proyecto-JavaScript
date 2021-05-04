// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

let proximos = [];
let pasados = [];

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url:'./info.json'
  }).done(function(resultado){
    //Guarda el resultado en variables
    actual = resultado.fechaActual;
    eventos = resultado.eventos;
    //Clasifica los eventos segun la fecha actual del JSON
    for(evento of eventos){
      if(evento.fecha >= actual){
        proximos.push(evento);
      }else{
        pasados.push(evento);
      }
    }
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos.sort(function(a,b){
      if(a.fecha > b.fecha){
        return 1;
      }
      if(a.fecha < b.fecha){
        return -1;
      }
      return 0;
    });

    pasados.sort(function(a,b){
      if(a.fecha > b.fecha){
        return -1;
      }
      if(a.fecha < b.fecha){
        return 1;
      }
      return 0;
    });
    //Extrae solo dos eventos y recorre cada arreglo
    for(let contador = 0; contador < 2; contador++){
      //Crea un string que contenga el HTML que describe el detalle del evento próximo
      html_proximo = `
      <div class="col-12 col-lg-5">
          <div class="card m-3 p-3">
                <h3 class="card-title text-info m-0">${proximos[contador].nombre}</h3>
                <span class = 'text-secondary'>
                ${proximos[contador].fecha}
                </span>
                <p class = 'card-text mt-2'>
                ${proximos[contador].descripcion}
                </p>
            </div>
          </div>
        </div>
       `
       //Crea un string que contenga el HTML que describe el detalle del evento pasado
       html_pasado = `
      <div class="col-12 col-lg-5">
          <div class="card m-3 p-3">
                <h4 class="card-title text-info m-0">${pasados[contador].nombre}</h4>
                <span class = 'text-secondary'>
                ${pasados[contador].fecha}
                </span>
                <p class = 'card-text mt-2'>
                ${pasados[contador].descripcion}
                </p>
            </div>
          </div>
        </div>
       `
       //Modifica el DOM agregando el html generado
       $('#proximos').append(html_proximo);
       $('#pasados').append(html_pasado); 
   }
})
});
