//Gestion de la entrada (por ejemplo teclas)
//Logica del juego (pero solo funciones)

//Para randomizar arrays -> Si quiero ser ordenado, aunque lo utilice aqui
//Esto posiblemente vaya en el engine
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function render(source,positionX,positionY){
  $.loadImage = function(source) {
    // Define a "worker" function that should eventually resolve or reject the deferred object.
    var loadImage = function(deferred) {
      var image = new Image();
      // Set up event handlers to know when the image has loaded
      // or fails to load due to an error or abort.
      image.onload = loaded;
      image.onerror = errored; // URL returns 404, etc
      image.onabort = errored; // IE may call this if user clicks "Stop"
      // Setting the src property begins loading the image.
      image.src = source;

      function loaded() {
        unbindEvents();
        // Calling resolve means the image loaded sucessfully and is ready to use.
        console.log("Imagen cargada: "+source);
        //Curioso: si pones un comentario tras el resolve, se ejecuta primero el .done
        //antes que el comentario, lo que quiere decir que done se ejecuta inmediatamente despues!!
        //Incluso antes que un insignificante comentario
        deferred.resolve(image);
      }
      function errored() {
        unbindEvents();
        // Calling reject means we failed to load the image (e.g. 404, server offline, etc).
        deferred.reject(image);
        console.log("Error al cargar la imagen: "+source);
      }
      function unbindEvents() {
        // Ensures the event callbacks only get called once.
        image.onload = null;
        image.onerror = null;
        image.onabort = null;
      }
    };
    // Create the deferred object that will contain the loaded image.
    // We don't want callers to have access to the resolve() and reject() methods,
    // so convert to "read-only" by calling `promise()`.
    return $.Deferred(loadImage).promise();
  };
  $.loadImage(source).done(function(image){
    ctx.drawImage(image,positionX,positionY);
    console.log("Imagen dibujada: "+positionX+","+positionY);
  });
}

function drawCard(){
  if (mazoDistritos.cartasMazo.length != 0){
    var drawedCard = mazoDistritos.cartasMazo.shift();
    //console.log(drawedCard);
    //Temporal
    render(drawedCard.source,0,0);
    return drawedCard;
  }else{
    alert("Oh! No quedan cartas en el mazo!");
    return null;
  }
}
