# Jekyll: Página personal en GitHub con Jekyll (tema remoto)

Resulta bastante enrevesado poder utilizar un tema remoto para nuestra página de github.
Y no es porque el proceso sea demasiado complicado, sino que no existe ninguna guía decente (al menos yo no la he encontrado), que un _novato_ en __Ruby__ y __jekyll__ pueda seguir sin problemas. No la había hasta ahora...

## Crea un nuevo proyecto en GitHub

 Para mi lo más práctico en ir a [GitHub](https://github.com) y crear un repositorio nuevo.
 Le pido que lo abra con un nuevo archivo _.gitignore_ para __jekyll__.

 Una vez creado voy a _Settings_ y creo una web para el repositorio. Pincho en _Theme Chooser_ y selecciono cualquiera de las plantillas existentes. Esto me crea un archivo _index.md_ con algo de contenido estándard y otro *_config.yml* con la selección de tema que he hecho. Finalizo el commit y ya tengo mi página funcionando en la rama _gh-pages_.

## Selecciona el tema remoto

 Ahora puedo editar el archivo *_config.yml*, elimino el thema que había seleccionado y escribo la referencia al tema remoto que quiero utilizar.

 ``` sh
#theme: jekyll-theme-time-machine
remote_theme: "mmistakes/minimal-mistakes@4.20.2"
plugins:
  - jekyll-feed
  - jekyll-include-cache
 ```

En el caso del _tema_ que yo he seleccionado necesito importar dos _plugins_ para que funcione de manera correcta.

 Para terminar, escribo un comentario en el commit del tipo: _remote_theme_.
 Y lo actualizo.

## Coprueba el proceso

 Ahora puedo comprobar que todo está bien. Voy a la página principal del repositorio. Busco por el enlace (abajo derecha) _Environments_ y pincho en __github-pages__.
 En esta página compruebo que se ha actualizado el nuevo _deployment_ y pincho en __View deployment__ para ver si todo va bien,

 Puede que sea necesario actualizar la página hasta que se cargue bien.
 En mi caso todo está bien. Veo el archivo creado por GitHub al principio, pero con la plantilla remota que he selecconado.

## Copia el proyecto en el PC

 Para poder trabajar de manera local con el repositorio voy a clonarlo en mi ordenador.
 Desde la página del repositorio selecciono __Code__ y copio el contenido que aparece al pinchar en __SSH__.

 Desde la terminal, en el directorio donde quiero guardar el repositorio ejecuto el comando:

 ``` sh
 git clone <PEGA EL TEXTO COPIADO DEL REPOSITORIO>
 ```

## Configura git

 Antes de nada tengo que cambiar de _rama del repositorio_:

 ``` sh
 git checkout gh-pages

 ```

En el caso de no tener guardados como datos globales los datos de usuario de _GitHub_ los añado y luego puedo comprobar que todo está bien:

``` sh
git config user.name <NOMBRE USUARIO>
git config user.email <CORREO>
git config user.password <CONTRASEÑA>
git config --list
```


 ## Nuevo projecto con _Jekyll_ y _Ruby_

Si no tengo __Ruby__ o __Jekyll__ instalados puedo seguir las indicaciones en [jekyllrg.com](https://jekyllrb.com/docs/installation/ubuntu/)

Luego nos aseguramos de tener instalados los plugins que ya nos pedía la plantilla:

``` sh
gem install jekyll-feed jekyll-include-cache
```

Todavía desde la terminal y dentro del directorio del proyecto crea un nuevo archivo para la configuración de __Ruby__ y __Jekyll__.

``` sh
nano Gemfile
```

mvy añade lo siguiente al archivo:

```
source "https://rubygems.org"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-include-cache"
end
```

Y cargamos el el proyecto con:

``` sh
bundle install
bundle update
```

## Añade el plugin de GitHub para gh-pages

Ahora solo falta añadir el plugin de _gh-pages_:

``` sh
nano Gemfile
```

Y añadir el plugin ```- github-pages```

Por último instalamos el plugin y actualizamos el proyecto

``` sh
gem install github-pages
bundle update
```

Esto instalará _github-pages_ y _jekyll_ con todas las dependencias

## Arancar el proyecto

Solo falta comprobar si todo va bien:

``` sh
bundle exec jekyll serve
```

## Últimos detalles

 Al cambiar a la rama _gh-pages_, al principio, el archivo _.gitignore_ quedó en la rama _main_
 Por lo tanto toca copiarlo a nuestro proyecto con el mismo contenido:

 ```nano .gitignore```

 ``` sh
 _site/
 .sass-cache/
 .jekyll-cache/
 .jekyll-metadata
 ```

 Ahora es cuando abro el proyecto con _VS Code_, compruebo que estoy en la rama _gh-pages_ y que todo el contenido está bien y sincronizo el repositorio con _GitHub_.

 Ahora puedo acceder al proyecto local en: [http://127.0.0.1:4000] y también en [http://github.com]

## Fin del proyecto

Esto no se acaba hasta que se escriben algunos _posts_ y se añaden al directorio *_posts*.
Eso si, hay que asegurarse que sigan unas pautas mínimas de compatibilidad con el sistema que usa la plantilla.
En mi caso, por ejemplo, debo dirigirlos a la plantilla ```posts```.