import Sort from '../components/Sort/Sort.vue';

export default {
  title: 'Example/Sort',
  component: Sort,
  argTypes: {
    items: Array,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Sort },
  template: '<Sort v-bind="$props" />',
});

export const DefaultList = Template.bind({});
DefaultList.args = {
  items: [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
  ],
};
