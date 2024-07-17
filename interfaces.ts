//Asercion de tipos

const canvas = document.querySelector("canvas");

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
}

// typeof --> para tipos
// instanceof --> para instancias

//Interfaces

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  existencias: number;
}

interface Zapatilla extends Producto {
  talla: string;
  color: string;
}

interface CarritoDeCompras {
  totalPrice: number;
  items: (Producto | Zapatilla)[];
}

interface CarritoOps {
  addItem(item: Zapatilla): void;
  removeItem(id: number): void;
  clear(): void;
  checkout(): void;
}

const carrito: CarritoDeCompras = {
  totalPrice: 0,
  items: [
    {
      id: 1,
      nombre: "Zapatilla",
      precio: 100,
      existencias: 5,
      talla: "M",
      color: "rojo",
    },
  ],
};

// Narrowing
// TypeGuards

function mostrarLongitud (objeto: number | string) {
  if (typeof objeto === "string") {
    console.log(objeto.length);
  } else {
    console.log(objeto);
  }
}

// Example 2

interface Mario {
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

function jugar(personaje: Personaje) {
  if ("saltar" in personaje) {
    personaje.saltar();
  } else {
    personaje.correr();
  }
}

