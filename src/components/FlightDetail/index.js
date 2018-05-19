import React, { Component } from 'react';

class FlightDetail extends Component {
    render () {
        const { flightInfo } = this.props;

        return (
            <div>
                <div>{flightInfo.IATA}-{flightInfo.flightNo}</div>
                <div>{flightInfo.from} > {flightInfo.to}</div>
                <div>Depart: {flightInfo.time.departure}</div>
                <div>Arrival: {flightInfo.time.arrival}</div>
            </div>
        );
    }
}

export default FlightDetail;

// {
//     "id": 0,
//     "IATA": "AAL",
//     "flightNo": 180,
//     "from": "USA",
//     "to": "TWN",
//     "price": {
//         "amount": 791,
//         "currency": "USD"
//     },
//     "time": {
//         "arrival": 2226,
//         "departure": 2035,
//         "duration": 111
//     }
// }