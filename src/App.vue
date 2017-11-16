<template>
  <div id="app">

    <h1>{{title}}</h1>
    <characters-list :characters= 'characters' />
  </div>
  
</template>

<script>
  import characterJSON from './assets/characters.json'
  import CharactersList from './CharactersList.vue'

  export default {
    name: 'MainApp',
    data () {
      return {
        title: "Star Wars Characters",
        characters: characterJSON.characters
      }
    }, 

    components: {
      'characters-list': CharactersList
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Bungee|Bungee+Inline|Bungee+Shade|Gurajada');

html, body {
  height: 100%;
}
body {
  background-color: black;
  background: url(./assets/Star-Wars-Wallpapers-crew.jpg) no-repeat center center fixed;
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:rgba(0,0,0,0.4);
  color: white; // #2c3e50;
  margin-top: 60px;
  padding-top: 20px;
  padding-bottom: 50px;
  
  h1 {
    font-family: 'Bungee', cursive;
  }
  h3 {
    font-weight: 600;
  }
  h5 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  p {
    font-size: 1.2em;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  // display: inline-block;
  margin: 0 10px;
}
</style>
