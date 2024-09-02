// Metodo factoria
// patron que permite crear objetos sin tener que definir una clase exacta.

// DESAFIO
// hacer que la clase construya una casa segun los objetos que se pasen como parametros.

interface ICuartos {
  numeroCuartos: number;
}

class DosCuartos implements ICuartos {
  numeroCuartos = 2;
}

class TresCuartos implements ICuartos {
  numeroCuartos = 3;
}

interface Ipisos {
  numeroPisos: number;
}

class UnPiso implements Ipisos {
  numeroPisos = 1;
}

class DosPisos implements Ipisos {
  numeroPisos = 2;
}

interface ICalentador {
  tipo: "electrico" | "gas";
}

class CalentadorElectrico implements ICalentador {
  tipo = "electrico" as const;
}

class CalentadorGas implements ICalentador {
  tipo = "gas" as const;
}

class Factory {
  static obtenerPisos(numero: 1 | 2): Ipisos {
    if (numero === 1) {
      return new UnPiso();
    } else {
      return new DosPisos();
    }
  }

  static obtenerCuartos(numero: 2 | 3): ICuartos {
    if (numero === 2) {
      return new DosCuartos();
    } else {
      return new TresCuartos();
    }
  }

  static obtenerCalentador(tipo: "electrico" | "gas"): ICalentador {
    if (tipo === "electrico") {
      return new CalentadorElectrico();
    } else {
      return new CalentadorGas();
    }
  }


}

class Casa {
  pisos: Ipisos = Factory.obtenerPisos(2);
  cuartos: ICuartos = Factory.obtenerCuartos(3);
  calentador: ICalentador = Factory.obtenerCalentador("gas");
}
