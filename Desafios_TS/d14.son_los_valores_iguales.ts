// DESAFIO
// Validar los tipos y hacer que la funcion retorne un valor booleano e indique si los objetos son iguales o no.
// - comparar si los valores son arreglos u objetos
// - contrastar cada una de sus propiedades individualmente

function sonIguales(valor1: unknown, valor2: unknown): boolean {
  if (
    Array.isArray(valor1) &&
    Array.isArray(valor2) &&
    valor1.length === valor2.length
  ) {
    for (let i = 0, j = valor1.length; i < j; i++) {
      if (!sonIguales(valor1[i], valor2[i])) {
        return false;
      }
    }
    return true;
  }

  if (
    valor1 &&
    valor2 &&
    typeof valor1 === "object" &&
    typeof valor2 === "object"
  ) {
    const keys1 = Object.keys(valor1);
    const keys2 = Object.keys(valor2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (
        !sonIguales(
          valor1[key as keyof typeof valor1],
          valor2[key as keyof typeof valor2]
        )
      ) {
        return false;
      }
    }
    return true;
  }

  return valor1 === valor2;
}

const test1 = sonIguales([1, 2, 3], [1, 2, 3]);
const test2 = sonIguales({ a: 1, b: 2 }, { a: 1, b: 3 });

console.log(test1, test2);