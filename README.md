# <h1 id = "inicio">TECNO-ACCIÓN :Organización Nacional de Tecnología</h1>
  Buenas a los que vengan a leer este Readme, este repositorio se va a encargar del trabajo grupal de la materia lenguaje informatico 1,
  los integrantes de este trabajo practico son:
  
  1-Nombre y Apellido: Axel David Soto
  
    comision: 3
    
  2-Nombre y Apellido: Matheo Nehuen Castillo
  
  comision: 3
  
  3-Nombre y Apellido: Francisco Valentin Schwab
  
  comision: 3
  
  4-Nombre y Apellido: Tobias Almiron
  
  comision: 3.
  
  El trabajo practico consiste en crear un sitio web de una institucion de una ONG ficticia, en este sitio se desarrollara o crear un nombre, la misión y los programas de esta organización.
  
  datos de la ONG:
  
  Nombre:TECNO-ACCIÓN:Organización Nacional De Tecnología  
  misión: A confirmar
  
  programas: 
  
  1-<strong>Conectando Futuro</strong>
  
  2-<strong>Capacitación Digital</strong>
  
  3-<strong>Puentes Tecnológicos</strong>

  <h2> Navegacion en el readme : </h2>
  <nav>
    <ul>
        <li><a href="#etapa1">etapa 1 del trabajo</a></li>
        <li><a href="#etapa2">etapa 2 del trabajo</a></li>
        <li><a href="#etapa3">etapa 3 del trabajo</a></li>
        <li><a href="#distribucion">distribucion  del trabajo etapa 2</a></li>
        <li><a href="#distribucionetapa3">distribucion  del trabajo etapa 3</a></li>
  </nav>
   <h2 id = "etapa1"> Etapa 1: Estructura HTML</h2>

  Pagina del sitio:
  
  *index.html: <strong> Axel David Soto</strong> .caracteristicas: pagina de inicio donde se va presentar a la ONG, su misión y un resumen  visual de sus programas o area de trabajos
  
  *nosotros.html: <strong>Francisco Valentin Schwab</strong>.caracteristicas: esto se va a encargar de contar la historia de la organización, sus  valores y equipo.
  
  *programas.html: <strong>Matheo Nehuen Castillo</strong>.caracteristicas: esto se va encargar de dar información sobre de los programas de la ONG  y para quien va dirigido.
  
  *contacto.html: <strong>Tobias Almiron</strong>. caracteristicas: esto va a dar todo lo que tenga que ver con los contactos de la ONG.

  <em>Este sitio ira creciendo conforme al avance de la materia, en la primera parte es:
  1. en el primer commit obligatorio que es en la clase 4 se haran un index.html + las paginas secundarias con HTML  semántico completo. (Estructura HTML).
  2. en el segundo commit obligatorio empiza la etapa de estilos CSS en la clase 6 y aca se implementara hojas de estilos vinculadas, Layaout, colores y tipografía aplicados.
  3. en el tercer commit obligatorio empieza la etapa framework CSS es en la clase 10 se implementara Grilla y componentes de bootstrap integrados.
  4. ultimo coomit obligatorio etapa de javaScript es implementar al menos una una interacción dinamica funcionando en el sitio.</em>

<h2 id = "etapa2"> <strong>Etapa 2:</strong> diseño de la pagina TECNO-ACCIÓN</h2>
<br>
En esta etapa se empieza a agregar el diseño de la pagina creada, se va a agregar un estilo CSS externo, el objetivo es separar el contenido de la presentación.

<h3><strong>Que no se debe hacer :</strong></h3>

1-No se pide layaout con columnas, Fiexbox ni gird-se lo deja para la parte 3

2-No se pide diseño responsivo- eso viene en la clase 10 de bootstrap

3-No se pide que el sitio sea visualmente impresionante- se pide que el CSS este bien escrito y organizado.


<br>

<h3><strong>Requisitos tecnicos :</strong></h3>

tipografia:

1-Usar al menos una fuente de google Fronts Vincularla dese el head de cada HTML antes del link al CSS.

2-Aplicar la fuente elegida al body como fuente principal del diseño.

3-definir un tamaño de fuente base para el body(16px o 1rem).

4-aplicar estilos distintos a los headings: almenos tamaño y color diferenciado entre h1,h2 y h3.

5- apicar un line-height al body para mejorar la legibilidad(entre 1.5 y 1.8).


<br>

<h3><strong>Requisitos colores :</strong></h3>

1-definir una paleta de al menos 3 colores para la ONG (fondo, texto principal,color de acento).

2-aplicar color de fondo al body.

3-aplicar color de fondo diferenciado al header y footer.

4-Los colores de texto deben tener suficiente contraste con el fondo-verificar https://webaim.org/resources/contrastchecker/.

5-usar variables CSS(--variable:valor) para definir los colores de la paleta y reutilizarlos en todo el archivo.


<h3><strong>Espaciado y box model :</strong></h3>


1- Aplicar padding y margin a los elementos principales: header,main,footer,secciones, y parafos.

2-el contenido del sitio no debe estar pegado a los bordes del viewport.Usar max-width y margin: auto en el contenedor principal para 
centrar el contenido.

3-Aplicar espaciado entre los items del nav.

4-Usar box-sizing: border-box en el selector universal(*) al inicio del archivo.


<h3><strong>selectores:</strong></h3>

1- Al menos 3 tipos de selectores distintos: de elementos(p,h1), de clase(clase), de id(#id) y/o descendiente (nav a).

2-Estilizar los enlaces a del nav quitar el subrayado por defecto y aplicar color consistente con la paleta.

3-Estilizar el estado :hover de los enlaces del nav.

4-Estilizar la tabla si el sitio la tiene: bordes, fondos de thead, alternancia de color en fila del tbody.

5-Estilizar el formulario si el sitio lo tiene: inputs y textarea con borde, padding y ancho coherente.


<h3 id = "distribucion"><strong>Distribución del Trabajo</strong></h3>


1-integrante: <strong>Francisco Valentin Schwab</strong> se encarga de Variables CSS, reset, tipografia global y estilos al body.

2-integrante: <strong>Axel David Soto (axeldavid94)</strong> se encarga de el header, navegacion(incluyendo el :hover) y footer.

3-integrante: <strong>Matheo Nehuen Castillo
  </strong> se encarga de las secciones de contenido(section,article,headings,párrafos).

4-integrante: <strong>Tobias Almiron</strong> se encarga de las tablas, formularios y estilo de imagenes.

<li><a href="#inicio">volver al inico</a></li>
<h2 id = "etapa3">Etapa 3: CSS avanzado y Bootstrap</h2>

En esta etapa se aplicara CSS mas avanzado y el bootstrap  a la pagina que venimos haciendo, el objetivo es el sitio funcione bien en cualquien dispositivo y que el CSS este bien avanzado con la combinación del conocimiento del CSS aprendido hasta ahora y bootstrap.

# Etapa 3 : requisitos y distribución de trabajo. Parte A : CSS propio avanzado
<br>

<h3><strong>layouts con flexbox:</strong></h3>
<br>

1-El menú de navegación (nav) usa display:flex para mostrarse horizontalmente.
<br>

2-Al menos una sección del sitio tiene cards o ítems en grilla usando display:flex con
flex-wrap:wrap.
<br>

3-Se usa gap para el espacio entre elementos flex en lugar de márgenes manuales.
<br>

4-Los elementos flex tienen un flex: 1 1 Xpx para comportarse de forma responsiva.
<br>

<h3><strong>Posicionamiento:
</strong></h3>
<br>

1-Al menos un elemento usa position distinto de static (relative, absolute, fixed o sticky).

<br>

2-Si el sitio tiene un hero o banner, el texto superpuesto usa position:absolute dentro de un
contenedor position:relative.

<br>

3-Si hay badges, etiquetas o íconos sobre imágenes, usan position:absolute correctamente
<br>

4-El header puede ser sticky (position:sticky, top:0) para quedarse visible al hacer scroll.
<br>

<h3><strong>Organización del CSS:
</strong></h3>
<br>

1-El archivo estilos.css tiene comentarios que separan claramente las secciones nuevas (/*
Flexbox */, /* Posicionamiento */, /* Bootstrap - personalizaciones */, etc.).

<br>

2-No se repiten reglas que ya estaban en la Etapa 2 — se amplía el archivo, no se reescribe.

<br>

3-No hay estilos inline en el HTML. Todo el CSS propio sigue en estilos.css.

<br>

# <strong>Parte b : bootstrap</strong>
<br>

<h3><strong>navBaar responsiva:</strong></h3>
<br>

1-El header usa el componente navbar de Bootstrap: navbar, navbar-expand-lg (o md),
navbar-dark/light y el color de fondo correspondiente.
<br>

2-En pantallas chicas (mobile) el menú colapsa en un botón hamburguesa (navbar-toggler) que
funciona correctamente.
<br>

3-El logo o nombre de la ONG está en un navbar-brand.
<br>

4-Los links del menú usan las clases nav-item y nav-link de Bootstrap.
<br>

<h3><strong>Grilla de contenido:
</strong></h3>
<br>

1-Al menos una sección del sitio usa la grilla de Bootstrap: container > row > col-*.
<br>

2-Las columnas tienen comportamiento responsivo: por ejemplo col-12 col-md-6 col-lg-4.
<br>

3-Se usa el sistema de gutter (g-*) para el espacio entre columnas en lugar de márgenes
manuales
<br>

<h3><strong>Componentes Bootstrap:</strong>
<br></h3>

1-Al menos dos componentes de Bootstrap están integrados al sitio: Card, Badge, Button,
Alert, Accordion, Carousel, o cualquier otro que tenga sentido para el contenido.
<br>

2-Las Cards de Bootstrap (si se usan) tienen h-100 para igualar alturas dentro del mismo row
<br>

3-Los botones usan las clases btn de Bootstrap (btn-primary, btn-outline-*, etc.).
<br>

<h3><strong>CSS propio sobre Bootstrap :</strong></h3>
<br>

1-El archivo estilos.css tiene al menos una sección de personalizaciones sobre Bootstrap
(colores, tipografía, hover, transiciones).
<br>

2-El CSS propio va después del CDN de Bootstrap en el head para poder sobreescribir sus
estilos cuando sea necesario.
<br>

3-Las variables CSS de la paleta de la ONG (definidas en la Etapa 2) se siguen usando para
personalizar Bootstrap.
<br>

<h3 id="distribucionetapa3"><strong>distribución del trabajo :</strong></h3>
<br>

1-integrante 1 : <strong>Axel David Soto</strong> se encarga del Navbar de Bootstrap: componente completo con hamburguesa, links y
navbar-brand.
<br>

2-integrante 2 : <strong>a confirmar</strong> se encarga de la Grilla de Bootstrap en al menos una sección: container, row, col-*
responsivos.
<br>

3-integrante 3 : <strong>a confirmar</strong> se encarga del Flexbox en el CSS propio: cards o ítems de sección con display:flex
<br>

2-integrante 4 : <strong>a confirmar</strong> se encarga de Posicionamiento y personalización Bootstrap: position en algún
elemento + estilos propios sobre Bootstrap.

<nav>
    <ul>
        <li><a href="#etapa1">etapa 1 del trabajo</a></li>
        <li><a href="#etapa2">etapa 2 del trabajo</a></li>
        <li><a href="#etapa3">etapa 3 del trabajo</a></li>
        <li><a href="#inicio">volver al inicio</a></li>
        <li><a href="#distribucion">distribucion  del trabajo etapa 2</a></li>
        <li><a href="#distribucionetapa3">distribucion  del trabajo etapa3</a></li>
  </nav>






