<template>
  <div class="do-something-by">
    <h3 class="title">{{ title }}</h3>
    <template v-for="type of types" :key="type.id">
      <CustomButton
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

<script lang="ts">
import { ref } from 'vue';
import CustomButton from "../../stories/CustomButton.vue";

declare interface Type {
  id: number;
  name: string;
}

export default {
  components: {
    CustomButton
  },

  props: {
    types: Array as Type[],
    title: String
  },
  setup(props, { emit }) {
    let selectedType = ref(1);

    const actionByType = (type) => {
      selectedType.value = type.id;
      emit('click', type.name);
    }

    const classes = (typeId) => {
      return 'button-' + typeId;
    }

    return {
      selectedType,
      actionByType,
      classes
    }
  }
}

</script>
