// La funcionalidad de tu proyecto
/*$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
*/
/**
 * Función centrado de imagen en vista splash
 */

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) + 
  $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) + 
  $(window).scrollLeft()) + "px"
  );
  return this;
}

/**
 * cargado de función vista splash
 */
$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function(){    
  $("#overlay").fadeOut();
}, 2000);

/**
 * Función circulo vista splash
 */
$('#circle').circleProgress({
 value: 1,
 fill: {gradient: [['#ffffff', .5], ['#f7f2f5', .5]], gradientAngle: Math.PI / 4}

}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  
});

// ---------------------------------------------
// ---------------------------------------------

$(".containerFood").hide();

//funcion para agregar comentario
function add()
{
  //obtener los comentarios
  var comments = document.getElementById("comment").value;
  
  //validar que el textarea tenga texto, si no tiene se desactiva boton comentario
  if (comments.length == 0 || comments == null || comments == "")
  {
    //desactivar boton del comentario
    var boton = getElementById("btn");
    boton.disable = true;
    // document.getElementById("btn").disabled = true;
  }
  else
  {
    //limpiar textarea
    document.getElementById("comment").value = "";
    //crear el contenedor de los comentarios
    var newComment = document.createElement("div");
    //agregar id del div de la seccion donde se publica los comentarios
    var contenido = document.getElementById("cont");
    //crear parrafo
    var text = document.createElement("p");
    //crear nodo de texto de textarea
      var nodoTexto = document.createTextNode(comments);

      //establecer hora en el comentario
      //crear un contenedor span para la hora
      var hour = document.createElement("span");
      var newHour = new Date();
      var sHour ="added at  " + newHour.getHours()+":" + newHour.getMinutes();
      hour.textContent = sHour;

      //se anaden los hijos
      text.appendChild(nodoTexto);
      newComment.appendChild(text);
      newComment.appendChild(hour);
      cont.appendChild(newComment);
  }
}





// ---------------------------------------------
// ---------------------------------------------




// pantalla del perfil escondida
$(".pantallaPerfil").hide();

// funcion para que al hacer click en el boton perfil se despliega la pantalla con 
// el perfil
$(".perfil").click(function(){
  
  $(".pantallaPerfil").show();
  $(".first-section").hide();
  $(".containerFood").hide();
  $(".news").hide();
  $(".verMensaje").hide();
});





 