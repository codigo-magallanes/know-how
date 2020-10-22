# Jekyll: Instalación

Partimos de un sistema con __Ruby__ instalado. Si no es así antes de continuar [instala Ruby](./instalacion-ruby.md).

Una vez tenemos __Ruby__ instalado en nuestro equipo podemos instalar __jekyll__ junto con __bundler__.

```sh
gem install jekyll bundler
```

El proceso puede durar un poco...

## Nuevo proyecto

Creamos una carpeta nueva para nuestro proyecto. Desde dentro de la carpeta ejecutamos:

```sh
jekyll new .

# o desde el directorio padre creando el directorio del proyecto:
jekyll new <PROYECTO>
```

Esto nos instala un proyecto por defecto basado en el tema 'minima'.

La mayor parte de la estructura de archivos queda alojada dentro del directorio 'gem' que creó __Ruby__ durante su instalación en la carpeta raiz de usuario. En el directorio de nuestro proyecto crea los siguientes archivos y directorios:

 + 404.html
 + about.markdown
 + _config.yml
 + Gemfile
 + Gemfile.lock
 + index.markdown
 + _posts/

A partir de aquí ya podemos crear nuestro blog únicamente editando y configurando el archivo *_config.yml*. Si queremos hacer cambios en el código que genera los archivos de nuestro sitio tenemos que copiar el archivo a modificar en nuestro directorio y hacer los cambios. De esta forma, si el programa encuentra el archivo en nuestro directorio ya no carga el archivo que hay en la plantilla dentro de __gem/__.

## Bundler

[**Bundler**](https://bundler.io/) administra proyectos de __Ruby__ eligiendo que versiones de que paquetes instala para evitar problemas de compatibilidad entre ellos.

Con __bundler__ podemos crear el proyecto sin ninguna estructura ni archivos, solo los archivos de proyecto _Gemfile_ y Gemfile.lock_.

Creamos el archivo _Gemfile_

``` sh
mkdir <PROYECTO>
cd <PROYECTO>
nano Gemfile
```

Añadimos todo lo que queremos instalar para este proyecto, p. ej.:

``` Gemfile
source "https://rubygems.org"

gem "jekyll"
gem "minima"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "github-pages"
end
```

Ahora ejecutamos;

``` sh
bundle install
```
Si ocurre alguna colisión en las versiones de _las gemas_ instaladas, para arreglarlo podemos ejecutar:

``` sh
bundle update
```

Este comando reinstalará todas las aplicaciones atendiendo a su compatibilidad entre diferentes versiones de los mismos. Puede ser una tarea bastante lenta.

Si queremos ver algo tenemos que crear los archivos ```_config.yml``` y ```index.md``` con un mínimo de contenido.

## Recursos comsultados

 + [Instala jekyll en diferentes sistemas operativos](https://jekyllrb.com/docs/installation/)
 + [Bundler](https://bundler.io/)

 ## PENDIENTE

 Realizar la misma operación pero sin el plugin _github-pages_ y comprobar si se puede subir al servidor de __GitHub__.