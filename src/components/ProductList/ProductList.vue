<template>
  <div class="product-list">
    <template v-for="tile of filteredItems" :key="tile.id">
      <TileComponent :tile="tile"/>
    </template>
  </div>
</template>

<style lang="scss" scoped src="./ProductList.scss"/>

<script lang="ts" setup>
import {inject, computed} from 'vue';
import TileComponent from "@/components/TileComponent/TileComponent.vue";


const filteredItems = inject('filteredItems') as ReturnType<typeof computed>;

console.log('ProductListComponent', filteredItems);

const emit = defineEmits<{
  (e: "click", name: string);
}>();

</script>
