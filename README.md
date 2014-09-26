html5quickstart-sass 0.1.0
===============
A minimal SCSS template to start an HTML5 project without the overhead of Bootstrap (and similar frameworks). `index.html` contains a fairly comprehensive set of html5 examples that can be deleted or modified as necessary.

It also contains a Gruntfile for automating your frontend workflow. If you would like to use Jekyll to generate your site, place your Jekyll config in the root folder of this project and see **Getting Started** for more details.

## Overview
Includes the following features:

**Workflow**
- `Gruntfile.js` to build scss, minify js, and start browsersync
- `package.json` for dependencies

*If you would like to avoid using Grunt*, simply set up your local Sass to compile `src/scss/style.scss` to `public/assets/style.css` and minify the `src/js` directory to `public/assets/js`. You may need to specify exact paths for bourbon and neat in `style.scss`.

If you are using Jekyll, set it up to watch `public` as the input folder.

**SCSS**
- Master CSS Reset
- Bourbon and Neat frameworks for CSS3 mixins and a lightweight grid
- Utility mixins for accessible hiding and CSS3 vendor prefixes
- h5bp Print Media Overrides
- Provides base styles for `b`, `strong`, `pre`, `code`, `small`, `sub`, `sup`, `mark`, `hr`, `selection`, and `a`
- As well as various browser specific fixes (see `_base.scss`)
- Source map support

**JS**
- Minifies JavaScript
- Optional CDN-loaded jQuery with local fallback
- Source map support

**HTML**
- HTML5 doctype and examples
- Paul Irish oldie detection
- CDN-loaded IE shivs for HTML5
- Placeholders for popular `meta` and `link` tags
- Placeholders for Facebook and Twitter OpenGraph
- Optimized Google Analytics placeholder

**MISC**
- robots.txt placeholder
- Placeholders for Windows and iOS device icons

## Usage

**Dependencies**
- `sass`
- `node` and `npm`
- `grunt-cli`

**Getting Started**
Run `npm install` and then `grunt`.

This should install the remaining dependencies, compile the necessary source files, and open a browser window pointing to BrowserSync (usually `http://localhost:3000`). When changes are made to the source files Grunt will recompile and inject updates as necessary.

If you want to add Jekyll support, additionally run `gem install jekyll`, and then run `grunt jekyll` in place of `grunt`. This adds an additional build step to run `jekyll build` and output the site to the `/build/` directory.

**Internet Explorer note:** Mobile-first design ensures that older versions of Internet Explorer will show the mobile styles, since they don't support media queries. If you need to style older versions of Internet Explorer more extensively, you can create selectors that start with .oldie, which targets IE8 and below.

## Structure

```
.
├── public
│   ├── assets
│   │   ├── css
│   │   │   ├── style.css
│   │   │   └── style.css.map
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   │       └── vendor
│   │           ├── jquery-2.1.1.js
│   │           └── jquery-2.1.1.js.map
│   └── index.html
└── src
    ├── js
    │   └── vendor
    │       └── jquery-2.1.1.js
    └── scss
        ├── modules
        │   └── _mixins.scss
        ├── partials
        │   ├── _base.scss
        │   ├── _print.scss
        │   └── _reset.scss
        └── style.scss
```

All files that are preprocessed live in `/src/`: files in the `/src/js/` directory will be minified and output to `/public/assets/js/`, and the `/scss/style.scss` will be compiled by Sass and output to `/public/assets/css/style.css` along with their respective sourcemaps. jQuery is provided as a fallback to the optional CDN-loaded example in `index.html`.

All files that will be accessible from the web live in `/public/`. There are examples of device icons, a `robots.txt`, and an HTML5 starter template in here.

If you are using Jekyll with Grunt, the final site will be output to `/build/`, which is what should be deployed to the public server.

## Modules

Bourbon and Neat are included by default. The following additional mixins are provided:

### vendorize($property, $value, $prefixes:webkit moz ms o spec);
Adds vendor prefixes to a given property. Takes a list of prefixes to apply, defaults to all four prefixes plus the standard spec.

### hidden()
This mixin hides an element from screen readers and browsers while reflowing content.

### invisible()
This mixin hides an element from screen readers and browsers while maintaining layout.

### visuallyhidden()
This mixin hides an element from browsers, but not screen readers.

## Epilogue
That's all for now! Thanks to [Dan Cederholm](http://simplebits.com), [Jonathan Snook](http://snook.ca/) and [Ethan Marcotte](http://ethanmarcotte.com/) for their pioneering responsive design advice.

Parts were adapted from [HTML5 Doctor Reset](http://html5doctor.com/html-5-reset-stylesheet/) and the [HTML5 Boilerplate](http://html5boilerplate.com/).

Feel free to modify and use in your projects as you wish, although a link to [my site](http://nearengine.com) or the [GitHub repo](http://github.com/nearengine/html5quickstart-sass) is always appreciated.
