import { ref, computed, provide } from 'vue';

function filterByTitle(items, searchTerm) {
    const searchValue = searchTerm.toLowerCase();
    return items.filter(tile => tile.title.toLowerCase().includes(searchValue));
}

function filterByGenre(items, searchTerm) {
    const searchValue = searchTerm.toLowerCase();
    return items.filter(tile => tile.genres.some(genre => genre.toLowerCase().includes(searchValue)));
}

export default function useSearch(initialItems) {
    const items = ref(initialItems)
    const searchTerm = ref('');
    const searchType = ref('TITLE');

    const filteredItems = computed(() => {
        if (!searchTerm.value) return items.value;

        switch (searchType.value) {
            case 'TITLE':
                return filterByTitle(items.value, searchTerm.value);
            case 'GENRE':
                return filterByGenre(items.value, searchTerm.value);
            default:
                return items.value;
        }
    });



    const updateSearchType = (newType) => {
        searchType.value = newType;
    };


    provide('searchTerm', searchTerm);
    provide('filteredItems', filteredItems);

    return {
        searchTerm,
        filteredItems,
        updateSearchType
    };
}
