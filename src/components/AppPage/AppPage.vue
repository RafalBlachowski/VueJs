<template>
  <section class="header">
    <Header/>
    <div class="box">
      <SearchBar title="FIND YOUR MOVIE" :searchType="searchType"/>
    </div>
    <div class="box search-by">
      <DoSomethingBy :types="types" title="SEARCH BY" @click="setSearchBy"/>
    </div>
  </section>
  <section>
    <Sort class="box" :totalResults="totalResults" @sortResults="sortResults"/>
  </section>
  <section class="results">
    <MovieList/>
  </section>
  <section class="footer">
    <Footer/>
  </section>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  font-family: sans-serif;
  height: auto;
  z-index: 1;

  &:before {
    z-index: -1;
    content: '';
    background: url("https://i.insider.com/5e721a4ac485404f1161d6a6?width=700&format=jpeg&auto=webp");
    background-size: cover;
    filter: blur(3px);
    position: absolute;
    overflow: hidden;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    overflow: hidden;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .title {
    margin-left: 60px;
    padding-top: 25px;
  }
}

.box {
  display: flex;
  align-items: flex-end;
  width: 80%;
  margin: auto;

  &.search-by {
    margin-top: 15px;
    margin-bottom: 100px;
  }
}

.results {
  background: #232323;
  padding-top: 70px;
}
</style>

<script lang="ts" setup>

import {computed, ref} from "vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import DoSomethingBy from "@/components/DoSomethingBy/DoSomethingBy.vue";
import Sort from "@/components/Sort/Sort.vue";
import MovieList from '@/components/MovieList/MovieList.vue';
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import useSearch from "@/composables/useSearch.composable";
import { useSearchStore } from '@/store/search/search';

const totalResults = ref(66);
const types = [{id: 1, name: 'TITLE'}, {id: 2, name: 'GENRE'}];
const searchType = ref('title');
const searchStore = useSearchStore();


const sortResults = (value) => {
  if (value === 'RATING') {
    totalResults.value = 22;
  } else if (value === 'RELEASE DATE') {
    totalResults.value = 44;
  }
}

const items = computed(() => searchStore.items)

const { updateSearchType } = useSearch(items);

const changeSearchType = (newType) => {
  if (newType.includes('TITLE') || newType.includes('GENRE')) {
    updateSearchType(newType);
  }
};


const setSearchBy = (value) => {
  searchType.value = value;
  changeSearchType(value)
}
</script>
