// DESAFIO
// Crear una funcion que reciba como parametro un objeto partial de la interfaz Usuario.
// La funcion debera retornar un objeto Usuario con todas sus propiedades definidas.

interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
}

function crearUsuario(valores: Partial<Usuario>): Usuario {
  return {
    id:"N/A",
    nombre:"N/A",
    apellido:"N/A",
    email:"N/A",
    telefono:"N/A",
    direccion:"N/A",
    ...valores
  }
}

const prueba1 = crearUsuario({
  nombre: "Victor",
  direccion: "123 Main St",
});
console.log(prueba1);
