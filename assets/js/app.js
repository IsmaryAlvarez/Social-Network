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
  $(".circulos").hide();
$("#comidaJaponesa").hide();
$("#comidaMexicana").hide();
$("#comidaItaliana").hide();
$("#comidaVenezolana").hide();
$(".container-foods").hide();
});



/*


document.getElementById('btn-google').addEventListener('click',function(){
if (!firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    
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
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential'){
        alert ('Es el mismo usuario');
      }
    });
  }else{
    firebase.auth().singOut();
  }
});





*/