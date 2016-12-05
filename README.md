
# A Basic Long-form Framework

[A demo of this framework can be found here.](https://haddersbadders.github.io/basic-longform-template/)

[Here's the CSS almanac if you need it](https://css-tricks.com/almanac/properties/)

This template is in the style of a long-form page. The long-form style strips out web page furniture such as header, nav, sidebar etc and puts the focus on content. The style features full width images, large type and headers.

## Structure

The structure is really quite simple: Content is broken down into **sections** using the HTML tag ```<section>```.

There are three types of ```<section>```that are differentiated using three different class names:

- A content section using the class name **content**
- Full width and height section with background image that uses the class name **image_bgr**
- Full width and height section with background colour that uses the class name **color_bg**

This document contains all the snippets you need with explanations.

### Big heading sections with full width/height background images

The image_bg class sets up the dimensions of the element.

```
<section class="image_bg">

</section>
```

Add an additional class name, in this case "dogs" so that you can define a background image in CSS:

```
<section class="dogs image_bg">

</section>
```
To accompany this, add a new CSS style in style.css:

```
.dogs {
  background: url(../img/dog_pic.jpg);
  background-size: cover;
  background-attachment: fixed;
}
```

You can then put content inside this section, for example a header with headings:
```
<section class="dogs image_bg">
  <header>
    <h1>Some content</h1>
  </header>
</section>
```

But it doesn't need to be headings, it could be blockquote, or anything. This may require additional CSS.

###Content sections

A content section gives you a column to put your text and any other media.

```
<section class="content">
  //Your content
</section>
```

This is straight forward.

###Big heading sections with full width/height and background colour

As well as headers with background images, you can have just a colour.

```
<section class="color_bg">

</section>
```
The "color_bg" class sets up the section's dimensions. The addition of your own class e.g. "bg_green" allows you to set it's colour:
```
<section class="color_bg bg_green">

</section>
```
And in CSS, create a new style:
```
.bg_green {
  background: #bada55;
}
```
Add the header and h1 as with the image_bg.



###Image carousel
[Slick Carousel](http://kenwheeler.github.io/slick/) has been integrated. Simply create some HTML like:

```
<div class="carousel">
  <div> <img src="img/Slider/IMG_2712.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2927.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2959.JPG" alt="" /> </div>
</div>

```
Noting the class name given e.g. "carousel". Then initialise the carousel in index.js.

```
$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });
});

```

The above initialises a carousel. If you want another one, just make a new div with a different class name e.g. 

```
<div class="carousel_two">
  <div>... etc
```
Then initialise that one too:

```
$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });
  
  $('.carousel_two').slick({
    dots: true
  });
});

```


###Wow animations
[Animate.css](http://daneden.github.io/animate.css/) and [Wow.js](http://mynameismatthieu.com/WOW/) are integrated.

To initialise an animation when scrolled to, add the class "wow" and any of the classes listed on animate.css website to the element:
```
<header class="wow fadeInUpBig">

</header>
```
