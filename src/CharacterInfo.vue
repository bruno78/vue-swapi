<template>
  <div>
    <h3>{{character.name}}</h3>
    
    <button @click="getMoviesLinks(character.url)">{{ isActive ? 'hide' : 'show' }}</button>
    
    <div v-if="isActive">
        <ul v-if= "movies && movies.length">
            <li v-for="(movie, i) in movies" :key="i">
                <h5>{{ movie.data.title }}</h5>
                <p> release date: {{ movie.data.release_date | 
                                     moment("dddd, MMMM D YYYY") }}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="(error, i) of errors" :key="i">
                {{ error.message }}
            </li>
        </ul>
    </div>
  </div>     
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharacterInfo',
  props:['character'],
  data() {
      return {
          isActive: false,
          movies:[],
          movieLinks: [],
          errors:[]
      }
  },
  methods: {
      getMoviesLinks(url) {
          this.isActive = !this.isActive
          
          if(this.isActive) {
              axios.get(url)
                .then(response => {
                    this.movieLinks = response.data.films
                    this.getMovies(this.movieLinks)
                })
                .catch(e => {
                    this.errors = []
                    if(e.response.status === 404) {
                        this.errors.push({message: "Oops, 404 - we couldn't find our spaceship!"})
                    }
                    else {
                        this.errors.push(e)
                    }
                    
                })
          }
      },
      getMovies(links) {
          axios.all(links.map(link => axios.get(link)))
            .then(axios.spread((...res) => {
                this.movies = res
            }))
            .catch(e => {
                    console.log(e)
                })
      }
  }
}
</script>
