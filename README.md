# Sonetos

La aplicación web consiste en un lector de sonetos. Un `soneto` es una composición poética de 14 versos organizados en cuatro estrofas fijas: dos cuartetos (de 4 versos cada uno) y dos tercetos (de tres versos cada uno). 

Los objetivos del proyecto son: 
- Diseño cromático y tipográfico


# Descripción

- La aplicación interactúa con un solo actor que es el usuario que leerá los sonetos. 
- El sistema dispondrá de un almacén de sonetos entre los que el usuario podrá escoger para proceder a su lectura. Para cada soneto, el almacén recogerá además del propio soneto, su autor y un título identificativo.
- El sistema ofrecerá un mecanismo para que el usuario escoja el soneto que desee leer con el fin de mostrarlo en pantalla. 


# Diseño

## Arquitectura 
- La aplicación deberá estar implementada siguiendo un patrón MVC (_Model-View-Controller_) con objeto de clarificar y diferenciar las distintas responsabilidades. 

## Organización 

- Tanto la distribución del código de los ficheros como la propia organización de los ficheros incluidos en la carpeta del proyecto deberán facilitar la comprensión y el mantenimiento de la solución aportada. 
- Se empleará un mecanismo moderno y apropiado para vincular los ficheros HTML, CSS y JS.

## Estilística

La vista del sistema deberá implementarse con el objeto de diferenciar los distintos aspectos considerados: diseño cromático, tipográfico y espacial. Y cada uno estará cimentado en una sólida estrategia:
  - diseño cromático: monocromática, triádica, complementaria, etc.
  - diseño tipográfico: dos fuentes contrastadas, una única fuente con niveles distintos de realce, etc.
  - diseño espacial: selección de unidades de medida y contenedores, principios de diseño `Gestalt`, etc. 

## Interacción 

La implementación de la interacción estará guiada para favorecer la usabilidad de la aplicación

# Buenas prácticas

- Se deberá cuidar el etiquetado HTML con el objeto de reflejar adecuadamente la estructura de la página y del propio soneto.
- El empleo de una estrategia de selección en CSS de elementos HTML moderna y mantenible
- Una sólida política de coordinación de JS tanto con el DOM (_Document Object Model_) como con el CSSOM (_CSS Object Model_)

# Decisiones

## Estilística

### Diseño cromático
Se empleará una **paleta monocromática cálida**, con fondo marfil y tonos oscuros para el texto. Los colores compartirán el mismo matiz, variando su saturación y luminosidad para establecer jerarquías y asegurar un contraste legible. Se definirán mediante variables CSS en `:root`, utilizando HSL.

### Diseño tipográfico
Se utilizará una única familia con serifa, **Palatino Linotype**, con `serif` como alternativa. La jerarquía visual se establecerá mediante diferentes tamaños y pesos, reservando la negrita para títulos y elementos destacados. Los versos estarán alineados a la izquierda, con interlineado cómodo y tamaños expresados en `rem`.

### Diseño espacial
Se utilizarán contenedores HTML semánticos (`header`, `main`, `article` y `footer`), **Grid** para la distribución principal y **Flexbox** para la cabecera. En escritorio, el menú de selección aparecerá a la izquierda y el soneto completo a la derecha, con el título y el autor sobre las estrofas. En pantallas estrechas, 
el menú se situará encima del soneto.

Se emplearán unidades relativas (`rem`, `%` y `fr`), junto con `max-width` y `clamp()`, evitando dimensiones rígidas. Se aplicarán los principios Gestalt de **proximidad**, agrupando título y autor y separando las cuatro estrofas; **semejanza**, manteniendo estilos coherentes; y **figura-fondo**, destacando el contenido mediante contraste y espacio libre.

Los estilos cromáticos, tipográficos y espaciales se organizarán en archivos CSS diferenciados.

## Ejecución del proyecto con Live Server

El proyecto está desarrollado con **HTML, CSS y JavaScript nativos**, por lo que no necesita instalar dependencias adicionales.

Para ejecutarlo correctamente se recomienda utilizar la extensión **Live Server** de Visual Studio Code.

### Pasos

1. Abrir la carpeta del proyecto en **Visual Studio Code**.
2. Instalar la extensión **Live Server** si todavía no está instalada.
3. Abrir el archivo `index.html`.
4. Pulsar con el botón derecho sobre `index.html`.
5. Seleccionar **Open with Live Server**.

También se puede iniciar pulsando el botón **Go Live** situado en la barra inferior de Visual Studio Code.

El navegador se abrirá automáticamente con una dirección similar a:

```text
http://127.0.0.1:5500/
```

A partir de ese momento, los cambios realizados en los archivos HTML, CSS o JavaScript se actualizarán automáticamente en el navegador al guardar los archivos.

> Se recomienda utilizar Live Server en lugar de abrir directamente el archivo `index.html`, ya que permite ejecutar el proyecto mediante un servidor local y evita posibles problemas con la carga de recursos.