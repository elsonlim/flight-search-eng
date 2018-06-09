import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlightDetail from '../FlightDetail';

import './FlightRow.css';

/**
 * A FlightRow object
 */
class FlightRow extends Component {
    /**
	 * This method returns depature details and arrival details if available
	 * @returns {ReactElement} flight details
	 */
    getFlightDetails() {
        const { departure, arrival } = this.props;

        if (arrival) {
            return (
                <div>
                    <Grid columns={'equal'}>
                        <Grid.Column>
                            <FlightDetail flightInfo={departure} />
                            <FlightDetail flightInfo={arrival} />
                        </Grid.Column>
                    </Grid>
                </div>
            );
        }

        return (<FlightDetail flightInfo={departure} />);
    }
    
    /**
	 * This method returns full details of a flight include price and select button
	 * @returns {ReactElement} full flight details 
	 */
    render() {
        const { price } = this.props;

        return (
            <div className="flights">
                <Grid>
                    <Grid.Row verticalAlign={'middle'}>
                        <Grid.Column width={10}>
                            {this.getFlightDetails()}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <span className="flight-price">${price}</span>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button content='Select flight' primary /> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>    
        );
    }
}

const mapStateToProps = state => ({
    numberOfPassengers: state.searchParams.numberOfPassengers
});

FlightRow.propTypes = {
    numberOfPassengers: PropTypes.number.isRequired,
    departure: PropTypes.object.isRequired,
    arrival: PropTypes.object,
};

export default connect(mapStateToProps)(FlightRow);