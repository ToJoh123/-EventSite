# Abstract

The `abstract/` folder gathers all Sass tools and helpers used across the project. All globally-available settings, config switches, resets and variables for brand colors and typography.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

```
|– _reset.scss            # Reset/Normalize
|– _variables.scss        # Variables for brand colors and type
|– _mixin.scss            # Mixins
…                         # Etc.
```

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Abstracts folder](http://sass-guidelin.es/#abstracts-folder)
