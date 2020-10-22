# Jekyll: Subir proyecto a GitHub pages

## Crear repositorio local

Desde el sitio de GitHub creo el repositorio y la rama _gh-pages_

Desde dentro del directorio del proyecto creo el repositorio, cambio de _rama_ y por último añado el repositorio de GitHub:

``` sh
git init
git checkout --orphan gh-pages
git remote add origin <DATOS DEL REPOSITORIO>
```

Ahora puedo actualizar el proyecto con:

``` sh
git pull
git fetch origin
git merge origin/gh-pages
git push origin gh-pages
```

Para subir los archivos de mi repositorio local:

``` sh
git add .
git commit -m "first upload"
git push orign gh-pages
```
