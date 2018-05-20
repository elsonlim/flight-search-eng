import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlightDetail from '../FlightDetail';

import './FlightRow.css';

class FlightRow extends Component {
    getFlightDetails() {
        const { departure, arrival } = this.props;

        if (arrival) {
            return (
                <div>
                    <Grid columns={'equal'}>
                        <Grid.Column>
                            <FlightDetail flightInfo={departure} />
                        </Grid.Column>
                        <Grid.Column>
                            <FlightDetail flightInfo={arrival} />
                        </Grid.Column>
                    </Grid>
                </div>
            );
        }

        return (<FlightDetail flightInfo={departure} />);
    }
    
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
                            ${price}
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

FlightRow.PropTypes = {
    numberOfPassengers: PropTypes.number.isRequired,
    departure: PropTypes.object.isRequired,
    arrival: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(FlightRow);