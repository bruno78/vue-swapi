# Star Wars Api

> A Vue.js project

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### Intro

Use the Star Wars API to generate a list of the films that a particular character appears in.

### Requirements

Submit an application that accomplishes the objectives below. Hosting is up to you, we only need a link to a working deployment of your project, and a link to your source code. We reccomend js bin and Plunker for free, all-in-one solutions.

Bonus points for SCM with github/gitlab/bitbucket + continuous integration and deployment to a real hosting service such as AWS, Google Cloud, or Heroku

### Objectives

- [x] Allow users to choose a character from the provided JSON file
- [x] Upon selection of a character, the UI should update to display information about each of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
- [x] Do this with any js framework, and some kind of component-based pattern
- [x] You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
- [x] Don't load the movie data until the character is clicked
- [x] Don't show any movie information until all of the character's movies have loaded
- [x] Handle HTTP errors
- [x] Make it pretty! You're encouraged to use bootstrap or another css framework

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Our favorite frameworks

Angular
React
Preact
Vue
Feel free to use any function library you'd like.

If you have feedback about the exercise, please include it.

NOTE: Obi-wan's URL is intentionally incorrect, please do not modify the JSON.

characters.json 

```json
{
      "characters": [
        {
          "name": "Luke Skywalker",
          "url": "https://swapi.co/api/people/1/"
        },
        {
          "name": "Darth Vader",
          "url": "https://swapi.co/api/people/4/"
        },
        {
          "name": "Obi-wan Kenobi",
          "url": "https://swapi.co/api/people/unknown/"
        }, 
        {
          "name": "R2-D2",
          "url": "https://swapi.co/api/people/3/"
        }
      ]
    }
```