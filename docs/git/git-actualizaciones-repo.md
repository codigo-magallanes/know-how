## Git: Actualizaciones del repositorio

### Actualizar nuestro repositorio con GitHub

Para actualizar el código en nuestro repositorio local (PC) ejecutamos:

```sh
git pull
```

Si todo está ya actualizado recibimos en consola el mensaje:

``` sh
Already up-to-date.
```
### Comprueba los cambios en el código

Para comprobar que cambios se han hecho en el código se ejecuta:

```sh
git status
```

If changes have been made the ouput will be something like:

```sh
$ git status
On branch main
Your branch is up-to-date with 'origin/main'.
Changes not staged for commit:
(use "git add/rm <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

modified:   docs/git/README.md
modified:   docs/git/git-github-vscode-fork-repository.md
modified:   docs/git/git-manage-project.md
deleted:    docs/git/git-vscode-manage-fork-repo.md

Untracked files:
(use "git add <file>..." to include in what will be committed)

docs/git/git-github-vscode-manage-fork-repo.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Podemos ver que tenemos 3 archivos modificados, uno eliminado y otro nuevo (*Untracked files: doc/git/git-github-vscode-manage-fork-repo.md*)

### Selecciona los archivos para la próxima actualización

Si hemos terminado con las modificaciones podemos ya seleccionar cuales son los archivos modificados que queremos actualizar en nuestro 'repo'. Esto se hace con el comando `git add`.

```sh
$ git add docs/git/README.md
$ git add docs/git/git-github-vscode-fork-repository.md
$ git add docs/git/git-manage-project.md
```

Ahora un _git status_ del proyecto nos mostrará:

```sh
$ git status
On branch main
Your branch is up-to-date with 'origin/main'.
Changes to be committed:
 (use "git reset HEAD <file>..." to unstage)

modified:   docs/git/README.md
modified:   docs/git/git-github-vscode-fork-repository.md
modified:   docs/git/git-manage-project.md

Changes not staged for commit:
 (use "git add/rm <file>..." to update what will be committed)
 (use "git checkout -- <file>..." to discard changes in working directory)

deleted:    docs/git/git-vscode-manage-fork-repo.md

Untracked files:
 (use "git add <file>..." to include in what will be committed)

docs/git/git-github-vscode-manage-fork-repo.md
```

Comprobamos que los archivos seleccionados para el _commit_ son los que realmente queremos actualizar.

Si lo que queremos es pasar todos los cambios hechos en nuestro PC al repositorio podemos seleccionarlos todos con:

```sh
git add .
```

### Empaqueta los cambios para subirlos al repositorio

El siguiente paso es agrupar los archivos para ser subidos al repositorio. Este paso añade también un _comentario_ con información sobre los cambios que aporta esta actualización. También proporciona información a otros colaboradores de los cambios y aportes del nuevo paquete.

Para esto ejecutamos el comando:

```sh
$ git commit -m "nuevo contenido y traducción. @codigo-magallanes, necesita revisión"
// respuesta
[main 58f177d] nuevo contenido y traducción al español de contenido anterior. @codigo-magallanes, necesita revisión
3 files changed, 38 insertions(+), 24 deletions(-)
```

Se ve como _git_ le asigna un **identificador:** _58f177d_, para poder localizarlo para hacer modificaciones o cancelarlo...

Esto sería suficiente para un repositorio local.

### Actualizar un repositorio en GitHub

Después del `git add` y del `git commit` podemos subir los cambios a nuestro _repositorio_ en _GitHub_.

Para comprobar los datos del repositorio podemos ejecutar:

```sh
git remote -v
```

En mi caso, la respuesta es:

```sh $ git remote -v
origin	git@github.com:YoAmo/know-how.git (fetch)
origin	git@github.com:YoAmo/know-how.git (push)
```

Si todo está bien subimos los cambios con:

```sh
git push origin main
```

Siendo _origin_ la referencia al repositorio y _main_ la rama donde se sube.

Este comando nos devuelve la siguiente información:

    ``` sh
    Counting objects: 7, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (7/7), done.
    Writing objects: 100% (7/7), 1.21 KiB | 0 bytes/s, done.
    Total 7 (delta 6), reused 0 (delta 0)
    remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
    To github.com:YoAmo/know-how.git
    84ee068..58f177d  main -> main
    ```

### Eliminar archivos del repositorio en GitHub

 Todavía queda pendiente modificar el archivo que ha sido eliminado en la copia local del repositorio. Esto se podría haber incorporado al anterior _commit_ con un ```git add . ```, pero como aquí estamos para aprender lo haremos ahora con:

 ``` sh
 git rm docs/git/git-vscode-manage-fork-repo.md
 ```

 Ahora está el cambio preparado para el siguiente _commit_.

 ### Añadir un archivo nuevo

  Después de añadir un nuevo archivo a nuestro repositorio local debemos subirlo con un _commit_ para que aparezca en las nuevas versiones de nuestro código. Esto también se podía haber hecho anteriormente si hubiera optado por la opción ```git add . ```, pero lo voy a añadir de manera independiente con:

  ``` sh
  docs/git/git-github-vscode-manage-fork-repo.md
  ```

  ### Finaliza la actualización con una nueva versión de nuestro código o '_commit_'

   Si volvemos a comprobar el estado de nuestro proyecto veremos que aparecen estos últimos dos cambios pendientes de un _commit_:

   ``` sh
   git status
   ```

    La respuesta al _status_ es:

    ``` sh
    On branch main
    Your branch is up-to-date with 'origin/main'.
    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        renamed:    docs/git/git-vscode-manage-fork-repo.md -> docs/git/git-github-vscode-manage-fork-repo.md
    ```

    _git_ ha entendido que en vez de haber creado un nuevo archivo y eliminado otro, lo que hemos hecho es cambiar el nombre de un archivo que ya estaba en el proyecto.

    Lo único que falta es hacer el _commit_ para guardar los cambios en la repo:

    ``` sh
    git commit -m "nombre de archivo modificado"
    git push
    ```

### Recursos utilizados y otros enlaces para profundizar más sobre este contenido

+ [Git commands from Linux Terminal](https://www.unixmen.com/use-git-commands-linux-terminal/)
+ [Earth Data Science: git commands](https://www.earthdatascience.org/courses/intro-to-earth-data-science/git-github/version-control/git-commands/)
