# Índice

Una pequeña guía que va creciendo conforme me voy documentando para mis proyectos.
Pretendo ir incorporando código también con ejemplos.

## Categorías

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p>{{ category_name }}</p>

    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
  </div>
{% endfor %}
</div>

## Indice

- [CSS](./css/)
- [git](./git/)
- [JavaScript](./javascript/)
- [node](./node/)
- [Jekyll](./jekyll/)
+ [Markdown](./markdown/)


## Ejemplos de código

 - [Promise.all](./promise_all.html)
 - [GitHub theme demo](./index-original.md)

## Proyectos

 + [projects](./projects/)
 + [Personal web](./projects/joseantoniogonzalezjerez.md)



## Páginas

<ol>
  {% for pages in site.pages %}
     <li><a href="{{pages.url}}">{{ pages.title }}</a></li>
    {% endfor %}
</ol>