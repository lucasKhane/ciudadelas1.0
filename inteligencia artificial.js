//Manejadores para el raton
//Problemas:
//1.-Saber donde esta cada Objetos en el canvas ->solved
//2.-Saber si puedo acceder a ese objeto(no puedo clickear en el mazo si no es mi turno)
var numplayers;

$(document).ready(function(){
  $("canvas").click(function (e) {
    //e es el evento click y el this es el objeto clickeado
    //Offset del canvas -> No hay puto offset a la hora de dibujar las cosas dentro del canvas..obviamente
    var offsetLeft = canvas.offsetLeft;
    var offsetTop = canvas.offsetTop;
    //Mazo
    if ((e.pageX-offsetLeft > mazoDistritos.Xcoord)&&
      (e.pageX-offsetLeft< mazoDistritos.Xcoord + mazoDistritos.width)&&
      (e.pageY-offsetTop > mazoDistritos.Ycoord)&&
      (e.pageY-offsetTop< mazoDistritos.Ycoord + mazoDistritos.height)){
      console.log("Clicked");
      //Robamos una carta
      drawCard();
      //Y de momento lo dibujamos al lado todo
      console.log(numplayers);
    }
  });
  var spinner = $("#spinner").spinner();
  $("#getvalue").click(function() {
    numplayers = spinner.spinner("value");
    spinner.spinner( "disable" );
    initJugadores(); //MEZCLA:!!! No podemos inicializar jugadores antes de elegir un numero :-)
    sortearCorona(); //MEZCLA:!!! No podemos sortear corona antes de elegir un numero :-)
  });

});
