export default (state, action) => {
	switch (action.type) {
		case 'search-filter':
			return action.payload;
		default:
			return state;
	}
}