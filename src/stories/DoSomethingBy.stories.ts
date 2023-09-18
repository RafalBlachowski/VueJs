import DoSomethingBy from '../components/DoSomethingBy/DoSomethingBy.vue';

export default {
  title: 'Example/DoSomethingBy',
  component: DoSomethingBy,
  argTypes: {
    items: Array,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DoSomethingBy },
  template: '<DoSomethingBy v-bind="$props" />',
});

export const DefaultList = Template.bind({});
DefaultList.args = {
  items: [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
  ],
};
