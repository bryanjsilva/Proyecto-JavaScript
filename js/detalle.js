// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var id = location.search.match(/id=(\d)*/)[1]
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: './info.json'
  }).done(function(resultado){
    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    //Busca el elemento en el arreglo
    evento = eventos.find(function(element){
      return element.id == id
    })
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = `
    <div class="col-12 elemento">
          <div class="card m-3 p-3">
                <h3 class="card-title text-info m-0">${evento.nombre}</h3>
                <span class = 'text-secondary'>
                ${evento.fecha} - ${evento.lugar}
                </span>
                <p class = 'card-text mt-2 mb-0'>
                ${evento.descripcion}
                </p>
                <p class = 'card-text text-info mb-0'>
                Costo: ${evento.precio}
                </p>
                <p class = 'card-text text-warning'>
                Invitados: ${evento.invitados}
                </p>
            </div>
          </div>
        </div>
       `
       //Modifica el DOM agregando el html generado dentro del div con id=evento
       document.getElementById('evento').innerHTML = html
  });
});
