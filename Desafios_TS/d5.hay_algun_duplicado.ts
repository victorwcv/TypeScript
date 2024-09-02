// DESAFIO: Hay algún duplicado?
// Crear una funcion para validar si un arreglo coneiene elementos duplicados.

function contieneDuplicados<T>(arreglo: T[]): boolean {
  while (arreglo.length > 0) {
    const elemento = arreglo.pop();
    if (elemento && arreglo.length > 0) {
      for (const el of arreglo) {
        if (el === elemento) {
          return true;
        }
      }
    }
  }
  return false;
}

const resultado1 = contieneDuplicados([1, 2, 3, 4, 5]);
const resultado2 = contieneDuplicados([true, false, true, false]);
const resultado3 = contieneDuplicados(["a", "b", "c", "d", "e"]);