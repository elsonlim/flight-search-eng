import { combineReducers } from 'redux';

import flights from './FlightsReducer';
import searchType from './SearchTypeReducer';
import searchParams from './SearchParamsReducer';

export default combineReducers({
	flights,
	searchType,
	searchParams
});
