// DESAFIO 
// Implementar una funcion generica que, con tipos condicionales, configure el vehiculo segun el parametro.

type MotorDiesel = "diesel";
type MotorGasolina = "gasolina";
type MotorElectrico = "electrico";

type Auto = {
  motor: MotorGasolina,
  tipo: "sedan",
  puertas: 4,
} | {
  motor: MotorDiesel,
  tipo: "hatchback",
  puertas: 4,
} | {
  motor: MotorElectrico,
  tipo: "suv",
  puertas: 5,
} | {
  motor: MotorElectrico,
  tipo: "camioneta",
  puertas: 2,
} | {
  motor: MotorGasolina,
  tipo: "familiar",
  puertas: 5,
}

type TipoAuto = Auto["tipo"];

type ExcluirTipo<K> = K extends "tipo" ? never : K;

type ExcluirLlaveTipo<Auto> = {[K in ExcluirTipo<keyof Auto>]: Auto[K]};

type ExtraerParametrosAuto<A, T> = A extends {tipo:T} ? ExcluirLlaveTipo<A> : never;

function crearAuto<T extends TipoAuto>(tipo: TipoAuto, parametros: ExtraerParametrosAuto<Auto, T> ): void{
  
}

crearAuto<"sedan">("sedan", {motor: "gasolina", puertas: 4});