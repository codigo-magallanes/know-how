# Readme

Another tutorial that will grow as I work in my projects
It contains code and examples.

## Language

I was hesitant about writing this tutorial in English or Spanish. Finally I decided to do it in English since I understand that if you write code you will understand English, no matter your mother languate.

In any case I will welcome any comments in Spanish as well.

## Categories

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

## Index

- [CSS](./docs/css/)
- [git](./docs/git/)
- [JavaScript](./docs/javascript/)
- [node](./docs/node/)
- [Jekyll](./docs/jekyll/)
+ [Markdown](./docs/markdown/)


## Code examples

 - [Promise.all](./code/promise_all.html)
 - [GitHub theme demo](./index-original.md)

## My projects

 + [projects](./docs/projects/)
 + [Personal web](./docs/projects/joseantoniogonzalezjerez.md)


## Pages

<ol>
  {% for pages in site.pages %}
     <li><a href="{{pages.url}}">{{ pages.title }}</a></li>
    {% endfor %}
</ol>