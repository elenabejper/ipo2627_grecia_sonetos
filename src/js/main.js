import { ModeloSonetos } from './modelo.js';
import { VistaSonetos } from './vista.js';
import { ControladorSonetos } from './controlador.js';

const modelo = new ModeloSonetos();
const vista = new VistaSonetos();
const controlador = new ControladorSonetos(modelo, vista);

controlador.iniciar();
