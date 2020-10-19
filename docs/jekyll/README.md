# Jekyll

Es un paquete o 'gema' de _Ruby_ que permite crear documentación y blogs de forma rápida y más o menos sencilla. Tiene además la ventaja de que cuenta con una interesante integración con las __git-pages__ de _GitHub_.

Debido a las limitaciones que aplica _GitHub_ en el número de actualizaciones de las __git-pages__ se hace casi imprescindible crear un proyecto en nuestro equipo para ir haciendo los tests necesarios para que nuestro _sitio_ tenga el aspecto que queremos.

## Instalación de Ruby

_Debian_ y _Ubuntu_ cuentan en sus repositorios con __Ruby__, pero instala una versión bastante anticuada que entre otras cosas es incompatible con el uso que hace __Jekyll__ de los archivos _sass__.
Debido a esto la instalación es un poco más tediosa de lo que debería.

A mi me ha funcionado seguir las indicaciones de [cloudwafer.com](https://cloudwafer.com/blog/installing-ruby-on-debian-9/).

``` sh
sudo apt-get update && sudo apt-get upgrade

sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev

curl -sL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash -

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

## you can check the available Ruby versions to install with:
rbenv install -l

rbenv install 2.7.0
rbenv global 2.7.0
```

El resultado a sido:

```sh
$ ruby -v
ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]
```

## Instala jekyll

Una vez tenemos _Ruby_ instalado en nuestro equipo podemos instalar __jekyll__ junto con __bundler__.

```sh
gem install jekyll bundler
```
## Nuevo proyecto

Creamos una carpeta nueva para nuestro proyecto. Desde dentro de la carpeta ejecutamos:

```sh
jekyll new .
```

Esto nos instala un proyecto por defecto basado en el tema 'minima'.

La estructura de archivos está dentro del directorio 'gem' que creó __Ruby__ durante su instalación. En el directorio de nuestro proyecto hacemos únicamente los cambios que queremos realizar a _minima_.


## Recursos consultados

 - [Instalación en Debian 9](https://cloudwafer.com/blog/installing-ruby-on-debian-9/)