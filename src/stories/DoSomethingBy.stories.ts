import DoSomethingBy from '../components/DoSomethingBy/DoSomethingBy.vue';

export default {
  title: 'Example/DoSomethingBy',
  component: DoSomethingBy
};

const Template = (args, { argTypes }) => ({
  components: { DoSomethingBy },
  setup() {
    return { args };
  },
  template: '<DoSomethingBy :types="args.types" :title="args.title"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  types: [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
  ],
  title: 'Example text'
};