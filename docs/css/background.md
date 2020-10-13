## CSS: Background

### Background

background admite varias opcines de configuración del fondo de un elemento:

```
background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
```

Estas opciones con:

``` css
Value	Description	CSS
background-color	Specifies the background color to be used	1
background-image	Specifies ONE or MORE background images to be used	1
background-position	Specifies the position of the background images	1
background-size	Specifies the size of the background images	3
background-repeat	Specifies how to repeat the background images	1
background-origin	Specifies the positioning area of the background images	3
background-clip	Specifies the painting area of the background images	3
background-attachment	Specifies whether the background images are fixed or scrolls with the rest of the page	1
initial	Sets this property to its default value. Read about initial	3
inherit	Inherits this property from its parent element. Read about inherit	2ss

```

#### background-repeat

[background-repeat](https://www.w3schools.com/cssref/pr_background-repeat.asp)

#### background-size

Valores aceptados:

``` css
Value	Description	Play it
auto	Default value. The background image is displayed in its original size	
length	Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto". Read about length units	
percentage	Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto"	
cover	Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges	
contain	Resize the background image to make sure the image is fully visible	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit
```

### Recursos

 + [background-size Mozilla developer](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)
 + [background-size w3schools](https://www.w3schools.com/cssref/css3_pr_background-size.asp)
 + [background w3schools](https://www.w3schools.com/cssref/css3_pr_background.asp)
 + [background shorthand](https://www.w3schools.com/css/css_background_shorthand.asp)