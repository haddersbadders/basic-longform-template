
# A Basic Longform template

[A demo of this framework can be found here.](https://haddersbadders.github.io/basic-longform-template/)

This template is in the style of a longform page. The longform style strips out web page furniture such as masthead, navigation, sidebar etc to focus on the content. 

Features of the template include:

- full width/height section headings with static background images
- clear typography
- scroll animations

## The files

The files you need to edit are:

- **index.html** this is ht eweb page itself
- css/**style.css** which is where the CSS styles go
- js/**index.js** is where the bits of JavaScript go
- **img** is the folder where you put your images


## Structure

The structure of the template is simple. Content is separated into **sections** using the HTML tag ```<section>```.

There are three types of ```<section>```that are visually different. These are differentiated using the class names:

- **content** ```<section class="content">``` gives you a column to add content like paragraphs images etc 
- **image_bg** ```<section class="image_bg">``` gives a full width/height section with background image* 
- **color_bg** ```<section class="color_bg">``` gives a full width/height section with a background colour* 

*Use a separate class names to specify image path and colour code.


### Big heading sections with full width/height background images

Adding the **image_bg** class to a section makes it go full width/height.

```
<section class="image_bg">

</section>
```

To specify a background image, an additional class name is required. I want a picture of a dogs. so I'm going to add the class name "dogs":

```
<section class="dogs image_bg">

</section>
```
This means I can add a new style in style.css that points to my image of dogs:

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

A content section gives you a column for you to put text and any other media in. 

```
<section class="content">
  //Your content
</section>
```

This is straight forward - just give a section the class name **content**.

###Big heading sections with full width/height and background colour

As well as headers with background images, you can have just a colour.

```
<section class="color_bg">

</section>
```
The **color_bg** class sets up the section's dimensions. The addition of your own class e.g. "bg_green" allows you to set it's colour:
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


### Image carousel
[Slick Carousel](http://kenwheeler.github.io/slick/) has been integrated. Simply create some HTML like:

```
<div class="carousel">
  <div> <img src="img/Slider/IMG_2712.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2927.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2959.JPG" alt="" /> </div>
</div>

```
Noting the class name given e.g. **carousel**. Then initialise the carousel in index.js.

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
Then initialise that one in index.js too:

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


### Wow animations
[Animate.css](http://daneden.github.io/animate.css/) and [Wow.js](http://mynameismatthieu.com/WOW/) are integrated.

This allows you to animate any element when it is scrolled to.

To initialise an animation when scrolled to, add the class "wow" and any of the classes listed on animate.css website to the element:
```
<header class="wow fadeInUpBig">

</header>
```
