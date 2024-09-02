//  DESAFIO 
// Crear un tipo mapeado que indique que productos estan disponibles para la venta.

interface Productos {
  arroz: {enInventario: true}
  leche: {enInventario: false}
  carne: {enInventario: true}
  azucar: {enInventario: false}
}

type ExtractoEnInventario<Type> = {
  [Property in keyof Type]: Type[Property] extends {enInventario: true} ? true : false
}

type ProductosEnInventario = ExtractoEnInventario<Productos>