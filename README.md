# AngularTraining

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

# Table Of Contents

 - [Quick Start](#quick-start)
 - [Training Exercise](#training-exercise)
 - [Getting Ready to Code](#getting-ready-to-code)
 - [Using the API](#using-the-api)
 - [Documentation](#documentation)


## Quick Start

Dependencies:

* [node](http://nodejs.org/) (preferably greater than version 7.5.0)
* [npm](https://www.npmjs.org/) (now comes with node)
* [ng](https://cli.angular.io/) - `npm install -g @angular/cli`

```
npm install
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Training Exercise

This training exercise will be to create one page of a webapp.

There is one screen [here](docs/page1.png) outlining the feed and another [here](docs/delete.png) when deleting a post. In addition, there is a [Sketch App](https://www.sketchapp.com/) file located [here](docs/training.sketch). If you don't have Sketch, you can download a free trial for 30-days if you have mac. One thing that's very nice in Sketch is you can right-click and get the CSS properties of any designed item. This is very helpful for things like `box-shadow`. Otherwise, just make your best approximations.

Outline of goals:

  - Create the page that looks like [this](docs/page1.png).
  - Make the webpage interactive. This means, clicking “Submit” on the form will create a new entry. Clicking the “x” will prompt the “Are you sure?” message. If you confirm a delete, it will remove the entry. You can ignore any saving of data or API access. This means you can load with a few initial posts. If someone creates posts or deletes posts, it should change the page. But if the page is reloaded, it would just start over.
  - Use some sort of form validation on the "create new post" functionality, so people cannot post without entering all information. This can be as simple as an `alert('Please provide a URL')`.
  - Use an [Angular Component](https://angular.io/docs/ts/latest/tutorial/toh-pt3.html) for each item in the feed, so you don't copy the HTML multiple times.
  - For the Images, you can assume the image url we pass in is of a reasonable aspect ratio. Nothing fancy there. For example:
     - Avatar: http://via.placeholder.com/150x150
     - Large Photo: http://via.placeholder.com/600x300

  You can use any JavaScript libraries you need, but please do not use any libraries like Bootstrap for the design. We want the webpage styling to be part of the training.

## Getting Ready to Code

This project uses [TypeScript](http://www.typescriptlang.org/) for JavaScript, [scss](http://sass-lang.com/guide) for CSS, and then HTML and any other assets (images, fonts, etc). It's buit on top of the default [Angular](https://angular.io/docs/ts/latest/) repo created by Angular's [CLI](https://cli.angular.io/).

If you have never used Typescript, I recommend using an IDE that works well with it. For example, if you use [Atom](http://atom.io), you can install [atom-typescript](https://atom.io/packages/atom-typescript) to help.


## Documentation

As a quick overview, all code you need to change during development should be located in [./src](src).

Table of Contents:

  - [Running the server](#running-the-server)
  - [Code Scaffolding](#code-scaffolding)

### Running The server

Running the server is easy. Run `ng serve`. The browser should open and will reload with changes.

### Coding TypeScript

These files can reference any modules installed with `npm`. For Example, if you run `npm install --save jquery`, you can use it like this:

```
import * as $ from 'jquery';
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

I generated the homepage by running `ng generate component pages/home`. If you wanted to generate a component called `toolbar`, you could run `ng generate component components/toolbar`.
