import { combineReducers } from 'redux';

import flights from './FlightsReducer';
import searchType from './SearchTypeReducer';
import searchParams from './SearchParamsReducer';
import priceRange from './PriceRangeReducer';

export default combineReducers({
	flights,
	searchType,
	searchParams,
	priceRange
});
