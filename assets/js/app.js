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
  $(this).find('st$(".circulos").();rong').text(stepValue.toFixed(2).substr(1)); 

});

$(".circulos").hide();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();

$(".restaurant").click(function(){ 
$(".circulos").show();


});

$(".mostrar-1").click(function(){ 
$("#comidaMexicana").show();
$("#comidaJaponesa").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();
$(".circulos").hide();

});

$(".mostrar-2").click(function(){ 
$("#comidaJaponesa").show();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();
$(".circulos").hide();
});


$(".mostrar-3").click(function(){ 
$("#comidaItaliana").show();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaVenezolana").hide();
$(".circulos").hide();
});

$(".mostrar-4").click(function(){ 
$("#comidaVenezolana").show();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$(".circulos").hide();
});

// ---------------------------------------------
//              SECCION NOTICIAS        
// ---------------------------------------------

// escondiendo otras pantallas
$(".containerFood").hide();
$(".pantallaPerfil").hide();


//funcion para agregar comentario, borrarlos y darle favorito
var boton = document.getElementById("btn-comentario");

boton.addEventListener("click",function(){

  //tomar texto del textarea
  var comments = document.getElementById("comment").value;
  // linpiar textarea
  document.getElementById("comment").value = "";
  //contenedor que esta determinado en el html
  var cont = document.getElementById("cont");
  //crear el div que contendra cada comentario posteado
  var newComments = document.createElement('div');

  //validar que textarea tenga un msje
   if (comments.length == 0 || comments == null || comments == "")
  {
    // si no hay texto se deshabilita el boton
    var boton = getElementById("btn-comentario");
    boton.disable = true;
  }

  //establecer hora en el comentario
  //crear un contenedor span para la hora
  var hour = document.createElement("span");
  var newHour = new Date();
  var sHour ="Comentado a las  " + newHour.getHours()+":" + newHour.getMinutes();
  hour.textContent = sHour;

  //crear el nombre del perfil
  // var nombre = document.createElement("p");
  // nombre.classList.add("nombre");

  //crear icono de corazon
  var heart = document.createElement("i");
  heart.classList.add("glyphicon", "glyphicon-heart", "heart");

  //crear icono de basura
  var trash = document.createElement("i");
  trash.classList.add("glyphicon", "glyphicon-trash", "trash");

  //nodos de texto para el textarea
  var textNewComment = document.createTextNode(comments);

  var contenedorElemento = document.createElement("p");
  contenedorElemento.appendChild(textNewComment);

  //newComments.appendChild(nombre);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(hour);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);

  //evento colorea el corazon al hacer ckick
  heart.addEventListener("click", function(){
    heart.classList.toggle("red");
  })


  //evento elimina comnetario
  trash.addEventListener("click", function(){
    cont.removeChild(newComments);
  })

});

// mostrar modal con fade
$("#fade").modal({
  fadeDuration: 1000,
  fadeDelay: 0.50
});


// --------------------------------------------------
//                SECCION PERFIL
// --------------------------------------------------

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





 