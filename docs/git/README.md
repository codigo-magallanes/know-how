# Git

## _Índice

{% for git in site.git %}
  <div class="git">
    <h2><a href="{{ git.url }}">{{ git.title }}</a></h2>
  </div>
{% endfor %}

## Nuevo Proyecto

Se puede crear un nuevo proyecto de diferentes maneras con diferentes herramientas:

- [Desde la terminal (Debian/Ubuntu)](./git-nuevo-proyecto.md),
- [From an IDE (VS Code example)](./git-vscode-manage-project.md)
- [From the web (GitHub)](./git-github-manage-project.md)

Administrar cambios

 - [Administrar un repositorio desde la consola (Linux)](./git-actualizaciones-repo.md)

Otras funciones:

 - [Fork a repository](./git-github-vscode-fork-repository.md)
 - [Manage a forked repo](./git-github-vscode-manage-fork-repo.md)