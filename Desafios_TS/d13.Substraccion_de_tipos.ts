// Asercion de constantes: permite indicar a typescript que infiera el tipo mas especifico posible a partir de un valor dado.

// DESAFIO
// sustraer los eventos de cada objeto en el arreglo y con ellos crear un tipo que contenga la union de todos los eventos del objeto.

const EventosJavaScript = [
  {
    nombre: "Evento click",
    evento: "onclick",
  },
  {
    nombre: "Evento de cambio de un elemento",
    evento: "onchange",
  },
  {
    nombre: "Evento cuando el puntero se mueve dentro del area de un elemento",
    evento: "onmouseover",
  },
  {
    nombre: "Evento cuando el puntero se mueve fuera del area de un elemento",
    evento: "onmouseout",
  },
  {
    nombre: "Evento cuando el usuario presiona una tecla",
    evento: "onkeydown",
  },
  {
    nombre: "Evento cuando la pagina termina de cargar",
    evento: "onload",
  },
]as const;

type Evento = typeof EventosJavaScript[number]["evento"];


const eventos: Evento[] = []