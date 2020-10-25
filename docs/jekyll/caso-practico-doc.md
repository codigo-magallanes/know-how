# Documentación de un proyecto: Caso práctico con GitHub pages y plantilla de Jekyll

Este caso práctico pretende ser una pequeña guía de como crear un blog de la forma más sencilla utilizando los temas que __Jekyll__ y __GitHub__ ponen a disposición de todo el mundo.

## Cuenta en GitHub

Si no tienes usuario en __GitHub__ entra en su [web](https://github.com) y crea una.
Es totalmente gratuita y te va a permitir tener una página web en poco tiempo.
Introduce tu correo electrónico, selecciona un nombre de usuario y añade una contraseña.

Ahora solo tienes que revisar la cuenta de correo electrónico que has introducido para tu usuario y confirmarla para poder acceder a tu usuario.

## Crea un nuevo proyecto en GitHub

Después de confirmar el correo entra en tu página de _GitHub_ y selecciona la pestaña _Repositories_ y ahí pincha sobre el botón verde __New__.

Ahora necesitas darle un nombre al repositorio. Para evitar algunos pasos engrorrosos selecciona la opción de __*Add a README file*__ antes de pinchar en el botón __Create repository__.

Ya tienes un proyecto con un archivo que contiene el nombre del repositorio y la descripción, si es que la introduciste al crearlo.

Ahora haz click sobre __Setttings__ y baja hasta la sección de _GitHub Pages_.
Aquí pincha en _Choose a theme_ y selecciona una de las plantillas que te ofrece.
En mi caso he seleccionado __Minimal__. Pincha en el botón __Select theme__ y te llevará de nuevo a la página de tu proyecto, pero en modo edición en un archivo nuevo que se ha creado con el nombre de _index.md_.
De momento no es necesario cambiar nada.
Baja al final de la página y hac click en __Commit changes__.

## Presonalizar el blog

En este punto ya tienes una página visible en __https://<USUARIO GITHUB>.github.io/<REPOSITORIO>/.

Todavía no es un _blog_, pero ya es algo.

Al abrir el proyecto vas a entrar en la _rama por defecto_ que seguramente será _main_. Para modificar la página debes pinchar en el botón __main__ a la iquierda y seleccionar la rama __gh-pages__.

Aquí encontrarás 2 archivos:

 1. **_config.yml**: donde se guarda la configuración del *blog*

 1. **index.md**: que es la página por defecto que crea _GitHub

### Archivo de configuración

Vamos a abrir el archivo de configuración del _blog_ pinchando sobre él y en la siguiente página hacemos 'click' en el icono de lápiz que aparece a la derecha para editarlo.

De momento solo tiene una línea que es: `theme: jekyll-theme-minimal`

Vamos a añadir la configuración. En mi caso quedará así:

```
theme: jekyll-theme-minimal

title: Tanit
description: Diosa Cartaginesa venerada por muchos pueblos ribereños del Mediterráneo, como la propia ciudad de Cartago e Ibiza.
  
logo: logo.jpg

author:
  name: Fátima Garay
  email: fathygaray13@gmail.com
```

Los cambios suelen tardar un poco en aparecer en la web.
Incluso, a menudo, es necesario actualizar la página para ver el resultado.

### Página de entada al blog

La página principal necesita incorporar el código necesario para mostrar los _posts_ que vayas escribiendo en tu _blog_.

> No consigo escribir el código del archivo _index.md_ sin que sea interpretado.
> Por lo tanto voy a crear una versión simple del archivo en el repositorio para ver el código.
> [Pincha aquí para verla](./caso-practico-tanit-index.md)

### Logo del blog

Subir el logo a la página es bastante sencillo también.
Debemos tener el logo localizado en nuestro ordenador y asegurarnos de que el nombre del archivo coincide con el nombre que le hemos dato en **_config.yml**.

Desde la raiz del repositorio _gh-pages_ pinchamos primero en __Add file__ y luego en __Upload files__.
Aquí podemos elegir entre arrastrar la imagen a la pantalla de _GitHub_ o pinchar el enlace que aparece en el centro de la página y buscarlo en nuestro ordenador.

### Primer post

Ya tenemos el _blog_ configurado.
A partir de ahora solo falta darle contenido.

Los _posts_ deben estar en una carpeta ya determinada por la plantilla de __Jekyll__.
Esta carpeta se debe llamar **_posts/** y debe estar en el directorio raiz del repositorio.
Además, por convenio se llama a los archivos con la fecha de publicación y el nombre del post, todo separado con guiones:

p. ej: `2020-10-22-mi-primer-post.md`

De nuevo, desde la raiz del repositorio (en la rama gh-pages), volvemos a pinchar en __Add file__.
Esta vez selecciona la opción de __Create new file__.
Se abrirá una nueva página con el cursor ya preparado en un campo de formulario donde tenemos que escribir el nombre del archivo.

Escribimos:

`_posts/2020-10-22-mi-primer-post.md`

Y abajo tenemos un campo donde escribir en contenido del post:

```markdown

---
layout: post
---


Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis consectetur nec massa vitae euismod. Ut commodo magna neque, ac lacinia augue ornare sed.
Nunc mi risus, blandit quis finibus congue, feugiat eget risus.
Donec vulputate dolor ac nisl euismod lacinia.
Duis ultrices diam nec urna lacinia venenatis.

Donec consequat orci in justo porta tempus. Sed ornare nunc vel posuere tristique. Praesent vitae rhoncus lectus, sed tristique nisl.
Vivamus vel nunc ornare, volutpat est vel, scelerisque nunc. Morbi feugiat ante eget risus eleifend tincidunt. Duis leo metus, laoreet pretium est iaculis, placerat dapibus felis. Curabitur quis tempus turpis, ac blandit sem. Nulla nec tincidunt libero. Quisque scelerisque mauris et dui viverra, id ultrices quam porttitor. Pellentesque non suscipit orci.
```

La plantilla que usemos es la que determina el nombre del layout. En el caso de __minimal__ es _post_.

### Agregar más contenido

Añadir más contenido ahora resulta muy sencillo.
Podemos escribir el post en nuestro ordenador y luego subirlo a la rama _gh-pages_ dentro del directorio *_post*

También podemos entrar al repositorio y pinchar en __Add file__ y crearlo directamente desde su formulario.

## Algunos apuntes

 - Método sencillo de crear nuestrob log
 - El código se encuentra exclusivamente en la red
 - Cuenta con la ventaja de los _commits_ como respaldo del contenido y código
 - Resulta fácil modificar los temas para adaptarlos a nuestros gustos