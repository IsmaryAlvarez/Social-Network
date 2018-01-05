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

/**
 * Función circulos con imágenes
 */

$(".circulos").hide();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();

$(".restaurant").click(function(){ 
$(".news").hide();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();
$(".circulos").show();
});


$(".ch-img-2").click(function(){ 
$("#comidaMexicana").show();
$("#comidaJaponesa").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();
$(".circulos").hide();
});

$(".ch-img-3").click(function(){ 
$("#comidaJaponesa").show();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();
$(".circulos").hide();
});


$(".ch-img-4").click(function(){ 
$("#comidaItaliana").show();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaVenezolana").hide();
$(".circulos").hide();
});

$(".ch-img-5").click(function(){ 
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
  var sHour = "Comentado por ti a las " + newHour.getHours()+":" + newHour.getMinutes();
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
  $(".circulos").hide();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();
$(".container-foods").hide();
});



window.onload = function(){
$("#btn-google").click(function() {
      console.log("Boton de google presionado!")
    if (!firebase.auth().currentUser){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        
        console.log("Launching modal");
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Firebase error > "+errorMessage)
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential'){
              alert ('Es el mismo usuario');
            }
          });
        }else{
          console.log("Holo");
          firebase.auth().signOut();
        }
      });
}

