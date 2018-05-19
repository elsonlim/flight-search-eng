export const updateFlightType = isReturnFlight => ({
	type: 'update_flight_type',
	payload: isReturnFlight
});

export const updateSearchParams = searchParams => ({
	type: 'search-filter',
	payload: searchParams
});