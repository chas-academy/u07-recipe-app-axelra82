# CHAS ACADEMY | ASSIGNMENT U07

**EDIT** 2021-05-06

This app has been updated to work with [the API from assignment u08](https://github.com/chas-academy/u08-recipe-api-axelra82). Make sure to include the new `AUTH_API_URL` in your `.env` file. If you want to run a local version of the API from u08 the URL is `http://localhost/api/auth`.

[Live app preview](https://relaxed-shirley-9bed8f.netlify.app/)

## Introduction

This assignment requires the developer to create a rudimentary recipe app using [Angluar](https://angular.io/) v11+.

Once your up and runnig (or if you just want a sneek peak you can use to link above to the live app), try searching for `chocolate` and either filter by "type" with `Dessert` or `Vegan` to see the search results filter on the spot.

### Prerequisites

**Angluar CLI =< v11.x**

To test if you have it, run `ng v`. If this outputs "Angular CLI" with version information you are good to go (just make sure it's **=< v11.x**, if not, run `ng update`).

If you don't have it installed simply run `npm i -g @angular/cli`.

**NODEJS**

To test if you have it, run `node -v`. If this outputs a version number (e.g. v15.x.x) you are good to go.

If you don't have it installed visit [nodejs.org](https://nodejs.org/en/download/), download installer and follow instructions for you OS.

**Local environment**

On build this project looks for an environment. Since environment variables are secret and should never be shared in public repos you will need to set it up yourself. Create a new file called `.env` in the project root. You can do this several ways, e.g.:

- vsc file browser: right-click -> new file and name it `.env`
- macOS/Linux: `touch .env`
- windows (cmd): `type nul > .env`

Edit `.env` file and insert:

- `REAPP_MEALDB_API_KEY=1`
- `AUTH_API_URL=https://cau08.herokuapp.com/api/auth`

Then save and exit. Your environment setup is now done!

### Local setup

1. download repo
2. navigate to folder
3. run `npm i` to install dependencies
4. run `npm start` to serve website on [localhost:4200](http://localhost:4200)

## App Functionallity

### Goal

- [x] get a list of recipe suggestions
- [x] be able to filter suggestions
  - [x] by type/category (e.g. main, side, dessert etc)
  - [x] by allergen/dietary (e.g. gluten, nuts, vegan etc)
- [x] individual recipe page (route) from list
- [x] be able to save recipe in list
- [x] be able to view saved recipe (route) from list
- [x] be able to remove saved recipe from list

### Requirements

- [x] must use Angular (v 11)
- [x] Use external API for recipe data e.g.
  - [MealDB](https://www.themealdb.com/api.php)
  - ~~[Edamam](https://developer.edamam.com/edamam-recipe-api)~~
- [x] must be responsive (i.e. work on mobile/tablet/laptop/desktop)
- [x] saved list and filtering must work while browser remains open

# Hand in

**Due date:** April 8th 2021

[Github repo](https://github.com/chas-academy/u07-recipe-app-axelra82)
and link to repo in LMS

# Article/Video references

During the development of this application some helpful articles/video where found:

- [Integrate dotenv](https://dev.to/artemv01/integrating-dotenv-and-google-maps-api-into-your-angular-project-40gh)
- [Netlify routing](https://stackoverflow.com/questions/51887581/angular-routing-not-working-on-netlify-on-page-refresh)
- [NgRx (store/state)](https://www.youtube.com/watch?v=f97ICOaekNU)
