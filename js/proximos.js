// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

let proximos = [];

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url:'./info.json'
  }).done(function(resultado){

    //Guarda el resultado en variables
    actual = resultado.fechaActual;
    eventos = resultado.eventos;

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    for(evento of eventos){
      if(evento.fecha >= actual){
        proximos.push(evento);
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

    //Recorre el arreglo y concatena el HTML para cada evento
    for(proximo of proximos){
      //Crea un string que contenga el HTML que describe el detalle del evento
      html_proximo = `
      <div class="col-12">
          <div class="card m-3 p-3">
                <h3 class="card-title text-info m-0"><a href='./detalle.html?id=${proximo.id}'>${proximo.nombre}</a></h3>
                <span class='text-secondary'>
                ${proximo.fecha} - ${proximo.lugar}
                </span>
                <p class = 'card-text mt-2 mb-0'>
                ${proximo.descripcion}
                </p>
                <p class = 'card-text text-info'>
                Costo: ${proximo.precio}
                </p>
            </div>
          </div>
        </div>
       `
       //Modifica el DOM agregando el html generado dentro del div con id=evento
       $('#proximos').append(html_proximo);
   }
})
});
