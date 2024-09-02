interface Perfil {
  nombre: string;
  edad: number;
  direccion: string;
  correo: string;
}

interface Acceso {
  id: string;
  email: string;
  usuario: string;
  constrasena: string;
}

type Usuario = Perfil & Acceso;

function crearUsuario(perfil: Perfil, acceso: Acceso): Usuario {
  return {
    ...perfil,
    ...acceso,
  };
}
