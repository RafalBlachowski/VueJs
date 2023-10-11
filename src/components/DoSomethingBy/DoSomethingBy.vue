<template>
  <div class="do-something-by">
    <h3 class="title">{{ title }}</h3>
    <template v-for="type of types" :key="type.id">
      <MyButton
          class='button'
          :class="[{'selected': selectedType === type.id},classes(type.id)]"
          :size="selectedType === type.id ? 'medium' : 'small'"
          @click="actionByType(type)"
          :label="type.name"
          :primary="selectedType === type.id"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped src="./DoSomethingBy.scss"/>

<script lang="ts" setup>
import {ref} from 'vue';
import MyButton from "@/stories/MyButton.vue";

defineProps<{
  types: [{ id: number, name: string }],
  title: string
}>();
let selectedType = ref(1);

const emit = defineEmits<{
  (e: "click", name: string);
}>();

const actionByType = (type) => {
  selectedType.value = type.id;
  emit('click', type.name);
}

const classes = (typeId) => {
  return 'button-' + typeId;
}

</script>
