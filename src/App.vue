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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
