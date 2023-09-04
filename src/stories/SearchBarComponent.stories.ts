import SearchBarComponent from '../components/SearchBarComponent/SearchBarComponent.vue';

export default {
    title: 'Example/SearchBarComponent',
    component: SearchBarComponent,
};

const Template = (args) => ({
    components: { SearchBarComponent },
    setup() {
        return { args };
    },
    template: '<SearchBarComponent :title="args.title" />',
});

export const Primary = Template.bind({});
Primary.args = {
    title: 'Input name'
};
