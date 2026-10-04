// Controlador: coordina los datos del modelo y las acciones de la vista.
export class ControladorSonetos {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
    this.vista.vincularSeleccion((id) => this.seleccionar(id));
    this.vista.vincularReintento(() => this.iniciar());
  }

  async iniciar() {
    this.vista.mostrarCarga();
    try {
      const sonetos = await this.modelo.cargar();
      this.vista.mostrarMenu(sonetos);
      this.seleccionar(sonetos[0].id);
    } catch (error) {
      console.error('Error al iniciar el lector:', error);
      this.vista.mostrarError();
    }
  }

  seleccionar(id) {
    const soneto = this.modelo.obtenerPorId(id);
    if (soneto) this.vista.mostrarSoneto(soneto);
  }
}
