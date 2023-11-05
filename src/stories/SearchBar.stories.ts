import SearchBar from '../components/SearchBar/SearchBar.vue';

export default {
    title: 'Example/SearchBar',
    component: SearchBar,
};

const Template = (args) => ({
    components: { SearchBar },
    setup() {
        return { args };
    },
    template: '<SearchBar :title="args.title" :search-type="args.type"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    title: 'Input name',
    type: 'TITLE'
};
