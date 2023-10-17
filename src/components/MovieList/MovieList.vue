<template>
  <div class="movie-list">
    <template v-for="(tile, index) of filteredItems" :key="index">
      <TileComponent :tile="tile"/>
    </template>
  </div>
</template>

<style lang="scss" scoped src="./MovieList.scss"/>

<script lang="ts" setup>
import {inject, computed} from 'vue';
import TileComponent from "@/components/TileComponent/TileComponent.vue";

const filteredItems = inject('filteredItems') as ReturnType<typeof computed>;

console.log('ProductListComponent', filteredItems);

const emit = defineEmits<{
  (e: "click", name: string);
}>();

</script>
