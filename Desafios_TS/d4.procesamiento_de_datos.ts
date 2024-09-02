type TipoArchivo = "XML" | "TXT" | "JSON";
type Acciones = "crear" | "actualizar" | "borrar";

type EventoArchivo = `${Acciones}${TipoArchivo}`;

function procesarDatos(evento: EventoArchivo, datos: string): void {
  console.log(evento);
  console.log(datos);
}

procesarDatos("crearXML", "<h1>Hola</h1>");

procesarDatos("actualizarJSON", '{ "id": 1, "name": "John" }');