import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AirlineLogo from '../AirlineLogo';
import './FlightDetail.css';

class FlightDetail extends Component {

    _numToTime(number) {
        let dayFormat = 'am';
        const mins = ("0" + (number % 100)).slice(-2);
        let hours = Math.floor(number/100%100);
        if(hours > 12) {
            hours -= 12;
            dayFormat = 'pm';
        }

        hours = ("0" + hours).slice(-2);

        return `${hours}:${mins}${dayFormat}`;
    }

    _getDayIncrement(departure, arrival) {
        if(arrival < departure) {
            return "(+1)"
        }
        return "";
    }

    render () {
        const { flightInfo } = this.props;
        const {arrival, departure} = flightInfo.time;
        return (
            <div className="flight-details" >
                <div className="logo">
                    <AirlineLogo airlineLogo={flightInfo.IATA} />
                </div>

                <div className="details">
                    <div>{flightInfo.IATA}-{flightInfo.flightNo}</div>
                    <div>{flightInfo.from} > {flightInfo.to}</div>
                    <div>Depart: {this._numToTime(departure)}</div>
                    <div>Arrival: {this._numToTime(arrival)
                        + this._getDayIncrement(departure, arrival)}</div>
                </div>
            </div>
        );
    }
}

FlightDetail.propTypes = {
    flightInfo: PropTypes.object.isRequired,
};

export default FlightDetail;