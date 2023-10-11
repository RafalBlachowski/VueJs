<template>
  <div class="search-bar">
    <label for="searchMovie" class="search-bar__label">{{ title }}</label>
    <input
        v-model="searchTerm"
        id="searchMovie"
        class="search-bar__input"
        type="text"
        style="background: #1c1c1c; height: 57px; border: none; border-radius: 5px;"
    />
  </div>

  <MyButton class="button" size="custom" label="SEARCH" primary/>
</template>
<script lang="ts" setup>
import MyButton from "@/stories/MyButton.vue";
import { inject, ref } from 'vue';
defineProps<{
  title: string,
  searchType: string
}>();

const searchTerm = inject('searchTerm') as ReturnType<typeof ref>;

</script>
<style src="./SearchBar.scss" scoped/>
