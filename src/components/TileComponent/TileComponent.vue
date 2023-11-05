<template>
  <div v-if="isPictureLoad" class="tile">
    <div class="tile__picture">
      <picture>
        <img
            v-lazy-load="tile.posterurl"
            :alt="tile.poster"
            width="322"
            height="455"
            @click="checkLoadedImage"
        >
      </picture>
    </div>
    <div class="tile__title">
      <span class="text">{{ tile.title }}</span><span class="rate">{{ tile.year }}</span>
    </div>
    <div class="tile__genre">
      <span v-for="genre of tile.genres">&nbsp;{{ genre }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./TileComponent.scss"/>

<script lang="ts">

import { ref } from 'vue';


export default {
  props: {
    tile: Object
  },
  setup() {
    const isPictureLoad = ref(true);

    return {
      isPictureLoad
    }
  },

  methods: {
    checkLoadedImage(event) {
      this.isPictureLoad = event.detail
    }
  }
}

</script>
