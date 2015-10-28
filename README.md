# boilerplate

**CUSTOM HTML ELEMENTS BOILERPLATE WRITTEN IN ES6, TRANSPILED WITH BABEL, AND BUNDLED WITH ROLLUP**

Also uses postcss with autoprefixer to bundle css-files and add vendor-prefixes

- `postinstall` -> Installs bower components and then `npm start`
- `start` -> Runs `watch:js`, `watch:css` and `serve` in parallell
- `preserve` -> Runs before `serve` and makes sure that `build:js` and `build:css` have been executed
- `serve` -> Starts browser-sync, serves files from www, dist and bower_compoents and restarts when files in dist are changed
- `watch:js` -> Watches js-files and runs `build:js` when there are changes
- `watch:css` -> Watches css-files and runs `build:css` when there are changes
- `build:js` -> Bundles es6-modules with rollup, transpiles to es5/umd with babel, and saves the result in "dist"
- `build:css` -> Builds css with postcss and saves the result in "dist"
