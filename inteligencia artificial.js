//Manejadores para el raton
//Problemas:
//1.-Saber donde esta cada Objetos en el canvas
//2.-Saber si puedo acceder a ese objeto(no puedo clickear en el mazo si no es mi turno)

$(document).ready(function(){
  $("canvas").click(function (e) {
    //e es el evento click y el this es el objeto clickeado
    //Offset del canvas -> No hay puto offset a la hora de dibujar las cosas dentro del canvas..obviamente
    var offsetLeft = canvas.offsetLeft;
    var offsetTop = canvas.offsetTop;
    //Mazo
    if ((e.pageX-offsetLeft > mazo.Xcoord)&&
    (e.pageX-offsetLeft< mazo.Xcoord + mazo.width)&&
    (e.pageY-offsetTop > mazo.Ycoord)&&
    (e.pageY-offsetTop< mazo.Ycoord + mazo.height)){
      console.log("Clicked");
      //Robamos una carta
      drawCard();
      //Y de momento lo dibujamos al lado todo

    }
  });
});
