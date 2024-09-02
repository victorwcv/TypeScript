// DESAFIO
// Utilizar Record para crear un tipo nuevo donde sus propiedades correspondan a ListaProductos y cada propiedad debe ser de tipo Propiedades.

type ListaProductos = "fresas" | "arroz" | "frijoles" | "tomates" | "pollo";

type Propiedades = {
  cantidad: number;
  precio: number;
  categoria: string;
  tipo: string;
};


type Productos = Record<ListaProductos, Propiedades>;
