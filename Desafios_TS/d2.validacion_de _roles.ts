enum Rol {
  ADMIN = "ADMIN",
  MIEMBRO = "MIEMBRO",
  VISITANTE = "VISITANTE",
}

interface Usuario {
  emaril: string;
  usuario: string;
  rol: Rol;
}

function esRolValido(valor: string): valor is Rol {
  return Object.values<string>(Rol).includes(valor);
}

function obtenerRol(rol: string): Rol {
  if(!esRolValido(rol)){
    throw new Error(`Rol inválido: ${rol}`);
  }

  return rol as Rol;
}

function crearUsuario(emaril: string, usuario: string, rol: string): Usuario {
  return {
    emaril,
    usuario,
    rol: obtenerRol(rol),
  };
}