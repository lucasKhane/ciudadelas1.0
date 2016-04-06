

//Inicializamos todos los elementos del juego
function cartaMazo(nombre, coste, color, descripcion){
  this.nombre = nombre;
  this.coste = coste;
  this.color = color;
  this.descripcion = descripcion;
}

function cartaPersonaje(nombre, orden, color, descripcion){
  this.nombre = nombre;
  this.orden = orden;
  this.color = color;
  this.descripcion = descripcion;
}

function jugador(monedas, orden, cartasMazo, cartaPersonaje, distritosConstruidos){
  this.monedas = monedas;
  this.orden = orden;
  this.cartasMazo = cartasMazo;
  this.cartaPersonaje = cartaPersonaje;
  this.distritosConstruidos = distritosConstruidos;
}

var cartasPersonaje = [];
function initCartasPersonaje(){
  var descripcion = "";
  descripcion = "El asesino puede asesinar a un Personaje de su elcción. Este jugador perderá su turno completo";
  var char1 = new cartaPersonaje("Asesino", 1, "", descripcion);
  descripcion = "El ladrón puede robar a un Personaje de su elección. No puede robar al asesino ni al personaje asesinado. El robo tendrá lugar al principio del turno del Personaje robado";
  var char2 = new cartaPersonaje("Ladron", 2, "", descripcion);
  descripcion = "Puedes escoger entre: El mago puede cambiar la totalidad de sus cartas con las de otro jugador de su elección. O: El Mago puede descartar cualquier número de cartas de su mano y robar un número de cartas igual";
  var char3 = new cartaPersonaje("Mago", 3, "", descripcion);
  descripcion = "El Rey coge la carta de Corona y será quien escoja Personaje la siguiente ronda. Cada distrito noble que poseas te reporta una moneda de oro";
  var char4 = new cartaPersonaje("Rey", 4, "amarillo", descripcion);
  descripcion = "El Obispo no puede ser atacado por el Condotiero. Cada distrito eclesiástico que poseas te reporta una moneda de oro";
  var char5 = new cartaPersonaje("Obispo", 5, "azul", descripcion);
  descripcion = "El Mercader recibe una moneda de oro adicional al principio de su turno. Cada distrito comercial que poseas te reporta una moneda de oro";
  var char6 = new cartaPersonaje("Mercader", 6, "verde", descripcion);
  descripcion = "El Arquitecto recibe dos cartas adicionales. Puedes construir hasta tres distritos este turno";
  var char7 = new cartaPersonaje("Arquitecto", 7, "", descripcion);
  descripcion = "El Condotiero puede destruir un distrito de su elección pagando a la banca su coste de construcción menos uno. Cada distrito militar que poseas te reporta una moneda de oro";
  var char8 = new cartaPersonaje("Condotiero", 8, "rojo", descripcion);
  cartasPersonaje.push(char1,char2,char3,char4,char5,char6,char7,char8);
}

var cartasMazo = [];
function initCartasMazo(){
  //Cartas Condotiero rojas ->12 cartas
  var cardRedType1 = new cartaMazo("Atalaya", 1, "rojo", ""); //3cartas
  cartasMazo.push(cardRedType1,cardRedType1,cardRedType1);
  var cardRedType2 = new cartaMazo("Prision", 2, "rojo", ""); //3cartas
  cartasMazo.push(cardRedType2,cardRedType2,cardRedType2);
  var cardRedType3 = new cartaMazo("Cuartel", 3, "rojo", ""); //3cartas
  cartasMazo.push(cardRedType3,cardRedType3,cardRedType3);
  var cardRedType4 = new cartaMazo("Fortaleza", 5, "rojo", ""); //3cartas
  cartasMazo.push(cardRedType4,cardRedType4,cardRedType4);


  //Cartas Obispo azules ->12 cartas
  var cardBlueType1 = new cartaMazo("Templo", 1, "azul", ""); //3cartas
  cartasMazo.push(cardBlueType1,cardBlueType1,cardBlueType1);
  var cardBlueType2 = new cartaMazo("Iglesia", 2, "azul", ""); //3cartas
  cartasMazo.push(cardBlueType2,cardBlueType2,cardBlueType2);
  var cardBlueType3 = new cartaMazo("Monasterio", 3, "azul", ""); //4cartas
  cartasMazo.push(cardBlueType3,cardBlueType3,cardBlueType3,cardBlueType3);
  var cardBlueType4 = new cartaMazo("Catedral", 5, "azul", ""); //2cartas
  cartasMazo.push(cardBlueType4,cardBlueType4);

  //Cartas Rey amarillas ->12 cartas
  var cardYellowType1 = new cartaMazo("Señorio", 3, "amarillo", ""); //5cartas
  cartasMazo.push(cardYellowType1,cardYellowType1,cardYellowType1,cardYellowType1,cardYellowType1);
  var cardYellowType2 = new cartaMazo("Castillo", 4, "amarillo", ""); //5cartas
  cartasMazo.push(cardYellowType2,cardYellowType2,cardYellowType2,cardYellowType2,cardYellowType2 );
  var cardYellowType3 = new cartaMazo("Palacio", 5, "amarillo", ""); //2cartas
  cartasMazo.push(cardYellowType3,cardYellowType3);

  //Cartas Mercader Verdes ->21 cartas
  var cardGreenType1 = new cartaMazo("Taberna", 1, "verde", ""); //5cartas
  cartasMazo.push(cardGreenType1,cardGreenType1,cardGreenType1,cardGreenType1,cardGreenType1);
  var cardGreenType2 = new cartaMazo("Mercado", 2, "verde", ""); //4cartas
  cartasMazo.push(cardGreenType2,cardGreenType2,cardGreenType2,cardGreenType2);
  var cardGreenType3 = new cartaMazo("Tienda", 2, "verde", ""); //4cartas
  cartasMazo.push(cardGreenType3,cardGreenType3,cardGreenType3,cardGreenType3);
  var cardGreenType4 = new cartaMazo("Almacenes", 3, "verde", ""); //3cartas
  cartasMazo.push(cardGreenType4,cardGreenType4,cardGreenType4);
  var cardGreenType5 = new cartaMazo("Puerto", 4, "verde", ""); //3cartas
  cartasMazo.push(cardGreenType5,cardGreenType5,cardGreenType5);
  var cardGreenType6 = new cartaMazo("Ayuntamiento", 5, "verde", ""); //2cartas
  cartasMazo.push(cardGreenType6,cardGreenType6);

  //Cartas Maravilla Moradas ->14 cartas
  var descripcion = "";
  descripcion = "Cuando se cuenten los puntos del final de la partida, el Patio de los milagros se considerará un distrito de un color a tu elección. No podrás usar esta capacidad si construiste el Patio de los milagros en tu último turno de la partida";
  var cardPurpleType1 = new cartaMazo("Patio de los milagros", 2, "morado", descripcion);
  cartasMazo.push(cardPurpleType1);
  descripcion = "El torreón no puede ser destruido por el condotiero";
  var cardPurpleType2 = new cartaMazo("Torreon", 3, "morado", descripcion);
  cartasMazo.push(cardPurpleType2);
  descripcion = "El Tesoro imperial tiene un coste de 4 monedas de oro para ser construido, pero te reporta tantos puntos adicionales como monedas de oro tengas en tu posesión al final de la partida";
  var cardPurpleType3 = new cartaMazo("Tesoro imperial", 4, "morado", descripcion);
  cartasMazo.push(cardPurpleType3);
  descripcion = "Una vez por turno puedes descartar una carta de Distrito de tu mano y recibir una moneda de oro a cambio";
  var cardPurpleType4 = new cartaMazo("Laboratorio", 5, "morado", descripcion);
  cartasMazo.push(cardPurpleType4);
  descripcion = "Al final de la partida la Fuente de los deseos te da 5 puntos equivalentes a su coste y además te da un punto adicional por cada otro Distrito violeta de tu posesión";
  var cardPurpleType5 = new cartaMazo("Fuente de los deseos", 5, "morado", descripcion);
  cartasMazo.push(cardPurpleType5);
  descripcion = "Puedes construir Distritos con el mismo nombre que otros que ya tengas en juego. No perderas las construcciones realizadas de esta forma si la Cantera es destruida";
  var cardPurpleType6 = new cartaMazo("Cantera", 5, "morado", descripcion);
  cartasMazo.push(cardPurpleType6);
  descripcion = "Una vez por turno puedes pagar dos monedas de oro para robar tres cartas";
  var cardPurpleType7 = new cartaMazo("Fabrica", 5, "morado", descripcion);
  cartasMazo.push(cardPurpleType7);
  descripcion = "Cuando el condotiero destruya un distrito, puedes pagar una moneda de oro para cogerlo y ponerlo en tu mano. No puedes hacer esto si eres el condotiero";
  var cardPurpleType8 = new cartaMazo("Cementerio", 5, "morado", descripcion);
  cartasMazo.push(cardPurpleType8);
  descripcion = "Si decides robar dos cartas al principio de tu turno, coges en su lugar tres y te quedas con una de ellas y descartas las demás";
  var cardPurpleType9 = new cartaMazo("Observatorio", 5, "morado", descripcion);
  cartasMazo.push(cardPurpleType9);
  descripcion = "El precio que debe pagar el condotiero para destruir tus distritos se incrementa en 1";
  var cardPurpleType10 = new cartaMazo("Gran muralla", 6, "morado", descripcion);
  cartasMazo.push(cardPurpleType10);
  descripcion = "Si decides robar dos cartas al principio de tu turno, te quedas con las dos cartas que cojas";
  var cardPurpleType11 = new cartaMazo("Biblioteca", 6, "morado", descripcion);
  cartasMazo.push(cardPurpleType11);
  descripcion = "En lo que respecta a los ingresos, la Escuela de magia es considerada como un distrito de un color a tu elección. De esta forma te reporta ganancias ya seas Rey, Obispo, Mercader o Condotiero";
  var cardPurpleType12 = new cartaMazo("Escuela de magia", 6, "morado", descripcion);
  cartasMazo.push(cardPurpleType12);
  descripcion = "La construcción de esta maravilla -ningún dragón ha sido visto en el reino desde hace cientos de años- cuesta seis monedas de oro pero proporciona ocho puntos al final del juego";
  var cardPurpleType13 = new cartaMazo("Puerta dragon", 6, "morado", descripcion);
  cartasMazo.push(cardPurpleType13);
  descripcion = "La construcción de esta maravilla -nunca nadie comprendió completamente para que puede servir una Universidad- cuesta seis monedas de oro pero proporciona ocho puntos al final del juego";
  var cardPurpleType14 = new cartaMazo("Universidad", 6, "morado", descripcion);
  cartasMazo.push(cardPurpleType14);
}

//Para randomizar arrays
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

//Va en funcion pues en realidad hay muchas cosas que modificar
//Fondo, tamaño (importante), localicacion y demas
function createCanvas(){
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 512;
  canvas.height = 480;
  document.body.appendChild(canvas);

  //Informamos al usuario si no podemos obtener el contexto
  if (!ctx) {
    alert('Please upgrade your browser');
    return;
  }
}

function initializeGame() {
  createCanvas();
  initCartasMazo();
  shuffle(cartasMazo);
}

/**
    PENDIENTE: Cargar la hoja de sprites
**/

$(initializeGame);
