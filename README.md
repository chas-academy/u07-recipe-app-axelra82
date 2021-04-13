# CHAS ACADEMY | ASSIGNMENT U07

[Live app preview](https://relaxed-shirley-9bed8f.netlify.app/)

## Introduction

This assignment requires the developer to create a rudimentary recipe app using [Angluar](https://angular.io/) v11+.

### Prerequisites

**Angluar CLI =< v11.x**

To test if you have it, run `ng v`. If this outputs "Angular CLI" with version information you are good to go (just make sure it's **=< v11.x**, if not, run `ng update`).

If you don't have it installed simply run `npm i -g @angular/cli`.

**Local environment**

On build this project looks for an environment. Since environment variables are secret and should never be shared in public repos you will need to set it up yourself. Create a new file called `.env` in the project root. You can do this several ways, e.g.:

- vsc file browser: right-click -> new file and name it `.env`
- macOS/Linux: `touch .env`
- windows (cmd): `type nul > .env`

Edit `.env` file and insert:

- `REAPP_MEALDB_API_KEY=1`

Then save and exit. Your environment setup is now done!

### Local setup

1. download repo
2. navigate to folder
3. run `npm i` to install dependencies
4. run `npm start` to serve website on [localhost:4200](http://localhost:4200)

## App Functionallity

### Goal

- [x] get a list of recipe suggestions
- [ ] be able to filter suggestions
  - [ ] by type/category (e.g. main, side, dessert etc)
  - [ ] by allergen/dietary (e.g. gluten, nuts, vegan etc)
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
- [ ] saved list and filtering must work while browser remains open

# Hand in

**Due date:** April 8th 2021

[Github repo](https://github.com/chas-academy/u07-recipe-app-axelra82)
and link to repo in LMS

# Article references

During the development of this application some helpful articles where found:

- [Integrate dotenv](https://dev.to/artemv01/integrating-dotenv-and-google-maps-api-into-your-angular-project-40gh)
- [Angular/Netlify routing](https://stackoverflow.com/questions/51887581/angular-routing-not-working-on-netlify-on-page-refresh)