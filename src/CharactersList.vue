<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col s12" v-for="(character, i) in characters" :key="i">
        <character-info :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import CharacterInfo from './CharacterInfo.vue'

export default {
  name: 'CharactersList',
  props: ['characters'],
  components: {
      'character-info': CharacterInfo
  }
}
</script>

