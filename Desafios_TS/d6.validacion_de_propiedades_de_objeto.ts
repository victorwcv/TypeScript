// Asegurar que un objeto Javascript no contenga propiedades inesperadas fuera de los tipos definidos
// DESAFIO:
// Validar si el objeto que recibe como parametro contiene propiedades que no estan dentro de la definicion de usuario.

interface Usuario {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  codigoPostal: string;
}

type LLavesUsuario = keyof Usuario;

const llavesUsuario: LLavesUsuario[] = [
  "nombre",
  "apellido",
  "email",
  "telefono",
  "codigoPostal",
];

function crearUsuario(datos: {}): Usuario {
  const llaves = Object.keys(datos);
  for (const llave of llaves) {
    if (!llavesUsuario.includes(llave as LLavesUsuario)) {
      throw new Error(`${llave} no es una propiedad de usuario.`);
    }
  }

  if (llaves.length !== llavesUsuario.length) {
    throw new Error("El numero de propiedades no coincide.");
  }

  return datos as Usuario;
}

crearUsuario({
  nombre: "Victor",
  apellido: "Ccanchi",
  email: "vccanchi@me.com",
  telefono: "123456789",
  direccion: "123 Main St",
  codigoPostal: "123456",
});

crearUsuario({
  nombre: "Natalia",
  apellido: "Perez",
  email: "nperez@me.com",
  telefono: "123456789",
  codigoPostal: "123456",
});
