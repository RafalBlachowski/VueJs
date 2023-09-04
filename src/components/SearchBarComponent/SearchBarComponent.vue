<template>
  <div class="search-bar">
    <label for="searchMovie" class="search-bar__label">{{ title }}</label>
    <input id="searchMovie" class="search-bar__input" type="text" style="background: #1c1c1c; height: 57px; border: none; border-radius: 5px;" />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
}
</script>
<style src="./SearchBarComponent.scss" />
