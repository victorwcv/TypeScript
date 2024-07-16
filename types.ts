// tipado de variables y constantes en typescript (ES6);

// inferencia de tipos
// TypeScript permite inferir el tipo de una variable.Haciendo que no sea necesario el uso de un tipo explicito.
let nombre2 = "Victor";
let edad2 = 27;

// Variables
// Se usan para declarar una variable.
let nombre: string = "Victor";
let edad: number = 27;
let adulto: boolean = true;
let simbolo: symbol = Symbol("qualquer-symbol");
let bigint: bigint = 9007199254740991n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

// Objetos
let persona: { nombre: string; edad: number; adulto?: boolean } = {
  nombre: "Victor",
  edad: 27,
};

// Funciones
function suma(a: number, b: number): number {
  return a + b;
}

const suma2 = (a: number, b: number): number => a + b;

const suma3 = (a: number, b: number) => a + b;

// Clases

class Persona {
  constructor(
    public nombre: string,
    public edad: number,
    public adulto?: boolean
  ) {}
}

const persona2 = new Persona("Victor", 27);

// Type Alias
// Por convención, los alias (type) se crean con mayúsculas para diferenciarlos de las variables.
type Cadena = string;
type Numerico = number;
type Booleano = boolean;
type User = {
  readonly id: number; // readonly property
  nombre: string;
  edad: number;
  adulto?: boolean; // optional property
};

const cadena: Cadena = "Victor";
const numerico: Numerico = 27;
const booleano: Booleano = true;
const user: User = {
  id: 1,
  nombre: "Victor",
  edad: 27,
};

// Union
// Se usa para declarar una variable que puede ser de un tipo o de otro.
type ID = string | number;
type ID2 = string | number | boolean;

const id: ID = "123";
const id2: ID2 = 123;

// Any
// Se usa para declarar una variable que puede ser de cualquier tipo.
let any: any = "cualquier-cosa";
any = 123;
any = true;

// Void
// Se usa para declarar una función que no retorna nada.
function saludar(): void {
  console.log("Hola");
}

// Never
// Se usa para declarar una función que nunca retorna algo.
function error(mensaje: string): never {
  throw new Error(mensaje);
}

// Null y Undefined
// Se usan para declarar variables que pueden ser null o undefined.
let nullVariable: null = null;
let undefinedVariable: undefined = undefined;

// Object
// Se usa para declarar un objeto.
let objeto: object = {};

objeto = {
  nombre: "Victor",
  edad: 27,
};

objeto = [1, 2, 3];

// Union Types
// Se usan para declarar una variable que puede ser de un tipo o de otro.
let variable: string | number = "William";
variable = 123;

// Template Union Types
type UserID = `user_${number}`;
let userId: UserID = "user_123";

type Hex = `#${string}`;
let colorHex: Hex = "#123";

// Literal Types
// Se usan para declarar una variable que puede ser de un tipo o de otro.
let variable2: "William" | "Victor" = "William";
variable2 = "Victor";

// Enum
// Se usan para declarar una variable que puede ser de un tipo o de otro.
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let color: Color = Color.Azul;

// Intersection Types
// Se usan para extender los tipos de una variable.
type Talla = {
  talla: string;
};
type Peso = {
  peso: number;
};
type Persona2 = Talla & Peso;

let persona3: Persona2 = {
  talla: "M",
  peso: 70,
};

// Type Indexing
// sirve para reutilizar tipos.
type HeroProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressHero: HeroProperties["address"] = {
  planet: "Earth",
  city: "New York",
};

// Type from Function return
// crea un nuevo tipo a partir de lo que devuelve una función.
function createAddress() {
  return {
    planet: "Earth",
    city: "Lima",
  };
}

type Address = ReturnType<typeof createAddress>;

// Arrays

const languages: string[] = [];

languages.push("TypeScript");
languages.push("Java");
languages.push("C++");

const properties: (string | number)[] = [];

properties.push("TypeScript");
properties.push(2021);

// Tuplas
// Es un array de una longitud predefinida.

// Ejemplo 

/* 
[
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
]
*/

type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
]

