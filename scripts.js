var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

var puntosUsuario = 0;
var puntosIA = 0;

function jugar(jugada) {
  var num = Math.floor(Math.random() * opciones.length);
  var eleccionIA = opciones[num];

  // Mostrar imágenes y texto
  document.getElementById("img-user").src = "imgs/" + jugada + ".png";
  document.getElementById("img-ia").src = "imgs/" + eleccionIA + ".png";
  document.getElementById("eleccion-user").innerText = jugada.toUpperCase();
  document.getElementById("eleccion-ia").innerText = eleccionIA.toUpperCase();

  // Determinar quién gana
  var resultado = "";
  if (jugada == eleccionIA) {
    resultado = "EMPATE";
  } else if (
    (jugada == "piedra" && (eleccionIA == "tijera" || eleccionIA == "lagarto")) ||
    (jugada == "papel" && (eleccionIA == "piedra" || eleccionIA == "spock")) ||
    (jugada == "tijera" && (eleccionIA == "papel" || eleccionIA == "lagarto")) ||
    (jugada == "lagarto" && (eleccionIA == "spock" || eleccionIA == "papel")) ||
    (jugada == "spock" && (eleccionIA == "tijera" || eleccionIA == "piedra"))
  ) {
    puntosUsuario = puntosUsuario + 1;
    document.getElementById("puntos-user").innerText = puntosUsuario;
    resultado = "GANA USUARIO";
  } else {
    puntosIA = puntosIA + 1;
    document.getElementById("puntos-ia").innerText = puntosIA;
    resultado = "GANA IA";
  }

  // Mostrar resultado
  document.getElementById("resultado").innerText = resultado;
}

function reiniciar() {
  puntosUsuario = 0;
  puntosIA = 0;
  document.getElementById("puntos-user").innerText = "0";
  document.getElementById("puntos-ia").innerText = "0";
  document.getElementById("img-user").src = "imgs/interrogacion.png";
  document.getElementById("img-ia").src = "imgs/interrogacion.png";
  document.getElementById("eleccion-user").innerText = "---";
  document.getElementById("eleccion-ia").innerText = "---";
  document.getElementById("resultado").innerText = "Haz tu jugada";
}
