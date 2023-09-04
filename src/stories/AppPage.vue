<template>
  <section class="header">
    <h1 class="title">netfix<span class="thin">roulette</span></h1>
    <div class="section">
      <SearchBarComponent title="FIND YOUR MOVIE"/>
      <MyButton class="button" size="custom" @click="$emit('search')" label="SEARCH" primary />
    </div>
    <div class="section">
      <SearchByComponent :types="types" />
    </div>
  </section>
  <section class="sort">

  </section>
  <section class="results"></section>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  font-family: sans-serif;
  height: 396px;
  z-index: 1;
  color: #f65261;

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
    width: 100%;
    margin-left: 60px;
    padding-top: 25px;
    font-weight: 700;
    .thin {
      font-weight: lighter;
    }
  }

  .section {
    display: flex;
    align-items: flex-end;
    width: 80%;
    margin-left: 100px;

    .button {
      margin-left: 15px;
    }
  }
}
</style>

<script lang="ts" setup>
import "./page.css";
import MyButton from "./MyButton.vue";

import {ref} from "vue";
import SearchBarComponent from "@/components/SearchBarComponent/SearchBarComponent.vue";
import SearchByComponent from "@/components/SearchByComponent/SearchByComponent.vue";


const user = ref<{ name: string } | null>(null);
const types = [{ id: 1, name: 'TITLE' }, { id: 2, name: 'GENGRE' }];
</script>
