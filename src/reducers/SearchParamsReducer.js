const initState = {
    isReturn: false,
    from: null,
    to: null,
    depatureDate: null,
    returnDate: null,
    numberOfPassengers: null
};

export default (state = initState, action) => {
	switch (action.type) {
		case 'search-filter':
			return action.payload;
		default:
			return state;
	}
}