import Vue from 'vue'
import App from './App.vue'
Vue.use(require('vue-moment'))

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})
