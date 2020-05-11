//Menú
$(".menuColapsado").click(function() {
  $(this).toggleClass("menuExpandido");
});



//para que suba despacio al dar a "Subir"
$("#btnUP").click(function() {
    $('html, body').animate({
        scrollTop: $(".wrapper").offset().top
    }, 1500);
});

$(document).on("scroll", function(){
    //sacamos el desplazamiento actual de la página
    var desplazamientoActual = $(document).scrollTop();
    //accedemos al control de "ir arriba"
    var controlArriba = $("#btnUP");
    //compruebo si debo mostrar el botón
    if(desplazamientoActual > 300 && controlArriba.css("display") == "none"){
        controlArriba.fadeIn(800);
    }
    //controlo si debo ocultar el botón
    if(desplazamientoActual < 300 && controlArriba.css("display") == "block"){
        controlArriba.fadeOut(800);
    }
});



$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1500);
      return false;
    }
  }
});




