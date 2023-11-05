import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
    state: () => ({
        searchTerm: '',
        items: [],
        searchType: 'default'
    }),
    getters: {
        filteredItems: (state) => {
            if (!state.searchTerm) return state.items;
            return state.items.filter(item => item.name.includes(state.searchTerm))
        }
    },
    actions: {
        setSearchTerm(term: string) {
            this.searchTerm = term;
        },
        setSearchType(type: string) {
            this.searchType = type
        },
        async setItems() {
            try {
                const response = await fetch('https://tame-erin-pike-toga.cyclic.app/movies');
                if (!response.ok) {
                    new Error('Problem downloading data');
                }
                this.items = await response.json();
            } catch (error) {
                console.error('Error while downloading data:', error);
            }
        }
    }
})
