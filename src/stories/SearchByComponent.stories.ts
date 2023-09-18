import SearchByComponent from '../components/SearchByComponent/SearchByComponent.vue';

export default {
    title: 'Example/SearchByComponent',
    component: SearchByComponent,
    argTypes: {
        items: Array,
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SearchByComponent },
    template: '<SearchByComponent v-bind="$props" />',
});

export const DefaultList = Template.bind({});
DefaultList.args = {
    items: [{ id: 1, name: 'TITLE'}, { id: 2, name: 'GENGRE' }],
};