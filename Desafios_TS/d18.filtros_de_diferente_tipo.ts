/* 
Utilizar genericos para estructurar y declarar cada uno de los filtros que vamos a crear.
*/

interface Persona {
  id: string;
  nombre: string;
}

interface Empleado extends Persona {
  empresa: string;
  fechaNacimiento: Date;
  nivel: number;
}

const persona: Empleado[] = [
  {
    id: "1",
    nombre: "Victor",
    empresa: "Google",
    fechaNacimiento: new Date("2000-01-01"),
    nivel: 5,
  },
  {
    id: "2",
    nombre: "William",
    empresa: "Facebook",
    fechaNacimiento: new Date("1990-01-01"),
    nivel: 3,
  },
  {
    id: "3",
    nombre: "Natalia",
    empresa: "Twitter",
    fechaNacimiento: new Date("1995-01-01"),
    nivel: 2,
  },
  {
    id: "4",
    nombre: "Carlos",
    empresa: "Apple",
    fechaNacimiento: new Date("1999-01-01"),
    nivel: 1,
  },
  {
    id: "5",
    nombre: "Diana",
    empresa: "Netflix",
    fechaNacimiento: new Date("2005-01-01"),
    nivel: 4,
  },
];

interface FiltroGenerico<F, T> {
  key: keyof T;
  func: (valor: F) => boolean;
}

const filtroEmpresa: FiltroGenerico<string, Empleado> = {
  key: "empresa",
  func: (valor: string) => valor === "Google",
};

const filtroNivel: FiltroGenerico<number, Empleado> = {
  key: "nivel",
  func: (valor: number) => valor <= 3,
};

class Datos<T extends Persona> {
  private _datos: T[];
  constructor(datos: T[]) {
    this._datos = datos;
  }
  filtrar<F>(filtro: FiltroGenerico<F, T>): T[] {
    return this._datos.filter((valor: T) =>
      filtro.func(valor[filtro.key as keyof T] as unknown as F)
    );
  }
}

const datos = new Datos<Empleado>(persona);
console.log(datos.filtrar(filtroEmpresa));
console.log(datos.filtrar(filtroNivel));
