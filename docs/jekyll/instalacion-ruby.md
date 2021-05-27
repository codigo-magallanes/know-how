# Ruby

__Ruby__ es un lenguaje de programación interpretado en una sola pasada y es distribuido bajo una licencia de software libre.
Mi interés en __Ruby__ por el momento se limita a crear el entorno de trabajo con plantillas de [**Jekyll**](./README.md).

## Instalación de Ruby

_Debian_ y _Ubuntu_ cuentan en sus repositorios con __Ruby__, pero instala una versión bastante anticuada que entre otras cosas es incompatible con el uso que hace __Jekyll__ de los archivos _sass_.
Debido a esta limitación la instalación va aser un poco más tediosa de lo que debería.

Para la instalación de __Ruby__ me he basado en las indicaciones de [cloudwafer.com](https://cloudwafer.com/blog/installing-ruby-on-debian-9/).

La instalación se hace mediante un administrador de versiones para __Ruby__ llamado __Rbenv__.
Primero actualizamos el sistema y luego pasamos a instalar las dependencias:

``` sh
sudo apt-get update && sudo apt-get upgrade

sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev
```

Una vez las dependencias se han instalado descargamos el programa con:

``` sh
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
```

Y antes de instalarlo necesitamos añadir algunas líneas al archivo **~/.bashrc**:

``` sh
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
```

Ahora ya sí podemos instalar el programa:

``` sh
## para conocer la última versión estable existente podemos ejecutar:
rbenv install -l

# y luego instalar la versión más actualizada:
rbenv install 2.7.2
# este sgundo comando no estoy seguro de que sea necesario...
rbenv global 2.7.2
```

El resultado a sido:

```sh
$ ruby -v
ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]
```

## Recursos consultados

 - [Instalación en Debian 9](https://cloudwafer.com/blog/installing-ruby-on-debian-9/)

## Continúa con Jekyll

 [Instala Jekyll](./instalacion-jekyll.md)
