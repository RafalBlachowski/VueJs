import { ref, computed, provide } from 'vue';

export default function useSearch(items) {
    const searchTerm = ref('');
    const searchType = ref('TITLE');
    const filteredItems = computed(() => {
        if (!searchTerm.value) return items;
        if (searchType.value === 'TITLE') {
            return items.filter((tile) => {
                const title = tile.title.toLowerCase();
                const searchTermValue =  searchTerm.value.toLowerCase();
                return title.includes(searchTermValue);
            });
        }
        if (searchType.value === 'GENRE') {
            return items.filter((tile) => {
                const searchTermValue =  searchTerm.value.toLowerCase();
                return tile.genres.find(genre => {
                  return genre.toLowerCase().includes(searchTermValue);
                });
            });
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
