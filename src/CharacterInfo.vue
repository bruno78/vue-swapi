<template>
  <div class="container">
    <div class="row">
        <div class="col s12">
            <h3>{{character.name}}</h3>
    
            <button class="waves-effect waves-light btn" 
                    @click="getMoviesLinks(character.url)"
                    @mouseover="hover(true)"
                    @mouseleave="hover(false)"
                    :class="{red: isActive, pulse: isHovering}"
                    >{{ isActive ? 'hide' : 'show movies' }}</button>
            
            <div v-if="isActive">
                <div v-if="loading">
                    <h5>Loading movies...</h5>
                </div>
                <ul v-if= "movies && movies.length">
                    <li v-for="(movie, i) in movies" :key="i">
                        <h4>{{ movie.data.title }}</h4>
                        <p> Release date: {{ movie.data.release_date | 
                                            moment("dddd, MMMM D YYYY") }}</p>
                    </li>
                </ul>

                <ul v-if="errors && errors.length">
                    <li v-for="(error, i) of errors" :key="i">
                    <p>{{ error.message }}</p> 
                    </li>
                </ul>
            </div>
        </div>
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
          loading: true,
          isHovering: false,
          movies:[],
          movieLinks: [],
          errors:[]
      }
  },
  methods: {
      hover(hovering) {
          this.isHovering = hovering;
      },
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
                        this.loading = false
                    }
                    else {
                        this.errors.push(e)
                        this.loading = false
                    }
                    
                })
          }
      },
      getMovies(links) {
          axios.all(links.map(link => axios.get(link)))
            .then(axios.spread((...res) => {
                this.movies = res.sort((a, b) => {
                    let dateA = new Date(a.data.release_date)
                    let dateB = new Date(b.data.release_date)
                    return dateB-dateA
                })
                this.loading = false
            }))
            .catch(e => {
                    console.log(e)
                })
      }
  }
}
</script>


