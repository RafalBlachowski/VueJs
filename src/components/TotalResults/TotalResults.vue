<template>
  <div class="total-results">
    {{ results }} movie found
  </div>
</template>

<style lang="scss" scoped src="./TotalResults.scss"/>

<script lang="ts">

export default {
  props: {
    results: Number
  }
}


</script>
