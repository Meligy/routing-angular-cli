# Angular CLI Routing Example

The purpose of this project is to show examples of loading routes by including them directly in the bundle, and by loading them lazily as separate bundles.

The project shows a simple website, showing a `bundled` route loaded in the main bundle, and a `lazy` route loaded in a seperate bundle (lazy loaded).

Mostly you just need `npm start` for `ng serve`, and `npm start -- --aot` for `ng serve --aot` (AoT compiler).

## Standard Angular CLI Docs

The project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

The commands below have been modified to ensure you are using the locally installed `angular-cli` package.

### Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `npm run ng -- generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `npm run ng -- build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `npm run ng -- test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run ng -- e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `npm run ng -- github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
