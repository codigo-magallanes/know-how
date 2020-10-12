# CSS: Propiedades

## object-fit

 Determina el comporamiento de un elemento con respecto a su contenido

### Recursos

[CSS Tricks](https://css-tricks.com/almanac/properties/o/object-fit/)
[CSS Tricks](https://css-tricks.com/on-object-fit-and-object-position/)

## object-position

Se suele emplear junto a _object-fit_. Determina la posición de un elemento con respecto a su contenedor.

``` css
img {
  object-fit: none;
  object-position: 50% 50%; /* default value: image is centered*/
}
```

En este ejemplo coloca la imagen en el centro de su contenedor.

### Recursos

[CSS Tricks](https://css-tricks.com/almanac/properties/o/object-position/)
[CSS Tricks](https://css-tricks.com/on-object-fit-and-object-position/)

## overflow

Determina lo que sucede si el contenido de un elemento es mayor al contenedor.
Se puede utilizar para ocultar la _barra de desplazamiento_.

### Valores permitidos:
visible	The overflow is not clipped. It renders outside the element's box. This is default	
hidden	The overflow is clipped, and the rest of the content will be invisible	
scroll	The overflow is clipped, but a scroll-bar is added to see the rest of the content	
auto	If overflow is clipped, a scroll-bar should be added to see the rest of the content	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

### Ejemplos

[Código con ejemplos](https://www.w3schools.com/cssref/playit.asp?filename=playcss_overflow&preval=initial)
[Ocultar barra de desplazamiento](https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp)

## vertical-align

 Determina la posición vertical del elemento. Puede tomar los siguientes valores:

``` css
Value	Description	Play it
baseline	The element is aligned with the baseline of the parent. This is default	
length	Raises or lower an element by the specified length. Negative values are allowed. Read about length units	
%	Raises or lower an element in a percent of the "line-height" property. Negative values are allowed	
sub	The element is aligned with the subscript baseline of the parent	
super	The element is aligned with the superscript baseline of the parent	
top	The element is aligned with the top of the tallest element on the line	
text-top	The element is aligned with the top of the parent element's font	
middle	The element is placed in the middle of the parent element	
bottom	The element is aligned with the lowest element on the line	
text-bottom	The element is aligned with the bottom of the parent element's font	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit
```

### Recursos

[vertical-align w3schools](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp)