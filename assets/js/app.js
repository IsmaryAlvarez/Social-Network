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

// pantalla del perfil escondida
$(".pantallaPerfil").hide();

// funcion para que al hacer click en el boton perfil se despliega la pantalla con 
// el perfil
$(".perfil").click(function(){
  
  $(".pantallaPerfil").show();
  $(".first-section").hide();
  $(".containerFood").hide();


});

