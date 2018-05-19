const initState = {
    filter: {
        min: 0,
        max: 2000,
    },
    search: {
        min: 0,
        max: 2000,
    }
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'price_range':
            const newFilterState = Object.assign({}, state);
            newFilterState.filter = action.payload;
            return newFilterState;
        case 'price_search':
            const newSearchState = Object.assign({}, state);
            newSearchState.search = action.payload;
            return newSearchState;
        default:
            return state;
    };
};