# AngularRandomFailingTests

Repository with example of random failing test in Jasmine/Karma. Created for post (TODO: add link to post after publishing).
Custom Jasmine seed reporter is added. Due to it it's easier to spot which test is problematic.

Git commits contains exact description of each step. Here is brief description:
1. Initial commit - ng new - nothing special
2. *.iml file added to .gitignore - nothing special
3. Licence added - nothing special
4. **karma-spec-reporter** added (for better output) + ChromeHeadless in karma.conf.js - very useful during finding failing test
5. Tests without watch mode - nothing special
6. Setting random order for jasmine
7. Random failing test added - see UserService
8. Custom jasmine reporter added - **karma-jasmine-seed-reporter**
9. How to find failing test? Adding specific seed for jasmine in karma.conf.js
10. Fixing test - clearing state
11. Removing specific seed

# CLI info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
