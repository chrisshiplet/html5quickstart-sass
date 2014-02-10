html5quickstart-sass 0.0.1
===============
A minimal SCSS template to start an HTML5 project without the overhead of Bootstrap (and similar frameworks) forked from [html5quickstart](https://github.com/nearengine/html5quickstart).

`index.html` contains a fairly comprehensive set of metadata examples that can be deleted or modified as necessary.

The fluid grid was tested in Chrome, Safari, Firefox, IE9+, iOS, and Android's stock browser. It is intended to be used with a progressively-enhanced mobile-first methodology.

**Internet Explorer note:** Mobile-first design ensures that older versions of Internet Explorer will show the mobile styles, since they don't support media queries. If you need to style older versions of Internet Explorer more extensively, you can create selectors that start with .oldie, which targets IE8 and below.

##Overview
Includes the following features:

**SCSS**
- Master CSS Reset
- Semantic Fluid Grid Mixin with micro clearfix
- Utility mixins for accessible hiding & CSS3 vendor prefixes
- Placeholders for media queries & retina graphics
- h5bp Print Media Overrides
- Formats b, strong, pre, code, small, sub, sup
- Various browser specific fixes

**HTML**
- HTML5 doctype
- Paul Irish oldie detection
- CDN-loaded IE shivs for HTML5
- Optional CDN-loaded jQuery
- Placeholders for popular meta tags
- Placeholders for Windows 8 and iOS device icons
- Placeholders for Facebook and Twitter OpenGraph
- Optimized Google Analytics placeholder

**MISC**
- robots.txt placeholder

##Documentation
Here's how to use the fluid grid and the various utility classes:

###Fluid Grid
The fluid grid is based on a 12 column system with 2% gutters, these values can be modified in grid.less. It also defaults to applying border-box sizing on the columns, this can be changed as well.

To use the fluid grid to create columns, first add the .group() mixin to the containing element to clearfix it. Next simply add .column(widthInColumns) to your column elements, e.g. .column(6) to create a column that spans half the page.

You can also use the .push(widthInColumns) mixin to push a column to the right without creating empty padding columns.

If you want a single row to line up with the grid columns, simply apply .single-row() to it.

Here is an example of implementing a responsive, fluid grid:

```html
<div class="wrapper">
    <div class="row">
        <section>Hello, world.</section>
        <section>This is a column.</section>
        <section>And another one.</section>
        <section>But wait! There's more!</section>
    </div>
</div>
```

```SCSS
.wrapper {
    section { padding: 1em; }
}

@media screen and (min-width: 48em) {
    .wrapper {
        .row { @include group(); }
        .row section { @include column(3); }
    }
}
```
Easy, right?

###SASS Mixins
####vendorize($property, $value, $prefixes:webkit moz ms o spec);
Adds vendor prefixes to a given property. Takes a list of prefixes to apply, defaults to all four prefixes plus the standard spec.

####group()
The classic micro float clearing fix in the form of a mixin. Apply .group() to a floated element to make sure that elements below it clear the float properly.

####hidden()
This mixin hides an element from screen readers and browsers while reflowing content.

####invisible()
This mixin hides an element from screen readers and browsers while maintaining layout.

####visuallyhidden()
This mixin hides an element from browsers, but not screen readers.

####border-radius ($radius:0)
Border radius mixin. You can also specify four radii to make each corner a different radius. You can also use border-top-radius, border-right-radius, border-bottom-radius, or border-left-radius.

####box-shadow ($top:0.1em, $left:0, $blur:0.1em, $color:#000000, $inset:false)
Box shadow mixin that defaults to a 0.1em 90 degree black drop shadow.

####gradient($start-color, $end-color)
Gradient mixin that supports Webkit/Gecko browsers and IE6+.

####opacity($opacity:1.0)
Opacity mixin that supports IE6+.

####box-sizing($sizing:border-box)
Box sizing mixin.

####transition($properties:all, $duration:0.3s, $easing:ease-out)
Transition mixin. Supports a list of multiple properties by using a comma separated list in parenthesis i.e. `transition((color, background), 0.3s, ease-out);`.

## Epilogue
That's all for now! Thanks to [Dan Cederholm](http://simplebits.com) and [Ethan Marcotte](http://ethanmarcotte.com/) for their pioneering responsive design advice.

Parts were adapted from [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/), [Responsive.gs](http://responsive.gs/), [Bourbon](http://bourbon.io/), and the [HTML5 Boilerplate](http://html5boilerplate.com/).

Feel free to modify and use in your projects as you wish, although a link to [my site](http://nearengine.com) or the [GitHub repo](http://github.com/nearengine/html5quickstart-sass) is always appreciated.
