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

  <MyButton class="button" size="custom" label="SEARCH" primary @click="updateSearch(searchTerm)"/>
</template>
<script lang="ts" setup>
import MyButton from "@/stories/CustomButton.vue";
import { inject, ref } from 'vue';
import { useSearchStore } from '@/store/search/search';

const searchStore = useSearchStore();
import { onMounted } from 'vue';

onMounted(async () => {
  if (!searchStore.items.length) {
     await searchStore.setItems();
  }
});

defineProps<{
  title: string,
  searchType: string
}>();

const searchTerm = inject('searchTerm') as ReturnType<typeof ref>;

const updateSearch = (term) => {
  searchStore.setSearchTerm(term);
}

</script>
<style src="./SearchBar.scss" scoped/>
