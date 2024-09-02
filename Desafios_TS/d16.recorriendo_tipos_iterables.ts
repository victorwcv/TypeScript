// *En javascript un objeto es iterable si cuenta con la propiedad Symbol.iterator [Arrays, Maps...]
// DESAFIO
// Implementar una funcion generica de utilidad iterable que funcione similar a Array.map()



function mapearValores<T, A>(lista: Iterable<T>, mapeo: (valor: T) => A): Array<A> {
  return Array.from(
    lista, mapeo
  )
}

// ejemplo 1
mapearValores([1, 2, 3, 4], (x) => x * 2);


// ejemplo 2
interface IterateNumber {
  [Symbol.iterator](): IterableIterator<number>;
}

const iterable: IterateNumber = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  },
};

mapearValores(iterable, (x) => x * 2);


// ejemplo 3
const mapa = new Map<number, string>([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
  [4, "cuatro"],
]);

mapearValores<[number, string], string>(
  mapa,
  (val: [number, string]) => val[1]
);
