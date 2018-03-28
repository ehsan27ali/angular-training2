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

This training exercise will be to create one page of a webapp that will use an API. You'll get a chance to practice Angular, SCSS, and hitting an API.

There is one screen [here](docs/page1.png) outlining the feed and another [here](docs/delete.png) when deleting a post. In addition, there is a [Sketch App](https://www.sketchapp.com/) file located [here](docs/training.sketch). If you don't have Sketch, you can download a free trial for 30-days for now. One thing that's very nice in Sketch is you can right-click and get the CSS properties of any designed item. This is very helpful for things like `box-shadow`.

Outline of goals:

  - Convert the design to CSS components. (See [Styling SCSS](#styling-scss) for more info).
  - Create the page that looks like [this](docs/page1.png).
  - Make it interactive by hitting the API. (See [Using the API](#using-the-api) for more info). This means you use the API to get the posts on the feed, create new posts, and delete posts. You don't need to pull the ads on the right from an API. They can be hardcoded.
  - Use some sort of form validation on the "create new post" functionality, so people cannot post without entering all information.
  - Use an [Angular Component](https://angular.io/docs/ts/latest/tutorial/toh-pt3.html) for each item in the feed, so you don't copy the HTML multiple times.
  - Use an [Angular Service](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html) to handle the popup for the delete modal.
  - Hide the Ads on the right when the device is below 768px (Tablet Portrait and Mobile).

  You can use any JavaScript libraries you need, like maybe jQuery or Angular functionality for hitting the API. But please do not use any libraries like Bootstrap for the design. We want the custom SCSS to be part of the training.


## Getting Ready to Code

This project uses [TypeScript](http://www.typescriptlang.org/) for JavaScript, [scss](http://sass-lang.com/guide) for CSS, and then HTML and any other assets (images, fonts, etc). It's buit on top of the default [Angular](https://angular.io/docs/ts/latest/) repo created by Angular's [CLI](https://cli.angular.io/).

In using these tools, we have linting established for `typescript`, `scss`, and `html`. It would be helpful to install the necessary tools for your IDE to see errors while coding.

Packages for Atom:

  - [atom-typescript](https://atom.io/packages/atom-typescript)
  - [linter-tslint](https://atom.io/packages/linter-tslint)
  - [linter-stylelint](https://atom.io/packages/linter-stylelint)
  - [linter-htmlhint](https://atom.io/packages/linter-htmlhint)

If you are not using atom, you should find linters for the following tools:

  - [tslint](https://palantir.github.io/tslint/)
  - [stylelint](https://stylelint.io/)
  - [htmlhint](http://htmlhint.com/)


## Using the API

We have a sample REST API located [here](https://uhray-restapi.herokuapp.com/).

If you haven't worked much with a REST API, you may want to read around a bit. But, some simple overview or reminders here.

This graphic nicely lays out how a REST API works:

![REST API](docs/restapi.jpg)

Think **CRUD**:

  - <b>C</b>reate: POST
  - <b>R</b>ead: GET
  - <b>U</b>pdate: PUT
  - <b>D</b>elete: DELETE

Our sample REST API is hosted using [json-server](https://www.npmjs.com/package/json-server#routes) just to make it easy to spin up. A few things to note:

  1. If you go to `https://uhray-restapi.herokuapp.com/api/{name}/records`, you'll see your records. If you don't know what your `{name}` route is, please ask.
  2. This data is not necessarily permanent, so if things delete day-to-day, don't worry about it. It's just for testing with.
  3. We recommend using [Postman](https://www.getpostman.com/) to test hitting the API.

        - Postman allows you to easily test out hitting the API's `GET`, `POST`, `PUT`, and `DELETE` routes.
        - If you're using `POST` - you'll want to (a) click "Body" (b) click the radio button "raw" (c) click the dropdown to the right to select JSON. It's not so intuitive, but easy enough once you've done it before.


## Documentation

As a quick overview, all code you need to change during development should be located in [./src](src).

Table of Contents:

  - [Running the server](#running-the-server)
  - [Linting & Testing](#linting-and-testing)
  - [Pushing to GitHub](#pushing-to-github)
  - [Coding html](#coding-html)
  - [Coding scss](#coding-scss)
  - [Coding typescript](#coding-typescript)
  - [Code Scaffolding](#code-scaffolding)


### Running The server

Running the server is easy. Run `ng serve`. The browser should open and will reload with changes.

### Linting And Testing

Run `npm run test`. Any errors will be clearly output to the terminal.

### Pushing to GitHub

You can push to the dev branch of GitHub with `git push origin dev` or any other branch you desire to create. To get code to master, you need to head to GitHub and submit a pull request to staging. Then we can release things to master on a more defined schedule.

### Coding html

Code them as you would a normal Angular HTML file, except you should see rules below:

  - If you need to add a CSS class solely for selecting with JavaScript, please use the syntax `js-myClassName` to clearly indicate this class is not for styling.
  - Do not use ID tags in HTML unless 100% required, like a JavaScript plugin needs it or something.

### Coding scss

This is the most involved piece of documentation.

There is one main scss file in [./src/styles.scss](src/scss). It should do nothing more than point to scss files in [./src/styles](src/styles) that actually encode styles.

> NOTE: Angular CLI may try to put scss files in [src/app](src/app). Do not use these. We want styling to be project based, not page based.

Some notes below:

  - [Responsiveness](#responsiveness)
  - [Styling SCSS](#styling-scss)

#### Responsiveness

There are some mixins already in [./src/styles/base/_mixins.scss](src/styles/base/_mixins.scss) for handling the responsiveness.

```
@include breakpoint(mobile) {

  // anything here will ONLY show up on a mobile device (< 768px)

}

@include breakpoint(tablet-portrait) {

  // anything here will show up on tablet-portrait and larger devices (>= 768px)

}

@include breakpoint(tablet-landscape) {

  // anything here will show up on tablet-landscape and larger devices (>= 1024px)

}

@include breakpoint(web) {

  // anything here will show up on web and larger devices (>= 1200px)

}

```

#### Styling SCSS

Styling SCSS is important for readability.

We have a few general rules:

  - Variables should be formatted like this: `$color--blue` or `$font-size--default`, where the `--` indicates the value and everything before it is in kabab case (e.g. `each-word-separated-by-a-dash`).
  - Components should be placed in the [./src/styles/components](src/styles/components) directory.  Components are groups of CSS designed to perform a specific functional purpose. Button, Table, NavBar, etc.
  - Utility classes are useful classes for basic css styling. For example, a utility class `u-float--left` would tell the item to float left. These are located in [./src/styles/base/_utilities.scss](src/styles/base/_utilities.scss). Each utility should have only one css style and it will prevent us from putting any `style` tags in our HTML. However, we should try as much as possible to not need these and keep the styling in the components.
  - If what you are coding is not a fix for something like IE, isn't a component, and isn't a utility, you're probably mixed up. Almost everything should fit into these categories. If not, you can place it in [./src/scss/base/_shame.scss](src/scss/base/_shame.scss). TRY NOT TO NEED THIS.

**Coding a Utility Class**

Utilities should take the form `u-<cssName>--<value>` and should all have "!important".

  - `<cssName>`: All utility `<cssNames>` should be in kabab type (e.g. font-size or border-radius)
  - `<value>`: can be either the real value (like "left" for .u-float--left) or something to indicate the value like "large" for .u-font-size--large.

**Coding a Component Class**

All components use the naming convention here. Let’s say we’re designing a component like “PricingTable”. We may have some classes like this:

```
.PricingTable {}
.PricingTable.is-animating {}
.PricingTable.PricingTable--dark {}

.PricingTable .PricingTable-title {}
.PricingTable .PricingTable-icon {}
```

There are some important things here:

  - The component is in Pascal case, which means the first letter is capital and so is the first letter of every subsequent word.
  - A component like this is reusable across the app and easy to re-use
  - Any modifiers, like `.PricingTable--dark` will also require you to put the .PricingTable class on the element. This way we don’t need to copy tons of stuff for each modification. Think something like this `<div class=”PricingTable PricingTable--dark”>...`
  - Any HTML piece of the component is like this: `.PricingTable-{subcomponentname}`. Try not to rely on just grabbing the HTML tags like `.PricingTable h1`.
  - The only time something is not pascal case here is a class representing a state that starts with `is-`, for example `is-animating`.

However, there are many times we’re creating what may be a “component” but we aren’t really going to reuse it across the app, and it would become messy to need to name these things so that they don’t clash. For example, let’s say one page has a left menu. We can’t title it “LeftMenu”, because other pages might have one.

This is where namespaces come into play. And we’ll use namespaces to identify a page on the app.

Namespaces are camelcase prefixes. For Example, we could do .homePage-PricingTable. This will make it very consistent and easy to style custom things on each page as well as style reusable things. More thoughts:

  - If your page needs a custom layout, you can make a component like this .`HomePageLayout` or `.homePage-Layout`. We will generally try to do `.homePage-Layout`. If it’s a reusable layout, do something like `.l-LeftColumnLayout` since we will always namespace layouts with “l-” to clearly indicate the layout if they are not namespaced already.

The last thing is that we want to keep some consistency. So let’s format Components like this:

```css
.MyComponent {
  @include myMixin();  // mixins first
  opacity: 0.8;        // custom css second

  // sub component stuff next
  .MyComponent-leftSide {
    @include myMixin();  // mixins first
    opacity: 0.8;        // custom css second

    // Mixin for responsiveness
    @include breakpoint(web) {
      // stuff in here
    }
  }

  // Component options last because they may need to modify sub components!
  &.MyComponent--dark {
    // Options here for a dark component
  }

  // Mixin for responsiveness
  @include breakpoint(web) {
    // stuff in here
  }
}

```


### Coding TypeScript

These files can reference any modules installed with `npm`. For Example, if you run `npm install --save jquery`, you can use it like this:

```
import * as $ from 'jquery';
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.
