import data from '../data/flight-details.json';

export default (state = data, action) => {
	switch (action.type) {
		case 'filter_flights':
			return action.payload;
		default:
			return state;
	}
};
