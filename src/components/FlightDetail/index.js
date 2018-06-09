import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AirlineLogo from '../AirlineLogo';
import './FlightDetail.css';
import { Grid } from 'semantic-ui-react'

/**
 * A FlightDetail object
 */
class FlightDetail extends Component {
    /**
	 * This method change a number to time(i.e. 2359 to 11:59pm)
	 * @returns {String} that displays time.
	 */
    _numToTime(number) {
        let dayFormat = 'am';
        const mins = ("0" + (number % 100)).slice(-2);
        let hours = Math.floor(number/100%100);
        
        if(hours >= 12) {
            dayFormat = 'pm';
        }

        if(hours > 12) {
            hours -= 12;
        }
        
        hours = ("0" + hours).slice(-2);

        return `${hours}:${mins}${dayFormat}`;
    }

    /**
	 * This method adds a indicator is the flight arrives 
	 * @returns {String} a string indicator of day increment.
	 */
    _getDayIncrement(departure, arrival) {
        if(arrival < departure) {
            return "(+1)"
        }
        return "";
    }

    /**
	 * This method generates a fight detail object
	 * @returns {ReactElement} that show flight details.
	 */
    render () {
        const { flightInfo } = this.props;
        const {arrival, departure} = flightInfo.time;
        return (
            <div className="flight-details" >
                <Grid>
                <Grid.Row verticalAlign={'middle'}>
                    <Grid.Column width="1" />
                    <Grid.Column width="4">
                        <div className="logo">
                            <AirlineLogo airlineLogo={flightInfo.IATA} />
                        </div>
                    </Grid.Column>
                    <Grid.Column width="3">
                        <div className="flight-time">{this._numToTime(departure)}</div>
                        <div className="flight-country">{flightInfo.from}</div>
                    </Grid.Column>
                    <Grid.Column width="4">
                        <div className="flight-connection">
                            <div className="flight-number">{flightInfo.IATA}{flightInfo.flightNo}</div>
                            <hr />
                        </div>                       
                    </Grid.Column>
                    <Grid.Column width="3">
                        <div className="flight-time">
                            {this._numToTime(arrival) + this._getDayIncrement(departure, arrival)}    
                        </div>
                        <div className="flight-country">{flightInfo.to}</div>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        );
    }
}

FlightDetail.propTypes = {
    flightInfo: PropTypes.object.isRequired,
};

export default FlightDetail;