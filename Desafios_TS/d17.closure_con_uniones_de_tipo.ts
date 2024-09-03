// Closure 
// funciones que mantienen referencia al scope fuera de si y pueden seguir accediendo a los valores incluso cuando ese contexto de ejecucion ya ha terminado.

// DESAFIO
// crear una funcion closure que recibe como parametro un valor que una union de tipo.
// la funcion closure devera manipular el valor dependiendo del tipo que este tenga.

function closure(valor: number | number[]) {
  const cambiarArreglo: () => number[] = () => {
    if (Array.isArray(valor)) {
      valor = valor.map(val => val * 2);
      return valor;
    }
    throw new Error('valor no es un arreglo');
  }

  const cambiarValor: () => number = () => {
    if (typeof valor === 'number') {
      valor = valor * 2;
      return valor;
    }
    throw new Error('valor es un arreglo');
  }

  if (Array.isArray(valor)) {
    return cambiarArreglo;
  }

  return cambiarValor;
}

const test1 = closure(1);
console.log(test1());
console.log(test1());
console.log(test1());
console.log(test1());

const test2 = closure([1, 2, 3]);
console.log(test2());
console.log(test2());
console.log(test2());
console.log(test2()); 


