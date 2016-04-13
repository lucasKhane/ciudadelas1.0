
var ctx; //No me acaba de gustar tener esta variable global
var canvas; //Y mucho menos esta otra
var mazo = new mazo();
var cartasPersonaje = [];

function initializeGame() {
  var width = 1280; var height = 800;
  initCanvas(width, height);
  initCartasMazo();
  shuffle(mazo.cartasMazo); //Barajeamos
  asignCoords();
  drawAll();
  console.log("Fin ejecucion initializeGame()");
}


$(initializeGame);
