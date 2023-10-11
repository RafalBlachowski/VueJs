<template>
  <div class="sort">
    <TotalResults :results="totalResults"/>
    <DoSomethingBy :types="types" title="SORT BY" @click="sortResults"/>
  </div>
</template>

<style lang="scss" scoped src="./Sort.scss"/>

<script lang="ts" setup>
import DoSomethingBy from "@/components/DoSomethingBy/DoSomethingBy.vue";
import TotalResults from "@/components/TotalResults/TotalResults.vue";

const emit = defineEmits<{
  (e: 'sortResults', name: string);
}>();

defineProps<{ totalResults: number }>();

const types = [{id: 1, name: 'RELEASE DATE'}, {id: 2, name: 'RATING'}];

const sortResults = (name) => {
  emit('sortResults', name);
}

</script>
