import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightRow from '../FlightRow';
import * as Actions from '../../actions';
import './FlightList.css';

class FlightList extends Component {
    
    _getFilteredFlights() {
        const { flights, searchParams } = this.props;
        const { from, to } = searchParams;

        const filteredFlights = {
            departing: [],
            arriving: []
        }

        if(!from || !to) {
            return filteredFlights;
        }

        flights.forEach((flight) => {
            if(flight.from === from && flight.to === to) {
                filteredFlights.departing.push(flight);
            } else if(flight.to === from && flight.from === to ) {
                filteredFlights.arriving.push(flight);
            }
        });
        return filteredFlights;
    }

    _showError() {
        const { from, to } = this.props.searchParams;
            
        const errors = [];
        !from && errors.push(<div key={0} >Please select country to depart from</div>);
        !to && errors.push(<div key={1} >Please select country of arrival</div>);

        if(errors.length) {
            return errors;
        }
        return (<div>No results found</div>);
    }

    _showOnewayFlights(flights) {
        const flightRows = [];
        
        flights.departing.forEach(flight => {
            let price = flight.price.amount;
            
            if(!this._checkRefineSearch(price)) {
                return;
            }

            flightRows.push(
                <FlightRow 
                    key={flight.id} 
                    logo={flight.IATA} 
                    departure={flight}
                    price={flight.price.amount}
                /> 
            ) ;
        });

        return flightRows;
    }

    _showReturnFlights(flights) {
        const {departing, arriving} = flights;
        const flightRows = [];
        
        departing.forEach((flight) => {
            arriving.forEach((returnFlight) => {
                const price = flight.price.amount + returnFlight.price.amount;
                
                if(!this._checkRefineSearch(price)) {
                    return;
                }

                flightRows.push(
                    <FlightRow 
                        key={`${flight.id}-${returnFlight.id}`} 
                        logo={flight.IATA} 
                        departure={flight} 
                        arrival={returnFlight}
                        price={price}
                    />
                );
            });
        });

        return flightRows;
    }

    _checkRefineSearch(price) {
        const priceSearch = this.props.priceRange.search;

        if( price > priceSearch.max || price < priceSearch.min) {
            return false;
        }

        return true;
    }

    getFlightRows(isReturn = true) {
        const flights = this._getFilteredFlights();

        if(flights.departing.length === 0 || (isReturn && flights.arriving.length === 0)) {
            return this._showError();
        }

        if (!isReturn) {
            return this._showOnewayFlights(flights);
        }

        return this._showReturnFlights(flights);
    }

    getFlightDate() {
        const { depatureDate, arrivalDate } = this.props.searchParams;
        const dates = [];
        if(depatureDate) {
            dates.push(<div key={0}>Depart: {depatureDate}</div>);
        }

        if(arrivalDate) {
            dates.push(<div key={1}>Return: {arrivalDate}</div>)
        }

        return dates;
    }
    
    render() {
        return (
            <div>
                <div className="results-header-container">
                    <div className="results-title">Your Results</div>
                    <div className="results-date">
                        {this.getFlightDate()}
                    </div>
                </div>
                {this.getFlightRows(this.props.searchParams.isReturn)}
            </div>
        );
    };
}

const mapStateToProps = state => ({
    flights: state.flights,
    searchParams: state.searchParams,
    priceRange: state.priceRange,
});

export default connect(mapStateToProps, Actions)(FlightList);


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