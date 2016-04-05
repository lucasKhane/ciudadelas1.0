function startGame() {
  //Elemento del DOM necesario para obtener el contexto del canvas
  var canvas = $('#game')[0]

  //Obtenemos el contexto del canvas para efectuar las llamadas de la api
  var ctx = canvas.getContext && canvas.getContext('2d');

  //Informamos al usuario si no podemos obtener el contexto
  if (!ctx) {
    alert('Please upgrade your browser');
    return;
  }
}

/**
    PENDIENTE: Cargar la hoja de sprites
**/

$(startGame);
