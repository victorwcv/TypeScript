/* 
 DESAFIO
 Implementar guardas de tipo para validar y estructurar los datos, para obtener un arreglo con objetos de tipo Usuario.
*/

enum Rol {
  ADMIN,
  MIEMBRO,
  INVITADO,
}

type Coordenadas = {
  lat: number;
  long: number;
};

interface Perfil {
  nombre: string;
  compania: string;
  fechaNacimiento: Date;
  direccion: string;
  ubicacion: Coordenadas;
  acerca: string;
}

interface Usuario {
  id: string;
  email: string;
  usuario: string;
  perfil: Perfil;
  rol: Rol[];
}

// Guardas de tipo
function assertString(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error(`'${valor}' no es una cadena de texto.`);
  }
}

function assertNumber(valor: unknown): asserts valor is number {
  if (typeof valor !== "number") {
    throw new Error(`'${valor}' no es un número.`);
  }
}

function assertDate(valor: unknown): asserts valor is Date {
  if (!(valor instanceof Date)) {
    throw new Error(`'${valor}' no es una fecha.`);
  }
}

function obtenerRol(valor: string): Rol {
  switch (valor) {
    case "admin":
      return Rol.ADMIN;
    case "miembro":
      return Rol.MIEMBRO;
    case "invitado":
      return Rol.INVITADO;
    default:
      throw new Error(`Rol inválido: ${valor}`);
  }
}

fetch("./users.json")
  .then((respuesta) => respuesta.json())
  .then((datos: {}[]) => {
    return datos.map((dato: {}) => {
      const usuario: Usuario = {
        id: dato["id" as keyof typeof dato],
        email: dato["email" as keyof typeof dato],
        usuario: dato["username" as keyof typeof dato],
        perfil: {
          nombre: dato["perfil" as keyof typeof dato]["nombre"],
          compania: dato["perfil" as keyof typeof dato]["compania"],
          fechaNacimiento: new Date(
            dato["perfil" as keyof typeof dato]["fechaNacimiento"]
          ),
          direccion: dato["perfil" as keyof typeof dato]["direccion"],
          ubicacion: {
            lat: dato["perfil" as keyof typeof dato]["ubicacion"]["lat"],
            long: dato["perfil" as keyof typeof dato]["ubicacion"]["long"],
          },
          acerca: dato["perfil" as keyof typeof dato]["acerca"],
        },
        rol: Array.from(dato["roles" as keyof typeof dato]).map((rol) =>
          obtenerRol(rol as string)
        ),
      };
      assertString(usuario.id);
      assertString(usuario.email);
      assertString(usuario.usuario);
      assertString(usuario.perfil.nombre);
      assertString(usuario.perfil.compania);
      assertDate(usuario.perfil.fechaNacimiento);
      assertString(usuario.perfil.direccion);
      assertNumber(usuario.perfil.ubicacion.lat);
      assertNumber(usuario.perfil.ubicacion.long);
      assertString(usuario.perfil.acerca);
      assertNumber(usuario.rol.length);

      return usuario;

    });
  }).then((usuarios: Usuario[]) => {
    console.log(usuarios);
  })
  .catch((error) => console.error(error));
