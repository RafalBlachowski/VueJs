<template>
  <div class="tile">
    <div class="tile__picture">
      <picture>
        <img
            v-lazy-load="tile.posterurl"
            :alt="tile.poster"
            width="322"
            height="455"
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


export default {
  props: {
    tile: Object
  }
}

</script>
