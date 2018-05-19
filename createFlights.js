const fs = require('fs');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

const location = ['USA', 'AUS', 'SGP', 'HKG', 'JPN', 'TWN'];

const airlinesInfo = [
    { origin: 'USA', IATA: 'DL' },
    { origin: 'AUS', IATA: 'QAN' },
    { origin: 'SGP', IATA: 'SQ' },
    { origin: 'HKG', IATA: 'CX' },
    { origin: 'JPN', IATA: 'JAL' },
    { origin: 'JPN', IATA: 'ANA' },
    { origin: 'TWN', IATA: 'EVA' },
];

function getRandomFromArray(arr) {
    return arr[getRandomInt(arr.length)];
}

function getRandomTime() {
    return getRandomInt(24) * 100 + getRandomInt(12) * 5
}

function convertMinsToHrMins(mins) {
    return Math.floor(mins/60) * 100 + mins%60;
}

function convertHrMinsToMins(hrMins) {
    return Math.floor(hrMins/100) * 60 + hrMins%100;
}

function getArrivalTime(time, duration) {
    let timeInMins = convertHrMinsToMins(time) + duration;
    if(timeInMins > (24 * 60)) {
        timeInMins -= (24 * 60);
    }
    return convertMinsToHrMins(timeInMins);
}

// {
//     "id": 1,
//     "IATA": "AAL",
//     "flightNo": 730,
//     "from": "VNM",
//     "to": "USA",
//     "price": {
//         "amount": 149,
//         "currency": "USD"
//     },
//     "time": {
//         "depart": 1510,
//         "duration": 166
//     }
// }
function createFlight(id, airline) {
    let getDestIndex = getRandomInt(location.length);

    if (airline.origin === location[getDestIndex]) {
        getDestIndex += 1;

        if (getDestIndex === location.length) {
            getDestIndex = 0;
        }
    }

    const dest = location[getDestIndex];
    const  departure = getRandomTime();
    const duration = 60 + getRandomInt(200);
    const arrival = getArrivalTime(departure, duration);

    return {
        id: id, 
        IATA: airline.IATA,
        flightNo: getRandomInt(1000),
        from: airline.origin,
        to: dest,
        price: {
            amount: 100 + getRandomInt(900),
            currency: 'USD'
        },
        time: {
            arrival,
            departure,
            duration
        }
    }
}

function getReturnFlight(id, goFlight) {
    const  departure = getRandomTime();
    const duration = 60 + getRandomInt(200);
    const arrival = getArrivalTime(departure, duration);

    return {
        id: id, 
        IATA: goFlight.IATA,
        flightNo: goFlight.flightNo + 1,
        from: goFlight.to,
        to: goFlight.from,
        price: {
            amount: goFlight.price.amount + getRandomFromArray([1, -1]) * getRandomInt(100),
            currency: 'USD'
        },
        time: {
            arrival,
            departure,
            duration
        }
    }
}

const data = [];
let count = 0;

airlinesInfo.forEach(airline => {
    for(let i = 0; i < 3; i++) {
        let flight = createFlight(count++, airline);
        let returnFlight = getReturnFlight(count++, flight);
        
        data.push(flight);
        data.push(returnFlight)
    }
});

fs.writeFile('data/flight-details.json', JSON.stringify(data), (err) => {
	if (err) throw err;
	console.log('complete');
});
