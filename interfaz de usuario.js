
var ctx;
var canvas;
var mazoDistritos = new mazoDistritos();
var mazoPersonajes = new mazoPersonajes();
var jugadores = new jugadores();

function initializeGame() {
  var width = 1280; var height = 800;
  initCanvas(width, height);
  initCartasMazoDistritos();
  shuffle(mazoDistritos.cartasMazo); //Barajeamos
  initCartasMazoPersonajes();
  shuffle(mazoPersonajes.cartasPersonaje);
  //En un futuro initJugadores() vendrá aquí
  //En un futuro sortearCorona() vendrá aquí
  asignCoords();
  drawAll();
  console.log("Fin ejecucion initializeGame()");
}

$(initializeGame);
