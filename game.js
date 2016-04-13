//Inicializamos todos los elementos del juego (por ejemplo el canvas)
//Objetos del juego

function cartaMazo(nombre, coste, color, descripcion, source){
  this.nombre = nombre;
  this.coste = coste;
  this.color = color;
  this.descripcion = descripcion;
  this.source = source;
  this.Xcord = null;
  this.Ycord = null;
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

function player(monedas){
  this.monedas = monedas;
  this.orden = null;
  this.cartasMazoDistritos = [];
  this.cartaPersonaje = null;
  this.distritosConstruidos = [];
  this.corona = false;
  this.source = null;
  this.Xinitcord = null;
  this.Yinitcord = null;
}

function mazoDistritos(){
  this.cartasMazo = [];
  this.Xcord = null;
  this.Ycord = null;
  this.width = 75; //Pendiente: Ya lo pondremos automatico
  this.height = 120;
}

function mazoPersonajes(){
  this.cartasPersonaje = [];
  this.Xcoord = null;
  this.Ycoord = null;
  this.width = 75; //Pendiente: Ya lo pondremos automatico
  this.height = 120;
}

function  initJugadores(){
  var monedas = 4;
  for (i = 1; i <= numplayers; i++){
    var jugador = new player(monedas);
    switch (i){
    case 1:
        jugador.Xinitcord = 5;
        jugador.Yinitcord = canvas.height - mazoDistritos.height*2 - 5*2;
        break;
    case 2:
        jugador.Xinitcord = 5
        jugador.Yinitcord = 5;
        break;
    case 3:
        jugador.Xinitcord = mazoDistritos.width*4 + 5*4 + 10;
        jugador.Yinitcord = canvas.height - mazoDistritos.height*2 - 10;
        break;
    case 4:
        jugador.Xinitcord = mazoDistritos.width*4 + 5*4 + 10;
        jugador.Yinitcord = 5;
        break;
    case 5:
        jugador.Xinitcord = mazoDistritos.width*8 + 5*8 + 20;
        jugador.Yinitcord = canvas.height - mazoDistritos.height*2 - 10;
        break;
    case 6:
        jugador.Xinitcord = mazoDistritos.width*8 + 5*8 + 20;
        jugador.Yinitcord = 5;
        break;
    }
    var cartaDistrito;
    for (u=0; u<4; u++){
      cartaDistrito = drawCard();
      jugador.cartasMazoDistritos.push(cartaDistrito);
      console.log("Carta de mano num: "+u+". Descripcion: "+cartaDistrito);
    }
    jugadores.push(jugador);
  }
  console.log(jugadores);
  switch (jugadores.length){
  case 1:
      jugadores[0].order = 1;
      break;
  case 2:
      jugadores[0].order = 1;
      jugadores[1].order = 2;
      break;
  case 3:
      jugadores[0].order = 1;
      jugadores[1].order = 3;
      jugadores[2].order = 2;
      break;
  case 4:
      jugadores[0].order = 1;
      jugadores[1].order = 4;
      jugadores[2].order = 2;
      jugadores[3].order = 3;
      break;
  case 5:
      jugadores[0].order = 1;
      jugadores[1].order = 5;
      jugadores[2].order = 3;
      jugadores[3].order = 4;
      jugadores[4].order = 2;
      break;
  case 6:
      jugadores[0].order = 1;
      jugadores[1].order = 6;
      jugadores[2].order = 3;
      jugadores[3].order = 4;
      jugadores[4].order = 2;
      jugadores[5].order = 5;
      break;
  }
}

function initCartasMazoPersonajes(){
  var descripcion = "";
  descripcion = "El asesino puede asesinar a un Personaje de su elcción. Este jugador perderá su turno completo";
  source = 'images/Characters/Assassin1.jpg';
  var char1 = new cartaPersonaje("Asesino", 1, "", descripcion, source);
  descripcion = "El ladrón puede robar a un Personaje de su elección. No puede robar al asesino ni al personaje asesinado. El robo tendrá lugar al principio del turno del Personaje robado";
  source = 'images/Characters/Thief2.jpg';
  var char2 = new cartaPersonaje("Ladron", 2, "", descripcion, source);
  descripcion = "Puedes escoger entre: El mago puede cambiar la totalidad de sus cartas con las de otro jugador de su elección. O: El Mago puede descartar cualquier número de cartas de su mano y robar un número de cartas igual";
  source = 'images/Characters/Magician3.jpg';
  var char3 = new cartaPersonaje("Mago", 3, "", descripcion, source);
  descripcion = "El Rey coge la carta de Corona y será quien escoja Personaje la siguiente ronda. Cada distrito noble que poseas te reporta una moneda de oro";
  source = 'images/Characters/King4.jpg';
  var char4 = new cartaPersonaje("Rey", 4, "amarillo", descripcion, source);
  descripcion = "El Obispo no puede ser atacado por el Condotiero. Cada distrito eclesiástico que poseas te reporta una moneda de oro";
  source = 'images/Characters/Bishop5.jpg';
  var char5 = new cartaPersonaje("Obispo", 5, "azul", descripcion, source);
  descripcion = "El Mercader recibe una moneda de oro adicional al principio de su turno. Cada distrito comercial que poseas te reporta una moneda de oro";
  source = 'images/Characters/Merchant6.jpg';
  var char6 = new cartaPersonaje("Mercader", 6, "verde", descripcion, source);
  descripcion = "El Arquitecto recibe dos cartas adicionales. Puedes construir hasta tres distritos este turno";
  source = 'images/Characters/Architect7.jpg';
  var char7 = new cartaPersonaje("Arquitecto", 7, "", descripcion, source);
  descripcion = "El Condotiero puede destruir un distrito de su elección pagando a la banca su coste de construcción menos uno. Cada distrito militar que poseas te reporta una moneda de oro";
  source = 'images/Characters/Warlord8.jpg';
  var char8 = new cartaPersonaje("Condotiero", 8, "rojo", descripcion, source);
  mazoPersonajes.cartasPersonaje.push(char1,char2,char3,char4,char5,char6,char7,char8);
}

function initCartasMazoDistritos(){
  var source = "";
  //Cartas Condotiero rojas ->12 cartas
  source = 'images/Red/cardr1.jpg';
  var cardRedType1 = new cartaMazo("Atalaya", 1, "rojo", "", source); //3cartas
  source = 'images/Red/cardr2.jpg';
  mazoDistritos.cartasMazo.push(cardRedType1,cardRedType1,cardRedType1);
  var cardRedType2 = new cartaMazo("Prision", 2, "rojo", "", source); //3cartas
  source = 'images/Red/cardr3.jpg';
  mazoDistritos.cartasMazo.push(cardRedType2,cardRedType2,cardRedType2);
  var cardRedType3 = new cartaMazo("Cuartel", 3, "rojo", "", source); //3cartas
  source = 'images/Red/cardr4.jpg';
  mazoDistritos.cartasMazo.push(cardRedType3,cardRedType3,cardRedType3);
  var cardRedType4 = new cartaMazo("Fortaleza", 5, "rojo", "", source); //3cartas
  source = 'images/Red/cardr5.jpg';
  mazoDistritos.cartasMazo.push(cardRedType4,cardRedType4,cardRedType4);

  //Cartas Obispo azules ->12 cartas
  source = 'images/Blue/cardb1.jpg';
  var cardBlueType1 = new cartaMazo("Templo", 1, "azul", "", source); //3cartas
  mazoDistritos.cartasMazo.push(cardBlueType1,cardBlueType1,cardBlueType1);
  source = 'images/Blue/cardb2.jpg';
  var cardBlueType2 = new cartaMazo("Iglesia", 2, "azul", "", source); //3cartas
  mazoDistritos.cartasMazo.push(cardBlueType2,cardBlueType2,cardBlueType2);
  source = 'images/Blue/cardb3.jpg';
  var cardBlueType3 = new cartaMazo("Monasterio", 3, "azul", "", source); //4cartas
  mazoDistritos.cartasMazo.push(cardBlueType3,cardBlueType3,cardBlueType3,cardBlueType3);
  source = 'images/Blue/cardb4.jpg';
  var cardBlueType4 = new cartaMazo("Catedral", 5, "azul", "", source); //2cartas
  mazoDistritos.cartasMazo.push(cardBlueType4,cardBlueType4);
  //Cartas Rey amarillas ->12 cartas
  source = 'images/Yellow/cardy1.jpg';
  var cardYellowType1 = new cartaMazo("Señorio", 3, "amarillo", "", source); //5cartas
  mazoDistritos.cartasMazo.push(cardYellowType1,cardYellowType1,cardYellowType1,cardYellowType1,cardYellowType1);
  source = 'images/Yellow/cardy2.jpg';
  var cardYellowType2 = new cartaMazo("Castillo", 4, "amarillo", "", source); //5cartas
  mazoDistritos.cartasMazo.push(cardYellowType2,cardYellowType2,cardYellowType2,cardYellowType2,cardYellowType2 );
  source = 'images/Yellow/cardy3.jpg';
  var cardYellowType3 = new cartaMazo("Palacio", 5, "amarillo", "", source); //2cartas
  mazoDistritos.cartasMazo.push(cardYellowType3,cardYellowType3);

  //Cartas Mercader Verdes ->21 cartas
  source = 'images/Green/cardg1.jpg';
  var cardGreenType1 = new cartaMazo("Taberna", 1, "verde", "", source); //5cartas
  mazoDistritos.cartasMazo.push(cardGreenType1,cardGreenType1,cardGreenType1,cardGreenType1,cardGreenType1);
  source = 'images/Green/cardg2.jpg';
  var cardGreenType2 = new cartaMazo("Mercado", 2, "verde", "", source); //4cartas
  mazoDistritos.cartasMazo.push(cardGreenType2,cardGreenType2,cardGreenType2,cardGreenType2);
  source = 'images/Green/cardg3.jpg';
  var cardGreenType3 = new cartaMazo("Tienda", 2, "verde", "", source); //4cartas
  mazoDistritos.cartasMazo.push(cardGreenType3,cardGreenType3,cardGreenType3,cardGreenType3);
  source = 'images/Green/cardg4.jpg';
  var cardGreenType4 = new cartaMazo("Almacenes", 3, "verde", "", source); //3cartas
  mazoDistritos.cartasMazo.push(cardGreenType4,cardGreenType4,cardGreenType4);
  source = 'images/Green/cardg5.jpg';
  var cardGreenType5 = new cartaMazo("Puerto", 4, "verde", "", source); //3cartas
  mazoDistritos.cartasMazo.push(cardGreenType5,cardGreenType5,cardGreenType5);
  source = 'images/Green/cardg6.jpg';
  var cardGreenType6 = new cartaMazo("Ayuntamiento", 5, "verde", "", source); //2cartas
  mazoDistritos.cartasMazo.push(cardGreenType6,cardGreenType6);

  //Cartas Maravilla Moradas ->14 cartas
  var descripcion = "";
  descripcion = "Cuando se cuenten los puntos del final de la partida, el Patio de los milagros se considerará un distrito de un color a tu elección. No podrás usar esta capacidad si construiste el Patio de los milagros en tu último turno de la partida";
  source = 'images/Purple/cardp1.jpg';
  var cardPurpleType1 = new cartaMazo("Patio de los milagros", 2, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType1);
  descripcion = "El torreón no puede ser destruido por el condotiero";
  source = 'images/Purple/cardp2.jpg';
  var cardPurpleType2 = new cartaMazo("Torreon", 3, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType2);
  descripcion = "El Tesoro imperial tiene un coste de 4 monedas de oro para ser construido, pero te reporta tantos puntos adicionales como monedas de oro tengas en tu posesión al final de la partida";
  source = 'images/Purple/cardp3.jpg';
  var cardPurpleType3 = new cartaMazo("Tesoro imperial", 4, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType3);
  descripcion = "Una vez por turno puedes descartar una carta de Distrito de tu mano y recibir una moneda de oro a cambio";
  source = 'images/Purple/cardp4.jpg';
  var cardPurpleType4 = new cartaMazo("Laboratorio", 5, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType4);
  descripcion = "Al final de la partida la Fuente de los deseos te da 5 puntos equivalentes a su coste y además te da un punto adicional por cada otro Distrito violeta de tu posesión";
  source = 'images/Purple/cardp5.jpg';
  var cardPurpleType5 = new cartaMazo("Fuente de los deseos", 5, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType5);
  descripcion = "Puedes construir Distritos con el mismo nombre que otros que ya tengas en juego. No perderas las construcciones realizadas de esta forma si la Cantera es destruida";
  source = 'images/Purple/cardp6.jpg';
  var cardPurpleType6 = new cartaMazo("Cantera", 5, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType6);
  descripcion = "Una vez por turno puedes pagar dos monedas de oro para robar tres cartas";
  source = 'images/Purple/cardp7.jpg';
  var cardPurpleType7 = new cartaMazo("Fabrica", 5, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType7);
  descripcion = "Cuando el condotiero destruya un distrito, puedes pagar una moneda de oro para cogerlo y ponerlo en tu mano. No puedes hacer esto si eres el condotiero";
  source = 'images/Purple/cardp8.jpg';
  var cardPurpleType8 = new cartaMazo("Cementerio", 5, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType8);
  descripcion = "Si decides robar dos cartas al principio de tu turno, coges en su lugar tres y te quedas con una de ellas y descartas las demás";
  source = 'images/Purple/cardp9.jpg';
  var cardPurpleType9 = new cartaMazo("Observatorio", 5, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType9);
  descripcion = "El precio que debe pagar el condotiero para destruir tus distritos se incrementa en 1";
  source = 'images/Purple/cardp10.jpg';
  var cardPurpleType10 = new cartaMazo("Gran muralla", 6, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType10);
  descripcion = "Si decides robar dos cartas al principio de tu turno, te quedas con las dos cartas que cojas";
  source = 'images/Purple/cardp11.jpg';
  var cardPurpleType11 = new cartaMazo("Biblioteca", 6, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType11);
  descripcion = "En lo que respecta a los ingresos, la Escuela de magia es considerada como un distrito de un color a tu elección. De esta forma te reporta ganancias ya seas Rey, Obispo, Mercader o Condotiero";
  source = 'images/Purple/cardp12.jpg';
  var cardPurpleType12 = new cartaMazo("Escuela de magia", 6, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType12);
  descripcion = "La construcción de esta maravilla -ningún dragón ha sido visto en el reino desde hace cientos de años- cuesta seis monedas de oro pero proporciona ocho puntos al final del juego";
  source = 'images/Purple/cardp13.jpg';
  var cardPurpleType13 = new cartaMazo("Puerta dragon", 6, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType13);
  descripcion = "La construcción de esta maravilla -nunca nadie comprendió completamente para que puede servir una Universidad- cuesta seis monedas de oro pero proporciona ocho puntos al final del juego";
  source = 'images/Purple/cardp14.jpg';
  var cardPurpleType14 = new cartaMazo("Universidad", 6, "morado", descripcion, source);
  mazoDistritos.cartasMazo.push(cardPurpleType14);
}

//Asignamos las cosas en funcion del canvas
function asignCoords(){
  //Colocamos el mazo de distritos en el tablero
  mazoDistritos.Xcoord = canvas.width/2 - mazoDistritos.width;
  mazoDistritos.Ycoord = canvas.height/2 - mazoDistritos.height/2;
  //Colocamos el mazo de personajes al lado
  mazoPersonajes.Xcoord = canvas.width/2 + 5; //Que no esten muy pegadoslos dos
  mazoPersonajes.Ycoord = canvas.height/2 - mazoPersonajes.height/2;
}

//Redibuja todo (en principio no necesario) - (Tras comentarla me parece mas util)
function drawAll(){
  //Mazo image
  source = 'images/Reverse/revCartaMazo.jpg';
  render(source, mazoDistritos.Xcoord, mazoDistritos.Ycoord); //Dibujamos el mazo de distritos
  source = 'images/Reverse/revCartaPer.jpg';
  render(source, mazoPersonajes.Xcoord, mazoPersonajes.Ycoord); //Dibujamos el mazo de perseonajes
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
