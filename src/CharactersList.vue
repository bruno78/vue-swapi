<template>
  <div id="app">
    <div v-for="(character, i) in characters" :key="i">
      <character-info :character="character" />
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

