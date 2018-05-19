import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightRow from '../FlightRow';

class FlightList extends Component {
    
    getFlightRows(isOneWay) {
        const { flights } = this.props;

        if (isOneWay) {
            return flights.map(flight => 
                (
                    <FlightRow 
                        key={flight.id} 
                        logo={flight.IATA} 
                        departure={flight} 
                        arrival={flight} 
                    /> 
                )
            );
        }

        const flightRows = [];
        flights.forEach((flight) => {
            const returnFlights = flights.filter(
                returnFlight => 
                    returnFlight.to === flight.from
                    && returnFlight.from === flight.to
            );

            returnFlights.forEach((returnFlight) => {
                flightRows.push(
                    <FlightRow 
                        key={`${flight.id}-${returnFlight.id}`} 
                        logo={flight.IATA} 
                        departure={flight} 
                        arrival={returnFlight} 
                    />
                );
            });
        });
        
        return flightRows;
    }
    
    render() {
        return (
            <div>
                {this.getFlightRows()}
            </div>
        );
    };
}

const mapStateToProps = state => ({
    flights: state.flights
});

export default connect(mapStateToProps)(FlightList);


// {
//     "id": 0,
//     "IATA": "DL",
//     "flightNo": 90,
//     "from": "USA",
//     "to": "HKG",
//     "price": {
//         "amount": 261,
//         "currency": "USD"
//     },
//     "time": {
//         "arrival": 609,
//         "departure": 425,
//         "duration": 104
//     }
// }