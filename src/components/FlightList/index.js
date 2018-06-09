import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlightRow from '../FlightRow';
import * as Actions from '../../actions';
import './FlightList.css';

/**
 * A FlightList object
 */
export class FlightList extends Component {
    /**
	 * This method returns a object that contains departing and arriving flights
	 * @returns {Object} that contain departing and arriving flight to destination.
	 */
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

    /**
	 * This method returns a list of flights that contains one way flight details
	 * @returns {Array} that contain a list of one way flights
	 */
    _showOnewayFlights(flights) {
        const {numberOfPassengers} = this.props.searchParams;
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
                    price={numberOfPassengers * price}
                /> 
            ) ;
        });

        return flightRows;
    }

    /**
	 * This method returns a list of flights that contains return flight details
	 * @returns {Array} that contain a list of return flights
	 */
    _showReturnFlights(flights) {
        const {departing, arriving} = flights;
        const {numberOfPassengers} = this.props.searchParams;

        const flightRows = [];
        
        departing.forEach((flight) => {
            arriving.forEach((returnFlight) => {
                const price = (flight.price.amount + returnFlight.price.amount);
                
                if(!this._checkRefineSearch(price)) {
                    return;
                }

                flightRows.push(
                    <FlightRow 
                        key={`${flight.id}-${returnFlight.id}`} 
                        logo={flight.IATA} 
                        departure={flight} 
                        arrival={returnFlight}
                        price={numberOfPassengers * price}
                    />
                );
            });
        });

        return flightRows;
    }

    /**
	 * This method shows if price is within the refine search filters
	 * @returns {Boolean} true if flight is within refine search filter
	 */
    _checkRefineSearch(price) {
        const priceSearch = this.props.priceRange.search;

        if( price > priceSearch.max || price < priceSearch.min) {
            return false;
        }

        return true;
    }

    /**
	 * This method returns errors that cause search results not to return
	 * @returns {Array} errors that cause search results not to return
	 */
    _getErrors() {
        const { from, to, depatureDate, arrivalDate, isReturn } = this.props.searchParams;
            
        const errors = [];
        !from && errors.push(<div key={0} >Please select country to depart from</div>);
        !to && errors.push(<div key={1} >Please select country of arrival</div>);

        if(isReturn && arrivalDate && arrivalDate.diff(depatureDate, 'days') < 0) {
            errors.push(<div key={2} >Arrival date cannot be before depature Date</div>);
        }

        return errors;
    }

    /**
	 * This method returns error or one way or return flights
	 * @returns {Array} displays the right type of flights
	 */
    getFlightRows(isReturn = false) {
        const errors = this._getErrors();
        if(errors && errors.length) {
        return (<div className="result-error">{errors}</div>);
        }

        const flights = this._getFilteredFlights();

        if(flights.departing.length === 0 || (isReturn && flights.arriving.length === 0)) {
            return (<div>No results found</div>);
        }

        if (!isReturn) {
            return this._showOnewayFlights(flights);
        }

        return this._showReturnFlights(flights);
    }

    /**
	 * This method returns the depature and arrival dates(if available)
	 * @returns {Array} containing depature and arrival dates
	 */
    getFlightDate(isReturn = false) {
        const { depatureDate, arrivalDate } = this.props.searchParams;
        const dates = [];
        if(depatureDate) {
            dates.push(<div key={0}>Depart: {depatureDate.toDate().toLocaleDateString()}</div>);
        }

        if(isReturn && arrivalDate) {
            dates.push(<div key={1}>Return: {arrivalDate.toDate().toLocaleDateString()}</div>)
        }

        return dates;
    }

    getSearchHeader() {
        const { from, to } = this.props.searchParams;
        
        let headerTitle = " Please enter search values"
        if (from && to) {
            headerTitle = `${from} to ${to}`;
        }

        return (
            <div className="results-header-container">
                <div className="results-title">{headerTitle}</div>
                 <div className="results-date">
                    {this.getFlightDate(this.props.searchParams.isReturn)}
            </div>
        </div>);
    }
    
    /**
	 * This method generates a list of flight row details.
	 * @returns {ReactElement} return a list of FlightRows
	 */
    render() {
        return (
            <div>
                {this.getSearchHeader()}
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

FlightList.propTypes = {
    flights: PropTypes.array.isRequired,
    searchParams: PropTypes.object.isRequired,
    priceRange: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, Actions)(FlightList);