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
Se utilizarán contenedores HTML semánticos (`header`, `main`, `article` y `footer`), **Grid** para la distribución principal y **Flexbox** para la cabecera. En escritorio, el título y el autor aparecerán a la izquierda y los versos a la derecha; en pantallas estrechas, se organizarán en una columna.

Se emplearán unidades relativas (`rem`, `%` y `fr`), junto con `max-width` y `clamp()`, evitando dimensiones rígidas. Se aplicarán los principios Gestalt de **proximidad**, agrupando título y autor y separando las cuatro estrofas; **semejanza**, manteniendo estilos coherentes; y **figura-fondo**, destacando el contenido mediante contraste y espacio libre.

Los estilos cromáticos, tipográficos y espaciales se organizarán en archivos CSS diferenciados.