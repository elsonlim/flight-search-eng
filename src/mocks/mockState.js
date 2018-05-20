import moment from 'moment';

export const flights = [
    {
        "id": 0,
        "IATA": "DL",
        "flightNo": 90,
        "from": "USA",
        "to": "HKG",
        "price": {"amount": 261, "currency": "USD"},
        "time": {"arrival": 609, "departure": 425, "duration": 104}
    }, {
        "id": 1,
        "IATA": "DL",
        "flightNo": 91,
        "from": "HKG",
        "to": "USA",
        "price": {"amount": 232, "currency": "USD"},
        "time": {"arrival": 1956, "departure": 1730, "duration": 146}
    },
];

export const searchParams = {
    isReturn: true,
    from: 'USA',
    to: 'HKG',
    depatureDate: moment(new Date()),
    arrivalDate: moment(new Date()),
    numberOfPassengers: 1,
}

export const priceRange = {
    filter: {min: 0, max: 2000},
    search: {min: 200, max: 1000},
}

export default {
    flights,
    searchType: false,
    searchParams,
    priceRange
};

    