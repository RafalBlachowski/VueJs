<template>
  <div class="search-by">
    <h3>SEARCH BY</h3>
    <template v-for="type of types" :key="type.id">
      <MyButton
          class="button"
          :class="{'selected': selectedType === type.id}"
          :size="selectedType === type.id ? 'small' : 'medium'"
          @click="searchByType(type.id)"
          :label="type.name"
          secondary
      />
    </template>
  </div>
</template>

<style lang="scss" scoped src="./SearchByComponent.scss"/>

<script lang="ts" setup>
import { ref } from 'vue';
import MyButton from "@/stories/MyButton.vue";

defineProps<{ types: [{id: number, name: string }]  }>();
let selectedType = ref(1)
const searchByType = (typeId) => {
  selectedType = typeId;
}

</script>
