// DESAFIO
// Implementar varias funciones para filtrar y manipular una lista de objetos contenidos dentro de un arreglo.

interface Persona {
  id: string;
  nombre: string;
  fechaNacimiento: Date;
}

interface Empleado extends Persona {
  empresa: string;
  nivel: number;
}

type RolGerente = "administrativo" | "ejecutivo" | "supervisor";

type Gerente = Omit<Empleado, "nivel"> & {
  rol: RolGerente;
};

const personas: Empleado[] = [
  {
    id: "1",
    nombre: "Victor",
    fechaNacimiento: new Date("2000-01-01"),
    empresa: "Google",
    nivel: 5,
  },
  {
    id: "2",
    nombre: "William",
    fechaNacimiento: new Date("1990-01-01"),
    empresa: "Facebook",
    nivel: 3,
  },
  {
    id: "3",
    nombre: "Natalia",
    fechaNacimiento: new Date("1995-01-01"),
    empresa: "Twitter",
    nivel: 2,
  },
  {
    id: "4",
    nombre: "Carlos",
    fechaNacimiento: new Date("1999-01-01"),
    empresa: "Apple",
    nivel: 1,
  },
];

function obtenerRolGerente(nivel: number): RolGerente {
  switch (nivel) {
    case 1:
      return "administrativo";
    case 2:
      return "ejecutivo";
    case 3:
      return "supervisor";
    default:
      throw new Error(`${nivel} no es un nivel de gerente válido.`);
  }
}

function obtenerGerentes(personas: Empleado[]): Gerente[] {
  return personas
    .filter((persona: Empleado) => persona.nivel <= 3)
    .map((persona: Empleado) => ({
      id: persona.id,
      nombre: persona.nombre,
      fechaNacimiento: persona.fechaNacimiento,
      empresa: persona.empresa,
      rol: obtenerRolGerente(persona.nivel),
    }));
}

function obtenerPersonas(gerentes: Gerente[]): Persona[] {
  return gerentes.map((gerente: Gerente) => ({
    id: gerente.id,
    nombre: gerente.nombre,
    fechaNacimiento: gerente.fechaNacimiento,
  }));
}

const gerentes = obtenerGerentes(personas);
const personas2 = obtenerPersonas(gerentes);
