// DESAFIO
// utilizando un fuarda de tipo, la funcion debera validar que tipo de dato se recibe.

const invalido1 = "\n";
const invalido2 = "\t";
const invalido3 = "\\";

function limpiarCadena(cadena: string): string {
  return cadena
    .replace(invalido1, "")
    .replace(invalido2, "")
    .replace(invalido3, "");
}

function limpiarTexto(datos: string | string[]): string | string[] {
  if (Array.isArray(datos)) {
    return datos.map(limpiarCadena);
  }

  return limpiarCadena(datos);
}

