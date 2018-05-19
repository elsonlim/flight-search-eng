export const updateFlightType = isReturnFlight => ({
	type: 'update_flight_type',
	payload: isReturnFlight
});

export const updateSearchParams = searchParams => ({
	type: 'search-filter',
	payload: searchParams
});

export const updatePriceRange = priceRange => ({
	type: 'price_range',
	payload: priceRange
});

export const updatePriceSearch = priceSearch => ({
	type: 'price_search',
	payload: priceSearch
});