// Vista: crea HTML y recoge interacciones. No carga ni interpreta archivos.
export class VistaSonetos {
  constructor() {
    this.principal = document.getElementById('principal');
    this.lista = document.getElementById('lista-sonetos');
    this.articulo = document.getElementById('soneto');
    this.titulo = document.getElementById('titulo-soneto');
    this.autor = document.getElementById('autor-soneto');
    this.estrofas = document.getElementById('estrofas-soneto');
    this.estado = document.getElementById('estado');
    this.error = document.getElementById('error');
    this.reintentar = document.getElementById('reintentar');
  }

  vincularSeleccion(alSeleccionar) {
    // Delegación: un único listener atiende los cinco botones.
    this.lista.addEventListener('click', (evento) => {
      const boton = evento.target.closest('button[data-soneto]');
      if (boton && this.lista.contains(boton)) {
        alSeleccionar(boton.dataset.soneto);
      }
    });
  }

  vincularReintento(alReintentar) {
    this.reintentar.addEventListener('click', alReintentar);
  }

  mostrarCarga() {
    this.principal.setAttribute('aria-busy', 'true');
    this.estado.classList.remove('aviso--oculto');
    this.estado.textContent = 'Cargando sonetos…';
    this.error.hidden = true;
    this.reintentar.hidden = true;
    this.articulo.hidden = true;
  }

  mostrarMenu(sonetos) {
    const fragmento = document.createDocumentFragment();
    sonetos.forEach((soneto) => {
      const elemento = document.createElement('li');
      const boton = document.createElement('button');
      boton.classList.add('menu__boton');
      boton.type = 'button';
      boton.dataset.soneto = soneto.id;
      boton.setAttribute('aria-pressed', 'false');
      boton.setAttribute('aria-controls', 'soneto');

      const titulo = document.createElement('span');
      titulo.textContent = soneto.titulo;
      const autor = document.createElement('span');
      autor.classList.add('menu__autor');
      autor.textContent = soneto.autor;
      boton.append(titulo, autor);
      elemento.append(boton);
      fragmento.append(elemento);
    });
    this.lista.replaceChildren(fragmento);
  }

  mostrarSoneto(soneto) {
    this.titulo.textContent = soneto.titulo;
    this.autor.textContent = soneto.autor;
    const fragmento = document.createDocumentFragment();

    soneto.estrofas.forEach((versos) => {
      const parrafo = document.createElement('p');
      parrafo.classList.add('soneto__estrofa');
      versos.forEach((verso) => {
        const linea = document.createElement('span');
        linea.classList.add('soneto__verso');
        linea.textContent = verso;
        parrafo.append(linea, document.createTextNode('\n'));
      });
      fragmento.append(parrafo);
    });
    this.estrofas.replaceChildren(fragmento);

    this.lista.querySelectorAll('[data-soneto]').forEach((boton) => {
      boton.setAttribute('aria-pressed', String(boton.dataset.soneto === soneto.id));
    });

    this.articulo.hidden = false;
    this.error.hidden = true;
    this.reintentar.hidden = true;
    this.estado.classList.add('aviso--oculto');
    this.estado.textContent = `Mostrando ${soneto.titulo}, de ${soneto.autor}.`;
    this.principal.setAttribute('aria-busy', 'false');
    document.title = `${soneto.titulo} — Sonetos`;
  }

  mostrarError() {
    this.principal.setAttribute('aria-busy', 'false');
    this.estado.textContent = '';
    this.error.textContent = 'No se han podido cargar los sonetos. Comprueba la conexión y vuelve a intentarlo.';
    this.error.hidden = false;
    this.reintentar.hidden = false;
    this.articulo.hidden = true;
  }
}
