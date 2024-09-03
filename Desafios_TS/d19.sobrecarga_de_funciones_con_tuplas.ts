/*  SOBRECARGA DE FUNCIONES.- se utiliza para que una funcion se pueda llamar con parametros diferentes */

/* DESAFIO
  con la sobrecarga de funciones, declarar una funcion generica la cual pueda recibir un parametro de tipo tupla de varios largos.
*/

function sobrecargaTuplas<T1>(valores: [T1]): number;
function sobrecargaTuplas<T1, T2>(valores: [T1, T2]): number;
function sobrecargaTuplas<T1, T2, T3>(valores: [T1, T2, T3]): number;

function sobrecargaTuplas(valores: [unknown] | [unknown, unknown] | [unknown, unknown, unknown]) {
  return valores.length;
}

sobrecargaTuplas([10]);
sobrecargaTuplas([10, 'test']);
sobrecargaTuplas([10, false, 'hello']);