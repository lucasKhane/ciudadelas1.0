//Inicializamos todos los elementos del juego (por ejemplo el canvas)
//Objetos del juego

function cartaMazo(nombre, coste, color, descripcion, source){
  this.nombre = nombre;
  this.coste = coste;
  this.color = color;
  this.descripcion = descripcion;
  this.source = source;
  this.width = 75; //Pendiente: Ya lo pondremos automatico
  this.height = 120;
}

function cartaPersonaje(nombre, orden, color, descripcion, source){
  this.nombre = nombre;
  this.orden = orden;
  this.color = color;
  this.descripcion = descripcion;
  this.source = source;
  this.width = 75; //Pendiente: Ya lo pondremos automatico
  this.height = 120;
}

function jugador(monedas, orden, cartasMazo, cartaPersonaje, distritosConstruidos, source){
  this.monedas = monedas;
  this.orden = orden;
  this.cartasMazo = cartasMazo;
  this.cartaPersonaje = cartaPersonaje;
  this.distritosConstruidos = distritosConstruidos;
  this.source = source;
}

function mazo(){
  this.cartasMazo = [];
  this.Xcord = null;
  this.Ycord = null;
  this.width = 75; //Pendiente: Ya lo pondremos automatico
  this.height = 120;
}

function initCartasPersonaje(){
  var descripcion = "";
  descripcion = "El asesino puede asesinar a un Personaje de su elcción. Este jugador perderá su turno completo";
  source = 'images/Characters/Assassin1.jpg';
  var char1 = new cartaPersonaje("Asesino", 1, "", descripcion);
  descripcion = "El ladrón puede robar a un Personaje de su elección. No puede robar al asesino ni al personaje asesinado. El robo tendrá lugar al principio del turno del Personaje robado";
  source = 'images/Characters/Thief2.jpg';
  var char2 = new cartaPersonaje("Ladron", 2, "", descripcion);
  descripcion = "Puedes escoger entre: El mago puede cambiar la totalidad de sus cartas con las de otro jugador de su elección. O: El Mago puede descartar cualquier número de cartas de su mano y robar un número de cartas igual";
  source = 'images/Characters/Magician3.jpg';
  var char3 = new cartaPersonaje("Mago", 3, "", descripcion);
  descripcion = "El Rey coge la carta de Corona y será quien escoja Personaje la siguiente ronda. Cada distrito noble que poseas te reporta una moneda de oro";
  source = 'images/Characters/King4.jpg';
  var char4 = new cartaPersonaje("Rey", 4, "amarillo", descripcion);
  descripcion = "El Obispo no puede ser atacado por el Condotiero. Cada distrito eclesiástico que poseas te reporta una moneda de oro";
  source = 'images/Characters/Bishop5.jpg';
  var char5 = new cartaPersonaje("Obispo", 5, "azul", descripcion);
  descripcion = "El Mercader recibe una moneda de oro adicional al principio de su turno. Cada distrito comercial que poseas te reporta una moneda de oro";
  source = 'images/Characters/Merchant6.jpg';
  var char6 = new cartaPersonaje("Mercader", 6, "verde", descripcion);
  descripcion = "El Arquitecto recibe dos cartas adicionales. Puedes construir hasta tres distritos este turno";
  source = 'images/Characters/Architect7.jpg';
  var char7 = new cartaPersonaje("Arquitecto", 7, "", descripcion);
  descripcion = "El Condotiero puede destruir un distrito de su elección pagando a la banca su coste de construcción menos uno. Cada distrito militar que poseas te reporta una moneda de oro";
  source = 'images/Characters/Warlord8.jpg';
  var char8 = new cartaPersonaje("Condotiero", 8, "rojo", descripcion);
  mazo.cartasPersonaje.push(char1,char2,char3,char4,char5,char6,char7,char8);
}

function initCartasMazo(){
  var source = "";
  //Cartas Condotiero rojas ->12 cartas
  source = 'images/cardr1.jpg';
  var cardRedType1 = new cartaMazo("Atalaya", 1, "rojo", ""); //3cartas
  source = 'images/cardr2.jpg';
  mazo.cartasMazo.push(cardRedType1,cardRedType1,cardRedType1);
  var cardRedType2 = new cartaMazo("Prision", 2, "rojo", ""); //3cartas
  source = 'images/cardr3.jpg';
  mazo.cartasMazo.push(cardRedType2,cardRedType2,cardRedType2);
  var cardRedType3 = new cartaMazo("Cuartel", 3, "rojo", ""); //3cartas
  source = 'images/cardr4.jpg';
  mazo.cartasMazo.push(cardRedType3,cardRedType3,cardRedType3);
  var cardRedType4 = new cartaMazo("Fortaleza", 5, "rojo", ""); //3cartas
  source = 'images/cardr5.jpg';
  mazo.cartasMazo.push(cardRedType4,cardRedType4,cardRedType4);

  //Cartas Obispo azules ->12 cartas
  var cardBlueType1 = new cartaMazo("Templo", 1, "azul", ""); //3cartas
  source = 'images/cardb1.jpg';
  mazo.cartasMazo.push(cardBlueType1,cardBlueType1,cardBlueType1);
  var cardBlueType2 = new cartaMazo("Iglesia", 2, "azul", ""); //3cartas
  source = 'images/cardb2.jpg';
  mazo.cartasMazo.push(cardBlueType2,cardBlueType2,cardBlueType2);
  var cardBlueType3 = new cartaMazo("Monasterio", 3, "azul", ""); //4cartas
  source = 'images/cardb3.jpg';
  mazo.cartasMazo.push(cardBlueType3,cardBlueType3,cardBlueType3,cardBlueType3);
  var cardBlueType4 = new cartaMazo("Catedral", 5, "azul", ""); //2cartas
  source = 'images/cardb4.jpg';
  mazo.cartasMazo.push(cardBlueType4,cardBlueType4);

  //Cartas Rey amarillas ->12 cartas
  var cardYellowType1 = new cartaMazo("Señorio", 3, "amarillo", ""); //5cartas
  source = 'images/cardy1.jpg';
  mazo.cartasMazo.push(cardYellowType1,cardYellowType1,cardYellowType1,cardYellowType1,cardYellowType1);
  var cardYellowType2 = new cartaMazo("Castillo", 4, "amarillo", ""); //5cartas
  source = 'images/cardy2.jpg';
  mazo.cartasMazo.push(cardYellowType2,cardYellowType2,cardYellowType2,cardYellowType2,cardYellowType2 );
  var cardYellowType3 = new cartaMazo("Palacio", 5, "amarillo", ""); //2cartas
  source = 'images/cardy3.jpg';
  mazo.cartasMazo.push(cardYellowType3,cardYellowType3);

  //Cartas Mercader Verdes ->21 cartas
  var cardGreenType1 = new cartaMazo("Taberna", 1, "verde", ""); //5cartas
  source = 'images/carg1.jpg';
  mazo.cartasMazo.push(cardGreenType1,cardGreenType1,cardGreenType1,cardGreenType1,cardGreenType1);
  var cardGreenType2 = new cartaMazo("Mercado", 2, "verde", ""); //4cartas
  source = 'images/cardg2.jpg';
  mazo.cartasMazo.push(cardGreenType2,cardGreenType2,cardGreenType2,cardGreenType2);
  var cardGreenType3 = new cartaMazo("Tienda", 2, "verde", ""); //4cartas
  source = 'images/cardg3.jpg';
  mazo.cartasMazo.push(cardGreenType3,cardGreenType3,cardGreenType3,cardGreenType3);
  var cardGreenType4 = new cartaMazo("Almacenes", 3, "verde", ""); //3cartas
  source = 'images/cardg4.jpg';
  mazo.cartasMazo.push(cardGreenType4,cardGreenType4,cardGreenType4);
  var cardGreenType5 = new cartaMazo("Puerto", 4, "verde", ""); //3cartas
  source = 'images/cardg5.jpg';
  mazo.cartasMazo.push(cardGreenType5,cardGreenType5,cardGreenType5);
  var cardGreenType6 = new cartaMazo("Ayuntamiento", 5, "verde", ""); //2cartas
  source = 'images/cardg6.jpg';
  mazo.cartasMazo.push(cardGreenType6,cardGreenType6);

  //Cartas Maravilla Moradas ->14 cartas
  var descripcion = "";
  descripcion = "Cuando se cuenten los puntos del final de la partida, el Patio de los milagros se considerará un distrito de un color a tu elección. No podrás usar esta capacidad si construiste el Patio de los milagros en tu último turno de la partida";
  var cardPurpleType1 = new cartaMazo("Patio de los milagros", 2, "morado", descripcion);
  source = 'images/cardp1.jpg';
  mazo.cartasMazo.push(cardPurpleType1);
  descripcion = "El torreón no puede ser destruido por el condotiero";
  var cardPurpleType2 = new cartaMazo("Torreon", 3, "morado", descripcion);
  source = 'images/cardp2.jpg';
  mazo.cartasMazo.push(cardPurpleType2);
  descripcion = "El Tesoro imperial tiene un coste de 4 monedas de oro para ser construido, pero te reporta tantos puntos adicionales como monedas de oro tengas en tu posesión al final de la partida";
  var cardPurpleType3 = new cartaMazo("Tesoro imperial", 4, "morado", descripcion);
  source = 'images/cardp3.jpg';
  mazo.cartasMazo.push(cardPurpleType3);
  descripcion = "Una vez por turno puedes descartar una carta de Distrito de tu mano y recibir una moneda de oro a cambio";
  var cardPurpleType4 = new cartaMazo("Laboratorio", 5, "morado", descripcion);
  source = 'images/cardp4.jpg';
  mazo.cartasMazo.push(cardPurpleType4);
  descripcion = "Al final de la partida la Fuente de los deseos te da 5 puntos equivalentes a su coste y además te da un punto adicional por cada otro Distrito violeta de tu posesión";
  var cardPurpleType5 = new cartaMazo("Fuente de los deseos", 5, "morado", descripcion);
  source = 'images/cardp5.jpg';
  mazo.cartasMazo.push(cardPurpleType5);
  descripcion = "Puedes construir Distritos con el mismo nombre que otros que ya tengas en juego. No perderas las construcciones realizadas de esta forma si la Cantera es destruida";
  var cardPurpleType6 = new cartaMazo("Cantera", 5, "morado", descripcion);
  source = 'images/cardp6.jpg';
  mazo.cartasMazo.push(cardPurpleType6);
  descripcion = "Una vez por turno puedes pagar dos monedas de oro para robar tres cartas";
  var cardPurpleType7 = new cartaMazo("Fabrica", 5, "morado", descripcion);
  source = 'images/cardp7.jpg';
  mazo.cartasMazo.push(cardPurpleType7);
  descripcion = "Cuando el condotiero destruya un distrito, puedes pagar una moneda de oro para cogerlo y ponerlo en tu mano. No puedes hacer esto si eres el condotiero";
  var cardPurpleType8 = new cartaMazo("Cementerio", 5, "morado", descripcion);
  source = 'images/cardp8.jpg';
  mazo.cartasMazo.push(cardPurpleType8);
  descripcion = "Si decides robar dos cartas al principio de tu turno, coges en su lugar tres y te quedas con una de ellas y descartas las demás";
  var cardPurpleType9 = new cartaMazo("Observatorio", 5, "morado", descripcion);
  source = 'images/cardp9.jpg';
  mazo.cartasMazo.push(cardPurpleType9);
  descripcion = "El precio que debe pagar el condotiero para destruir tus distritos se incrementa en 1";
  var cardPurpleType10 = new cartaMazo("Gran muralla", 6, "morado", descripcion);
  source = 'images/cardp10.jpg';
  mazo.cartasMazo.push(cardPurpleType10);
  descripcion = "Si decides robar dos cartas al principio de tu turno, te quedas con las dos cartas que cojas";
  var cardPurpleType11 = new cartaMazo("Biblioteca", 6, "morado", descripcion);
  source = 'images/cardp11.jpg';
  mazo.cartasMazo.push(cardPurpleType11);
  descripcion = "En lo que respecta a los ingresos, la Escuela de magia es considerada como un distrito de un color a tu elección. De esta forma te reporta ganancias ya seas Rey, Obispo, Mercader o Condotiero";
  var cardPurpleType12 = new cartaMazo("Escuela de magia", 6, "morado", descripcion);
  source = 'images/cardp12.jpg';
  mazo.cartasMazo.push(cardPurpleType12);
  descripcion = "La construcción de esta maravilla -ningún dragón ha sido visto en el reino desde hace cientos de años- cuesta seis monedas de oro pero proporciona ocho puntos al final del juego";
  var cardPurpleType13 = new cartaMazo("Puerta dragon", 6, "morado", descripcion);
  source = 'images/cardp13.jpg';
  mazo.cartasMazo.push(cardPurpleType13);
  descripcion = "La construcción de esta maravilla -nunca nadie comprendió completamente para que puede servir una Universidad- cuesta seis monedas de oro pero proporciona ocho puntos al final del juego";
  var cardPurpleType14 = new cartaMazo("Universidad", 6, "morado", descripcion);
  source = 'images/cardp14.jpg';
  mazo.cartasMazo.push(cardPurpleType14);
}

//Asignamos las cosas en funcion del canvas
function asignCoords(){
  //Colocamos el mazo en el tablero
  mazo.Xcoord = canvas.width/2 - mazo.width/2;
  mazo.Ycoord = canvas.height/2 - mazo.height/2;
}

//Redibuja todo (en principio no necesario) - (Tras comentarla me parece mas util)
function drawAll(){
  //Mazo image
  source = 'images/Reverse/revCartaMazo.jpg';
  render(source, mazo.Xcoord, mazo.Ycoord); //Dibujamos un mazo
  //Cosas en la mesa construidas por jugadores
  //Mano de jugador y monedas y poco mas
}

//Va en funcion pues en realidad hay muchas cosas que modificar
//Fondo, tamaño (importante), localicacion y demas
//Una cosa es el canvas(html) y otra el contexto ojo
function initCanvas(width, height){
  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  canvas.style = "border:2px solid #000000;"
  document.body.appendChild(canvas);
  //Informamos al usuario si no podemos obtener el contexto
  if (!ctx) {
    alert('Please upgrade your browser');
    return;
  }
  //Background image
  var source = 'images/Varias/fondo_madera_1.jpg';
  render(source,0,0);
}

//Pendiente. Luego hay que currarse el css o una funcion que lo coloque todo relativa al tamaño
//del canvas y al numero de jugadores --- medio hecho o pensado, no va con css que es una guarreria
//
//Funcion calcular posiciones y asignar ---  hecho
//Funcion dibujar todo. Porque lo dibujado, en realidad poco tiene que ver con el objeto en si --- mas o menos
//Funcion get offsets del canvas, el top y el left --- global
