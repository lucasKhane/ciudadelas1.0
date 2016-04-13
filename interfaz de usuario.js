
var ctx; //No me acaba de gustar tener esta variable global
var canvas; //Y mucho menos esta otra
var mazoDistritos = new mazoDistritos();
var mazoPersonajes = new mazoPersonajes();
var jugadores = [];

function initializeGame() {
  var width = 1280; var height = 800;
  initCanvas(width, height);
  initCartasMazoDistritos();
  shuffle(mazoDistritos.cartasMazo); //Barajeamos
  initCartasMazoPersonajes();
  shuffle(mazoPersonajes.cartasPersonaje);
  asignCoords();
  //Sortear corona
  drawAll();
  console.log("Fin ejecucion initializeGame()");
}

$(initializeGame);
