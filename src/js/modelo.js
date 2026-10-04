// Modelo: conoce los archivos y transforma su texto en datos, sin acceder al DOM.
const ARCHIVOS = [
  'mireLosMuros.md',
  'mientrasPorCompetir.md',
  'eraseUnHombre.md',
  'escritoEstaEnMiALma.md',
  'unSonetoMeManda.md',
];

function quitarComillas(texto) {
  return texto.trim().replace(/^"(.*)"$/, '$1');
}

export function interpretarSoneto(texto, id) {
  // Los originales emplean Titulo/Título y Soneto/Soneto:.
  const lineas = texto.replace(/^\uFEFF/, '').split(/\r?\n/);
  const lineaTitulo = lineas.find((linea) => /^T[ií]tulo\s*:/i.test(linea.trim()));
  const lineaAutor = lineas.find((linea) => /^Autor\s*:/i.test(linea.trim()));
  const inicio = lineas.findIndex((linea) => /^Soneto\s*:?$/i.test(linea.trim()));

  if (!lineaTitulo || !lineaAutor || inicio === -1) {
    throw new Error(`El archivo ${id} no tiene título, autor o sección de versos.`);
  }

  const titulo = quitarComillas(lineaTitulo.slice(lineaTitulo.indexOf(':') + 1));
  const autor = quitarComillas(lineaAutor.slice(lineaAutor.indexOf(':') + 1));
  const versos = lineas.slice(inicio + 1).map((linea) => linea.trim()).filter(Boolean);

  if (!titulo || !autor || versos.length !== 14) {
    throw new Error(`El archivo ${id} debe contener título, autor y 14 versos.`);
  }

  return {
    id,
    titulo,
    autor,
    estrofas: [versos.slice(0, 4), versos.slice(4, 8), versos.slice(8, 11), versos.slice(11, 14)],
  };
}

export class ModeloSonetos {
  constructor() {
    this.sonetos = [];
  }

  async cargar() {
    this.sonetos = await Promise.all(ARCHIVOS.map(async (archivo) => {
      // La ruta se resuelve desde este módulo, aunque cambie la URL de la página.
      const url = new URL(`../../sonetos/${archivo}`, import.meta.url);
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error(`No se pudo cargar ${archivo}: HTTP ${respuesta.status}.`);
      }
      return interpretarSoneto(await respuesta.text(), archivo.replace(/\.md$/, ''));
    }));
    return this.sonetos;
  }

  obtenerPorId(id) {
    return this.sonetos.find((soneto) => soneto.id === id);
  }
}
