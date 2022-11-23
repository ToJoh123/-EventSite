[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# Simple CSS Architecture

A simple css architecture for happy and maintainable stylesheets.

It's basically a mashup of the [7-1 architecture pattern](https://sass-guidelin.es/#the-7-1-pattern) and the component-driven approach from [RSCSS](http://rscss.io/) by Rico Sta Cruz.

Each folder of this project has its own `README.md` file to explain the purpose and add extra information. Be sure to browse the repository to see how it works.

This boilerplate uses the \*.scss syntax.

## Structure

```
scss/
|
|– abstract/
|   |– _reset.scss        # Reset/Normalize
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|
|– components/
|   …                     # RSCSS Components
|
|– layout/
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   …                     # Etc.
|
|– modules/
|   |– _animation.scss    # Animation Styles
|   |– _base.scss         # Footer
|   |– _buttons.scss      # Buttons
|   |– _typography.scss   # Typography
|   |– _forms.scss        # Forms
|   |– _helper.scss       # Helpers
|   |– _mediaqueries.scss # Media Queries
|   |– _print.scss        # Print
|   …                     # Etc.
|
|– pages/
|   |– front.scss         # Home specific styles
|   …                     # Etc.
|
|– vendor/
|   |– _bootstrap.scss    # Bootstrap
|   |– _slick.min.scss    # Slick Slider
|   …                     # Etc.
|
|– vendor-extension/
|   |– _bootstrap.scss    # Overwritten Bootstrap
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```

### Abstract

The `abstract/` folder gathers all Sass tools and helpers used across the project. All globally-available settings, config switches, resets and variables for brand colors and typography.

### Components

The `components/` folder where we integrate [Rico Sta Cruz's](https://github.com/rstacruz) philosophy of building maintainable CSS and where we create every UI [component](http://rscss.io/components.html). Each component should be [in a separate file](http://rscss.io/css-structure.html)

### Layout

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

### Modules

Some call it partials. Or you could call it `modules/`. Taken on some principle from [SMACSS](https://smacss.com/), this is where we break things down into much finer categories like (typography, buttons, forms, ect).

### Pages

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the homepage hence the need for a `_front.scss` file.

### Vendor

Most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.

### Vendor extension

If you have to override a section of any vendor, I recommend you have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite. For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

## License

The code is available under the [MIT license](LICENSE.txt).
